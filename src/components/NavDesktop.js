import {NavLink} from 'react-router-dom';

export default function NavDesktop() {
  return (
      <nav className='nav-desktop'>
        <ul>
          <li>
            <NavLink to="/">
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
            About
            </NavLink>
          </li>
          <li>
            <NavLink to="/works">
            Works
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact">
            Contact
            </NavLink>
          </li>   */}
        </ul>
      </nav>
  )
}
