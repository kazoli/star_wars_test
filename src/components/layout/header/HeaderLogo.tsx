import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/star-wars-logo.png';

function HeaderLogo() {
  return (
    <NavLink to="/" className="flex gap-[5px] items-center cursor-pointer">
      <img
        src={logo}
        alt="Logo"
        className="h-[2.5rem] bg-[#606060] shadow-[inset_0_0_15px_0_#fff,0_0_5px_0_#fff] rounded-full p-[5px]"
      />
      <span className="text-[1.2rem] sm:text-[1.5rem] leading-[1.2rem] sm:leading-none px-[5px] text-[#f0f0f0]">
        Star Wars Character Search
      </span>
    </NavLink>
  );
}

export default HeaderLogo;
