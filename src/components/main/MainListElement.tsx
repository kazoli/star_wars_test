import { tStarWarsCharacter } from '../../logics/starWars/starWarsTypes';

type tProps = {
  data: tStarWarsCharacter;
};

function MainListElement(props: tProps) {
  return (
    <div className="group p-[20px] shadow-[inset_0_0_10px_1px_#777,0_0_10px_0_#000] border border-[#000] rounded-[5px]">
      <div className="group-even:bg-[url('/src/assets/images/mock-image-1.png')] bg-[url('/src/assets/images/mock-image.png')] bg-[length:95%_auto] bg-no-repeat bg-center aspect-square mb-[20px] shadow-[inset_0_0_10px_1px_#000,0_0_2px_0_#000] rounded-[5px]"></div>
      <div>{props.data.name}</div>
    </div>
  );
}

export default MainListElement;
