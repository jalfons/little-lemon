import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <h1 id="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking" className="primary-button">
            Reserve a Table
          </Link>
        </div>

        <div className="image-placeholder" aria-label="Restaurant food image placeholder">
          Restaurant Image
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
