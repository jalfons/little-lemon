import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/" aria-label="Go to homepage">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" aria-label="Learn about Little Lemon">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" aria-label="View the Little Lemon menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" aria-label="On Click">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" aria-label="Order food online">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" aria-label="Log in to your account">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
