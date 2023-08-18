import { useEffect, useState } from 'react';
import { scrollToElement } from '../../../logics/general/middlewares';
import { AiOutlineUpSquare } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setJumpTop(window.scrollY > 200));
  }, []);

  return (
    <>
      {jumpTop && (
        <AiOutlineUpSquare
          className="fixed bottom-[15px] right-[15px] bg-[#000] shadow-[0_0_10px_1px_#fff] text-[2rem] text-[#fff] cursor-pointer transition-custom opacity-20 hover:opacity-100 z-[1000] rounded-[5px]"
          title="Jump top"
          onClick={() => scrollToElement('smooth')}
        />
      )}
    </>
  );
}

export default JumpTop;
