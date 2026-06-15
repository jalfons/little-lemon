function Chicago() {
  return (
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
  );
}

export default Chicago;
