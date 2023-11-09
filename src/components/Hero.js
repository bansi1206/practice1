export default function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Lessons and insights <span>from 8 years</span>
          </h1>
          <p className="hero-text">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="hero-button">Register</button>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="hero-image" />
        </div>
      </div>
      <div className="dot-group">
        <div className="dot-item"></div>
        <div className="dot-item"></div>
        <div className="dot-item"></div>
      </div>
    </div>
  );
}
