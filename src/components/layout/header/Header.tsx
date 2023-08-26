import { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';

function Header() {
  const initialPosition = 'top-0';
  const [position, setPosition] = useState(initialPosition);

  // header show only at up scrolling
  useEffect(() => {
    const prev = { top: window.scrollY, position: initialPosition };
    const updateScrollDirection = () => {
      const currPosition =
        window.scrollY > prev.top ? 'top-[-100px]' : initialPosition;
      if (prev.position !== currPosition) {
        // scroll direction change
        setPosition(currPosition);
        // current position becomes prev position
        prev.position = currPosition;
      }
      prev.top = window.scrollY;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      // unmount
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return (
    <header
      className={`${position} sticky z-[1000] py-[10px] bg-[#505050] shadow-[inset_0_0_30px_0_#000,0_0_20px_0_#000] transition-all duration-500`}
    >
      <div className="content-positioner flex items-center justify-between gap-[60px]">
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;
