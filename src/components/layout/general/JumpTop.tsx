import { useEffect, useState } from 'react';
import { scrollToElement } from '../../../logics/general/middlewares';
import { AiOutlineUpSquare } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);

  useEffect(() => {
    // scroll handling function
    const handleScroll = () => {
      const overLimit = window.scrollY > 200;
      // triggers setJumpTop only when previous value is changing
      overLimit !== jumpTop && setJumpTop(overLimit);
    };
    // event listener
    window.addEventListener('scroll', handleScroll);
    // cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, [jumpTop]);

  return (
    <>
      {jumpTop && (
        <AiOutlineUpSquare
          className="fixed bottom-[15px] right-[15px] bg-[#000] shadow-[0_0_7px_3px_#a0a0a0] text-[2rem] text-[#fff] cursor-pointer transition-custom opacity-20 hover:opacity-100 z-[1000] rounded-[5px]"
          title="Jump top"
          onClick={() => scrollToElement('smooth')}
        />
      )}
    </>
  );
}

export default JumpTop;
