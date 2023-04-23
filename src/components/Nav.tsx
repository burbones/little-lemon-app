import { Link } from "react-router-dom";

interface Props {
  navClass: string,
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
}

function Nav(props: Props) {
  return (
    <nav id="navigation">
      <ul id="nav-ul" className={props.navClass}>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/">Home</Link></li>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/about">About</Link></li>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/menu">Menu</Link></li>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/reservations">Reservations</Link></li>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/order">Order Online</Link></li>
        <li onClick={() => props.setIsMenuOpened(false)}><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
