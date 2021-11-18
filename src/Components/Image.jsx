import Flame from "../Assets/3d-flame-278.png";
const Image = () => {
  return (
    <div className="w-full img h-[340px] grid place-items-center">
      <img src={Flame} alt="flame" className="sm:w-[450px] w-[430px] h-[320px] sm:h-[330px]" />
    </div>
  );
};

export default Image;
