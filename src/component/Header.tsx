import { NavLink } from 'react-router';

export function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Login
      </NavLink>
      <NavLink to="/books">Books catalog</NavLink>
      <NavLink to="/authors">Authors catalog</NavLink>
    </nav>
  );
}
