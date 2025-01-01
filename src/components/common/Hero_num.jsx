const HeroNum = ({ num, txt }) => {
  return (
    <div className="md:mx-0 mx-auto">
      <div className="flex items-center gap-1 justify-center">
        <h2 className="lg:text-2xl sm:text-xl text-lg font-bold">{num}</h2>
        <span className="text-mainText lg:text-[32px] md:text-[25px] sm:text-[20px] text-[15px] font-bold mb-[2px]">+</span>
      </div>
      <p className="text-mainWhite sm:text-[15px] text-[12px]">{txt}</p>
    </div>
  );
};

export default HeroNum;
