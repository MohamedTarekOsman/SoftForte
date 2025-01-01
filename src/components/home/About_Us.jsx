/* eslint-disable react/prop-types */

import AboutPanel from "../common/AboutPanel";
import TitleComponent from "../CustomComponents/TitleComponent";
import about from "../../assets/Project Images/about-Us-section.png";
import LearnMore from "../common/LearnMore";

const AboutUs = () => {
  return (
    <AboutPanel aboutClass="justify-center" src={about}>
      <TitleComponent
        header="ABOUT US"
        ttlClass="xl:!text-[47px] md:!text-[39px] !text-[33px] !text-black !font-bold !mb-6"
        headerColor="!mt-1"
      >
        Why You Should Choose
        <span className="text-mainText"> Soft Forte</span>
      </TitleComponent>
      <p className="xl:text-[20px] text-[18px] ">
        At Soft Forte, we deliver innovative solutions in mobile development,
        web development, UI/UX design, and video editing.Our expert team is
        dedicated to creating tailored digital products that help businesses
        thrive.
      </p>
      <LearnMore />
    </AboutPanel>
  );
};

export default AboutUs;
