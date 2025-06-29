import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import logo from '../img/logo.png';
import '../css/header.css';

function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <nav>
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
                </div>
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