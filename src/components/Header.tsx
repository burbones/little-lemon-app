import Nav from "./Nav";
import logo from "../img/Logo.svg";
import hamBar from "../img/🦆 icon _hamburger menu_.png";
import basket from "../img/Basket.png";
import { useEffect, useState } from "react";

function Header() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [navClass, setNavClass] = useState("navBar hidden");

  useEffect(() => {
    isMenuOpened ? setNavClass("navBar") : setNavClass("navBar hidden");
  }, [isMenuOpened])

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <header>
        <img className="mobile" src={hamBar} alt="hamburger menu" onClick={() => handleMenuClick()}/>
        <img src={logo} alt="Little Lemon Logo"/>
        <img className="mobile" src={basket} alt="basket"/>
        <Nav navClass={navClass} setIsMenuOpened={setIsMenuOpened}/> 
    </header>
  )
}

export default Header;
