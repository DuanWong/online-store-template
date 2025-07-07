import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // 汉堡图标和关闭图标
import logo from '../img/logo.png';
import '../css/header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className='header-container'>
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className={`nav ${isOpen ? 'active' : ''}`}>
                    <ul className='header-list'>
                        <li>
                            <NavLink to="./" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/product' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="./about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
                <div className="header-icons">
                    <div className="user-box">
                        <Link to="/user" >
                            <FaUser className="user-icon" />
                        </Link>My Account
                    </div>
                    <div className="cart-box">
                        <Link to="/cart" >
                            <FaShoppingCart className="cart-icon" />
                        </Link>Cart
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;