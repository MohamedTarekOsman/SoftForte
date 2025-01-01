/* eslint-disable react/prop-types */

import ProcessPanel from "../common/ProcessPanel";

const Process = ({
  children,
  panelsData = [],
  showDivider,
  headClass,
  imgClass,
  divClass,
  descClass,
  panelClass,
  Class,
}) => {
  return (
    <div className={`${Class} lg:px-20 md:px-14 px-4 flex flex-col gap-2`}>
      <div>{children}</div>
      <div
        className={`${panelClass} grid lg:grid-cols-2 grid-cols-1 gap-8 md:mt-10 mt-0 w-full h-full grid-rows-3`}
      >
        {panelsData.map((panel, index) => (
          <ProcessPanel
            key={index}
            txt={panel.txt}
            desc={panel.desc}
            src={panel.src}
            showDivider={showDivider}
            headClass={headClass}
            imgClass={imgClass}
            divClass={divClass}
            descClass={descClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
