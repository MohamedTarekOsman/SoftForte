/* eslint-disable react/prop-types */
const ProcessPanel = ({
  txt,
  desc,
  src,
  showDivider = true,
  headClass,
  imgClass,
  divClass,
  descClass,
}) => {
  return (
    <div className="w-full h-full">
      <div className={`flex items-center gap-3 h-[inherit] ${divClass} `}>
        <img src={src} alt={txt} className={`${imgClass} `} />
        <div className="flex flex-col gap-2">
          <h2
            className={`lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] text-black font-bold ${headClass}`}
          >
            {txt}
          </h2>
          <p
            className={`md:text-[16px] text-[14px] text-black/70 ${descClass}`}
          >
            {desc}
          </p>
        </div>
      </div>
      {showDivider && (
        <div className="block w-full h-[3px] bg-bgProcess mt-6"></div>
      )}
    </div>
  );
};

export default ProcessPanel;
