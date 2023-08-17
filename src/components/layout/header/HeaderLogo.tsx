import { NavLink } from 'react-router-dom';

function HeaderLogo() {
  return (
    <NavLink to="/" className="flex items-center cursor-pointer">
      <span className="text-[1.2rem] sm:text-[1.5rem] px-[5px]">
        Star Wars Characters
      </span>
    </NavLink>
  );
}

export default HeaderLogo;
