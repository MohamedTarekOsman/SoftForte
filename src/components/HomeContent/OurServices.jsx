import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/Project Images/mobile.png";
import img2 from "../../assets/Project Images/UI-UX.png";
import img3 from "../../assets/Project Images/web.png";
import TitleComponent from "../CustomComponents/TitleComponent";

const OurServices = () => {
  const services = [
    {
      title: "Mobile Development",
      description:
        "We create high-quality mobile applications with 3D and advanced features.",
      image: img1,
    },
    {
      title: "Web Development",
      description:
        "We offer full range of web development services from landing pages to complex web apps.",
      image: img2,
    },
    {
      title: "UI/UX Design",
      description:
        "Our design approach ensures intuitive and highly engaging user interfaces.",
      image: img3,
    },
    {
      title: "Mobile Development",
      description:
        "We create high-quality mobile applications with 3D and advanced features.",
      image: img1,
    },
    {
      title: "Web Development",
      description:
        "We offer full range of web development services from landing pages to complex web apps.",
      image: img2,
    },
  ];

  return (
    <div className="w-full p-7 bg-violet-800" id="services">
      <div className="max-w-screen-xl mx-auto"> 
      <TitleComponent
        header={"OUR SERVICES"}
        width={"auto"}
        headerColor={"text-white"}
        ttlClass="xl:!text-[47px] md:!text-[42px] !text-[35px] !font-bold"
      >
        What <span className="text-cyan-400">Services</span><br/> We&lsquo;re
        Offering
      </TitleComponent>

      <Swiper
        style={{padding:"20px" }}
        modules={[Pagination, Mousewheel]}
        slidesPerView={1}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
            
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
          },
        }}
      >
        {services.map((service, index) => (
           <SwiperSlide key={index}>
           <div className="mt-5 md:mt-10 transition-all swiper-slide-content">
             <div className="bg-white rounded-t-[50%] rounded-b-3xl shadow-lg text-center w-[100%]  md:w-[350px] mx-0 md:mx-auto">
               <img
                 src={service.image}
                 alt={service.title}
                 className="w-full h-50 md:h-64 object-cover mx-auto mb-5"
               />
               <h3 className="text-lg md:text-xl font-semibold text-violet-800 mb-2">
                 {service.title}
               </h3>
               <p className="text-gray-600 mb-4 text-xs md:text-sm">
                 {service.description}
               </p>
               <p className="bg-violet-950 text-white px-4 md:px-6 rounded-b-2xl py-5 hover:bg-violet-900 mb-16">
                 Read More
               </p>
             </div>
           </div>
         </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
