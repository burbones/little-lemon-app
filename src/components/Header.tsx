import Nav from "./Nav";
import logo from "../img/Logo.svg";

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo"/>
        <Nav /> 
    </header>
  )
}

export default Header;
