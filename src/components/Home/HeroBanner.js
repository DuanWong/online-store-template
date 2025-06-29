import '../../css/Home-Style/HeroBanner.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1>Premium Brands, Exceptional Experiences</h1>
      <p>
      Discover cutting-edge technology, innovative design,
     and world-class quality from the brands that define excellence.
        From smartphones to sportswear, laptops to lifestyle products – find everything you need in one
         trusted destination
      </p>
      <div className="hero-banner__buttons">
        <button className="hero-banner__btn explore">Explore More</button>
        <button className="hero-banner__btn buy">Buy Now</button>
      </div>
    </div>
  );
}

export default HeroBanner;