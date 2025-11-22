import "../App.css";

const BongoDBBanner = () => (
  <section className="bongo-banner">
    <div className="banner-content">
      <h1 className="banner-title">
        BongoDB: Modern Database Power
      </h1>
      <p className="banner-desc">
        Fast, scalable storage for your apps. Unlock security, AI integration, and robust performance with BongoDB’s next-gen technology.
      </p>
      <div className="banner-actions">
        <button className="banner-btn">
          Get Started
        </button>
        <a href="/contact" className="banner-link">
          Contact Sales
        </a>
      </div>
    </div>
    <img
      src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt4b8f5d88e7e5fcb7/6570d7ff19f33769508d1cf6/General_TECHNOLOGY_Database_Spot_BS_Mist.svg"
      alt="Database illustration"
      className="banner-img"
    />
  </section>
);

export default BongoDBBanner;