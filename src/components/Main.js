function Main() {
  return (
    <main id="home">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-content">
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant focused on traditional
              recipes served with a modern twist.
            </p>
            <a href="#reservations" className="primary-button">
              Reserve a Table
            </a>
          </div>

          <div className="image-placeholder" aria-label="Restaurant food image placeholder">
            Restaurant Image
          </div>
        </div>
      </section>

      <section id="menu" className="highlights-section" aria-labelledby="highlights-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="highlights-title">This Week&apos;s Specials</h2>
            <a href="#order-online" className="secondary-button">
              Order Online
            </a>
          </div>

          <div className="specials-grid">
            <article className="special-card">
              <div className="card-image-placeholder">Dish Image</div>
              <div className="card-content">
                <div className="card-title-row">
                  <h3>Greek Salad</h3>
                  <span>$12.99</span>
                </div>
                <p>
                  Fresh tomatoes, cucumbers, olives, feta cheese and herbs.
                </p>
              </div>
            </article>

            <article className="special-card">
              <div className="card-image-placeholder">Dish Image</div>
              <div className="card-content">
                <div className="card-title-row">
                  <h3>Bruschetta</h3>
                  <span>$5.99</span>
                </div>
                <p>
                  Grilled bread with garlic, tomatoes, basil and olive oil.
                </p>
              </div>
            </article>

            <article className="special-card">
              <div className="card-image-placeholder">Dish Image</div>
              <div className="card-content">
                <div className="card-title-row">
                  <h3>Lemon Dessert</h3>
                  <span>$5.00</span>
                </div>
                <p>
                  A traditional sweet lemon dessert made with family flavors.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title">Testimonials</h2>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="rating">★★★★★</p>
              <h3>Maria</h3>
              <p>Great food and a very easy reservation experience.</p>
            </article>

            <article className="testimonial-card">
              <p className="rating">★★★★★</p>
              <h3>James</h3>
              <p>The specials were excellent and the staff were friendly.</p>
            </article>

            <article className="testimonial-card">
              <p className="rating">★★★★★</p>
              <h3>Sofia</h3>
              <p>A warm restaurant with delicious Mediterranean dishes.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="container about-layout">
          <div>
            <h2 id="about-title">About Little Lemon</h2>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant in Chicago.
              The restaurant combines fresh ingredients, traditional recipes and
              a welcoming experience for local customers.
            </p>
          </div>

          <div className="about-images">
            <div className="image-placeholder small">Chef Image</div>
            <div className="image-placeholder small">Restaurant Image</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
