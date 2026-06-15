import logo from '../assets/little-lemon-logo.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <img src={logo} alt="Little Lemon logo" className="footer-logo" />
        </div>

        <section aria-labelledby="footer-navigation">
          <h2 id="footer-navigation">Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact">Contact</h2>
          <address>
            123 Lemon Street<br />
            Chicago, IL<br />
            <a href="tel:+13125550124">+1 312 555 0124</a><br />
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </address>
        </section>

        <section aria-labelledby="footer-social">
          <h2 id="footer-social">Social Media</h2>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">X / Twitter</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
