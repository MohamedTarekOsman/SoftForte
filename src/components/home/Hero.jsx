import LandingImage from "../../assets/Project Images/LandingImage.png";
import HeroNum from "../common/Hero_num";
import TitleComponent from "../CustomComponents/TitleComponent";

const Hero = () => {
  return (
    <div className="hero lg:block flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40 block lg:hidden"></div>
      <div className="max-w-screen-xl mx-auto relative text-white">
        <div className="text-center lg:mb-14 md:mb-8 mb-4 md:px-8 sm:px-12 px-5 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <TitleComponent
              ttlClass="lg:!text-[50px] sm:!text-[40px] !text-[35px] font-bold md:px-0 md:text-start"
              headerColor="!mt-0"
            >
              We Are <span className="text-mainText">Creative</span>
              <span className="">
                <br />
                Digital Agency
              </span>
            </TitleComponent>
            <div className="">
              <div className="flex gap-3 items-center my-auto">
                <span className="w-1 h-[85px] md:block hidden bg-gray-400"></span>
                <p className="text-mainWhite md:text-start lg:text-[20px] md:text-[15px] sm:text-[18px] text-[15px]">
                  We are a creative agency with several services that focus on
                  quality and innovations for your business.
                </p>
              </div>

              <div className="flex lg:gap-6 md:gap-4 gap-3 px-3 mt-6">
                <HeroNum num="3" txt="Years of Experience" />
                <HeroNum num="158" txt="Trusted Clients" />
                <HeroNum num="166" txt="Completed Projects" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center -bottom-10 relative hidden">
          <img
            src={LandingImage}
            alt="Team"
            className="absolute lg:w-[75%] mg:w-[85%] sm:w-[90%] w-[95%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
