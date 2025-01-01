/* eslint-disable react/prop-types */

const AboutPanel = ({ aboutClass, src, children, divClass, imgClass }) => {
  return (
    // <div
    //   className={`${divClass} xl:mt-[290px] lg:mt-[200px] mt-8 lg:mb-[140px] md:mb-[100px] mb-[60px]`}
    // >
    <div
      className={`${divClass} xl:mt-[290px] lg:mt-[200px] mt-8 lg:mb-[140px] md:mb-[100px] mb-[60px] flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 xl:px-36 lg:px-26 px-8`}
    >
      <img src={src} alt="Team" className={`${imgClass} w-full h-full`} />
      <div className={`flex flex-col gap-3 ${aboutClass}`}>{children}</div>
    </div>
  );
};

export default AboutPanel;
