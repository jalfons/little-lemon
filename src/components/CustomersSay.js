const testimonials = [
  {
    id: 1,
    name: 'Maria',
    review: 'Great food and a very easy reservation experience.',
  },
  {
    id: 2,
    name: 'James',
    review: 'The specials were excellent and the staff were friendly.',
  },
  {
    id: 3,
    name: 'Sofia',
    review: 'A warm restaurant with delicious Mediterranean dishes.',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title">Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <p className="rating">★★★★★</p>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
