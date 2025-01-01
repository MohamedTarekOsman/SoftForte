import OurServices from "../components/HomeContent/OurServices";
import OurTeam from "../components/HomeContent/OurTeam";
import Testimonial from "../components/HomeContent/Testimonial";
import Tracks from "../components/HomeContent/Tracks";
import Hero from "../components/home/Hero";
import About_Us from "../components/home/About_Us";
import FAQ from "../components/FAQ/FAQ";
import Process from "../components/common/Process";
import TitleComponent from "../components/CustomComponents/TitleComponent";
import Discovery from "../assets/Project Images/Discovery.svg";
import Testing from "../assets/Project Images/Testing.svg";
import Prototyping from "../assets/Project Images/Prototyping.svg";
import Launch from "../assets/Project Images/Launch.svg";
import Development from "../assets/Project Images/Development.svg";
import Update from "../assets/Project Images/Update.svg";

const panelsData = [
  {
    txt: "Discovery & Planning",
    desc: "We begin by understanding your business goals, target audience, and app requirements. Through detailed discussions and analysis, we define the scope, features, and timelines.",
    src: Discovery,
  },
  {
    txt: "Testing & QA",
    desc: "We rigorously test the app to identify and fix any bugs or performance issues. This includes both functional testing and user testing to ensure a flawless experience.",
    src: Testing,
  },
  {
    txt: "Wireframing & Prototyping",
    desc: "Our designers create wireframes and prototypes to map out the app’s structure, user flows, and overall design, ensuring a seamless user experience",
    src: Prototyping,
  },
  {
    txt: "Launch & Deployment",
    desc: "Once everything is perfected, we launch the app on app stores, ensuring it meets platform guidelines and is ready for users. We provide full support during the deployment phase.",
    src: Launch,
  },
  {
    txt: "Development",
    desc: "Using the latest technologies like Flutter, React Native, iOS, and Android, we build the core features of the app, ensuring smooth performance and functionality across devices.",
    src: Development,
  },
  {
    txt: "Post-Launch Support",
    desc: "After the launch, we continue to monitor the app’s performance, offering maintenance and updates to ensure it stays optimized and bug-free.",
    src: Update,
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <About_Us />
      <OurServices />
      <OurTeam />
      <Testimonial />
      <FAQ />
      <Tracks />
      <Process
        panelsData={panelsData}
        imgClass="lg:w-[113px] md:w-[100px] sm:w-[85px] w-[70px] h-full"
        Class="my-24"
      >
        <TitleComponent
          header="OUR PROCESS"
          ttlClass="lg:!text-[54px] md:!text-[47px] !text-[35px] font-bold !text-black"
          headerColor="!mb-0"
        >
          Our Mobile Development
          <br />
          <span className="text-mainText"> Process</span>
        </TitleComponent>
      </Process>
    </div>
  );
};

export default Home;
