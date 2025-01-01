/* eslint-disable react/prop-types */
// TitleComponent.js
const TitleComponent = ({ children, width, header, headerColor, ttlClass }) => {
  return (
    <div className="w-full flex-col">
      <p className={`${headerColor} mt-10 `}>{header}</p>
      <h2
        className={`text-5xl text-white font-bold ${ttlClass}`}
        style={{ width: width || "100%" }}
      >
        {children}
      </h2>
    </div>
  );
};

export default TitleComponent;
