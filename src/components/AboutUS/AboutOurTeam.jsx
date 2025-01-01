
import TitleComponent from "../CustomComponents/TitleComponent";
import AboutPanel from "../common/AboutPanel";
import about from "../../assets/Project Images/aboutt.png";
import about2 from "../../assets/Project Images/about2.png";
import about3 from "../../assets/Project Images/about3.png";
import about4 from "../../assets/Project Images/about4.png";
import consumer from "../../assets/Icons/consumer-centric1.svg";
import discussion1 from "../../assets/Icons/discussion1.svg";
import gear from "../../assets/Icons/gear-2.svg";
import invention1 from "../../assets/Icons/invention1.svg";
import solutions1 from "../../assets/Icons/solutions1.svg";
import accept from "../../assets/Icons/accept1.svg";
import Process from "../common/Process";
import Testimonial from "../HomeContent/Testimonial";

const AboutOurTeam = () => {
 

  const panelsData = [
    {
      txt: "Expertise Across Digital Services:",
      desc: "From mobile and web development to UI/UX design, graphic design, and video editing, Soft Forte offers a full range of services to support every stage of your digital journey.",
      src: discussion1,
    },
    {
      txt: "Customized Solutions:",
      desc: "We know every business is unique. That’s why we take the time to understand your goals and tailor our solutions to meet your specific needs, delivering work that truly reflects your brand.",
      src: solutions1,
    },
    {
      txt: "Commitment to Quality and Innovation:",
      desc: "Our team combines creativity with technical precision, staying on top of industry trends to ensure that every project is innovative, functional, and of the highest quality.",
      src: invention1,
    },
    {
      txt: "Client-Centered Approach:",
      desc: "From mobile and web development to UI/UX design, graphic design, and video editing, Soft Forte offers a full range of services to support every stage of your digital journey.",
      src: consumer,
    },
    {
      txt: "Ongoing Support:",
      desc: "Our commitment doesn’t end at launch. We provide continued support to ensure your project remains optimized and up-to-date, helping you adapt and grow over time.",
      src: gear,
    },
  ];

  const acceptData = [
    {
      txt: "Customized Digital Solutions:",
      desc: "Tailored services that meet your unique business needs, whether it’s app development, web design, branding, or video content.",
      src: accept,
    },
    {
      txt: "Innovative, High-Quality Work:",
      desc: "Our team combines creativity with the latest technology to deliver polished, impactful digital experiences that make a lasting impression.",
      src: accept,
    },
    {
      txt: "Transparent Communication:",
      desc: "From day one, we keep you involved with regular updates and feedback, ensuring every step aligns with your vision.",
      src: accept,
    },
    {
      txt: "On-Time Delivery:",
      desc: "From day one, we keep you involved with regular updates and feedback, ensuring every step aligns with your vision.",
      src: accept,
    },
    {
      txt: "Long-Term Support:",
      desc: "Beyond project completion, we provide ongoing support, updates, and optimization to keep your digital assets performing at their best.",
      src: accept,
    },
  ];

  const whatData = [
    {
      txt: "Mobile Development",
      desc: "We create high-quality mobile applications for iOS, Android, and cross-platform solutions. ",
      src: accept,
    },
    {
      txt: "Web Development",
      desc: "From engaging landing pages to complex web applications, we design and build responsive, scalable websites using frameworks like React, Angular, and Node.js.",
      src: accept,
    },
    {
      txt: "UI/UX Design",
      desc: "Our UI/UX team crafts intuitive, visually engaging designs that improve user satisfaction and ease of use. ",
      src: accept,
    },
    {
      txt: "Graphic Design",
      desc: "We help brands make a memorable impression through striking visual designs. Our graphic design services include logo design, branding, marketing materials, and social media graphics.",
      src: accept,
    },
    {
      txt: "Video Editing",
      desc: "We create dynamic, high-quality videos that tell your brand’s story. From promotional videos and tutorials to motion graphics and animations.",
      src: accept,
    },
  ];

  return (
    <>
      <div className="w-full p-7">
        <div>
          <AboutPanel
            divClass="lg:!mt-20 md:!mt-8 !mt-4 lg:flex-row-reverse flex-col xl:!px-24 !px-4"
            aboutClass="justify-center"
            imgClass="lg:!h-[540px] h-full lg:max-w-xl w-full"
            src={about}
           >
            <TitleComponent
              header="ABOUT US"
              ttlClass="lg:!text-[31px] md:!text-[28] !text-[26px] !text-mainText !font-bold !my-2"
              headerColor="!mt-1 text-aboutText md:text-[30px] text-[25px]"
            >
              Bridging Creativity and Technology
            </TitleComponent>
            <p className="md:text-[21] text-[18px] text-black/70">
              <span className="font-bold text-black">Soft Forte </span>
              was founded on the belief that the best digital experiences are
              crafted at the intersection of creativity and technology. Our
              journey began with a small team of passionate designers and
              developers who saw an opportunity to make a difference by helping
              brands navigate the digital landscape. <br />
              <p className="mt-[14px]">
                From our humble beginnings, we’ve grown into a full-service
                digital agency with expertise in mobile development, web
                development, UI/UX design, graphic design, and video editing.
              </p>
            </p>
          </AboutPanel>
        </div>
      <Testimonial />

      {/* Why You Should */}
      <div>
        <AboutPanel
          divClass="lg:!mt-20 md:!mt-14 !mt-10 xl:!px-24 !px-4 gap-5"
          // aboutClass="justify-center"
          imgClass="lg:!h-[921px] rounded-2xl h-full w-full lg:!w-[564px] object-cover"
          src={about2}
        >
          <Process
            panelsData={panelsData}
            Class="!px-0 my-auto"
            panelClass="!flex !flex-col !mt-4 !gap-2"
            headClass="sm:!text-[19px] !text-[16px] !text-aboutText"
            descClass="xl:!text-[16px] lg:!text-[14px]"
            divClass="!items-start"
            showDivider={false}
          >
            <TitleComponent
              headerColor="!mt-4"
              ttlClass="xl:!text-[47px] lg:!text-[37px] md:!text-[39px] sm:!text-[33px] !text-[27px] !text-black !font-bold !mb-1 xl:!max-w-[400px] lg:!w-full md:!w-[400px] !w-full"
              //  width={"400px"}
            >
              Why You Should Choose
              <span className="text-mainText "> Soft Forte</span>
            </TitleComponent>
            <p className="xl:text-[20px] lg:text-[16px] md:text-[21] text-[18px] text-black/70 my-5">
              At Soft Forte, we deliver innovative solutions in mobile
              development, web development, UI/UX design, and video editing.Our
              expert team is dedicated to creating tailored digital products
              that help businesses thrive .
            </p>
            <h2 className="text-mainText lg:text-[24] md:text-[21] text-[18px] font-semibold my-2">
              OUR TEAM OF EXPERTS
            </h2>
          </Process>
          {/* <div className="flex flex-col w-full h-full">
            {panelsData.map((panel, index) => (
              <ProcessPanel
                headClass="xl:!text-[21px] sm:!text-[18px] !text-[16px] !text-aboutText"
                descClass="xl:!text-[18px] lg:!text-[14px]"
                divClass="!items-start"
                key={index}
                txt={panel.txt}
                desc={panel.desc}
                src={panel.src}
                showDivider={false}
              />
            ))}
          </div> */}
        </AboutPanel>
      </div>
      {/* With Soft Forte */}
      <div>
        <AboutPanel
          divClass="lg:!mt-20 md:!mt-8 !mt-4 xl:!px-24 !px-4 gap-5 lg:flex-row-reverse flex-col"
          imgClass="!object-cover "
          src={about3}
        >
          <Process
            panelsData={acceptData}
            Class="!px-0 my-auto"
            panelClass="!flex !flex-col !gap-4"
            headClass="xl:!text-[21px] sm:!text-[18px] !text-[16px] !text-aboutText"
            divClass="!items-start"
            showDivider={false}
          >
            <TitleComponent
              headerColor="!mt-4"
              ttlClass="xl:!text-[47px] lg:!text-[37px] md:!text-[39px] sm:!text-[33px] !text-[27px] !text-black !font-bold !mb-2 xl:!max-w-[400px] lg:!w-full md:!w-[400px] !w-full"
              //  width={"400px"}
            >
              With
              <span className="text-mainText"> Soft Forte </span>You Will Get
            </TitleComponent>
          </Process>
        </AboutPanel>
      </div>

      {/* With Soft Forte */}
      <div>
        <AboutPanel
          divClass="lg:!mt-20 md:!mt-8 !mt-4 xl:!px-24 !px-4 gap-5"
          imgClass="!object-cover "
          src={about4}
        >
          <Process
            panelsData={whatData}
            Class="!px-0 my-auto"
            panelClass="!flex !flex-col !mt-4 !gap-4"
            headClass="xl:!text-[21px] sm:!text-[18px] !text-[16px] !text-aboutText"
            divClass="!items-start"
            showDivider={false}
          >
            <TitleComponent
              headerColor="!mt-4"
              ttlClass="xl:!text-[47px] lg:!text-[37px] md:!text-[39px] sm:!text-[33px] !text-[27px] !text-black !font-bold !mb-1 xl:!max-w-[400px] lg:!w-full md:!w-[400px] !w-full"
              //  width={"400px"}
            >
              What
              <span className="text-mainText"> Services </span>We’re Offering
            </TitleComponent>
          </Process>
        </AboutPanel>
      </div>
      </div>
    </>
  );
};

export default AboutOurTeam;