import logo from '../assets/little-lemon-logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <a href="#home" className="logo-link" aria-label="Little Lemon home">
          <img src={logo} alt="Little Lemon logo" className="site-logo" />
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
