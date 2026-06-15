import { Link } from 'react-router-dom';
import logo from '../assets/little-lemon-logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <Link to="/" className="logo-link" aria-label="Little Lemon homepage">
          <img src={logo} alt="Little Lemon restaurant logo" className="site-logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
