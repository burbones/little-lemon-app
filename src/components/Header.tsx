import Nav from "./Nav";
import logo from "../img/Logo.svg";
import hamBar from "../img/🦆 icon _hamburger menu_.png";
import basket from "../img/Basket.png";

function Header() {
  return (
    <header>
        <img className="mobile" src={hamBar} alt="hamburger menu"/>
        <img src={logo} alt="Little Lemon Logo"/>
        <img className="mobile" src={basket} alt="basket"/>
        <Nav /> 
    </header>
  )
}

export default Header;
