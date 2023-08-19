import { tStarWarsCharacter } from '../../logics/starWars/starWarsTypes';

type tProps = {
  data: tStarWarsCharacter;
  image: string;
};

function MainListElement(props: tProps) {
  return (
    <div className="p-[20px] shadow-[inset_0_0_10px_1px_#777,0_0_10px_0_#000] border border-[#000] rounded-[5px]">
      <img
        src={props.image}
        alt={props.image}
        className="w-full px-[10px] mb-[20px] shadow-[0_0_2px_0_#000] rounded-[5px]"
      />
      <div>{props.data.name}</div>
    </div>
  );
}

export default MainListElement;
