import BGImage from '../../../assets/Project Images/Rectangle 87.png'

const BusinessSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${BGImage})`, // Replace with your image path
      }}
    >
      {/* Overlay for a dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h4 className="text-lg uppercase text-blue-400 font-semibold tracking-wide">
          Business
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold my-4 text-white">
          Find Your Perfect Solution For Your Business
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          We’d love to hear from you! Whether you’re looking to start a project,
          have questions about our services, or just want to learn more about{" "}
          <span className="font-bold text-white">Soft Forte</span>, our team is
          here to help.
        </p>
      </div>
    </div>
  );
};

export default BusinessSection;
