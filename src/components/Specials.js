import { Link } from 'react-router-dom';

const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description: 'Fresh tomatoes, cucumbers, olives, feta cheese and herbs.',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread with garlic, tomatoes, basil and olive oil.',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description: 'A traditional sweet lemon dessert made with family flavors.',
  },
];

function Specials() {
  return (
    <section id="menu" className="highlights-section" aria-labelledby="highlights-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="highlights-title">This Week&apos;s Specials</h2>
          <Link to="/order-online" className="secondary-button">
            Order Online
          </Link>
        </div>

        <div className="specials-grid">
          {specials.map((special) => (
            <article className="special-card" key={special.id}>
              <div className="card-image-placeholder">Dish Image</div>
              <div className="card-content">
                <div className="card-title-row">
                  <h3>{special.name}</h3>
                  <span>{special.price}</span>
                </div>
                <p>{special.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
