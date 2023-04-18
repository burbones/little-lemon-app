import logo from "../img/Logo.svg";

function Footer() {
  return (
    <footer>
      <section>
        <img src={logo} alt="Little Lemon Logo"/>
        <ul className="footer_menu">
          <li>
            Doormat Navigation
            <ul className="footer_menu_inner">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
          </li>
          <li>
            Contact
            <ul className="footer_menu_inner">
                <li>Adress</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
          </li>
          <li>
            Social Media Links
            <ul className="footer_menu_inner">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;
