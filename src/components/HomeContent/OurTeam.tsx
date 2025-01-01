import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import img1 from '../../assets/Project Images/review-user.png';
import stars from '../../assets/Project Images/download.png';
import TitleComponent from '../CustomComponents/TitleComponent';
import React from 'react';

const OurTeam = () => {
  const services = [
    {
      title: " “ ",
      description: "We create high-quality mobile applications with 3D and advanced features.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "Ali Ahmed",
      role: "FOUNDER & CEO",
    },
    {
      title: " “ ",
      description: "We offer full range of web development services from landing pages to complex web apps.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "Ali Ahmed",
      role: "FOUNDER & CEO",
    },
    {
      title: " “ ",
      description: "Our design approach ensures intuitive and highly engaging user interfaces.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "Ali Ahmed",
      role: "FOUNDER & CEO",
    },
    {
      title: " “ ",
      description: "We create high-quality mobile applications with 3D and advanced features.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "Ali Ahmed",
      role: "FOUNDER & CEO",
    },
    {
      title: " “ ",
      description: "We offer full range of web development services from landing pages to complex web apps. We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "Ali Ahmed",
      role: "FOUNDER & CEO",
    },
  ];

  return (
    <div className=" p-7 bg-white" id="ourTeam">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col md:flex-row">
          <TitleComponent header={"OUR TEAM"} width={"auto"} headerColor={"text-black"} ttlClass="xl:!text-[47px] md:!text-[42px] !text-[35px] !text-black !font-bold">
            <p className="text-black">Who Are <span className="text-cyan-400">Our <br/>Team</span> Members</p>
          </TitleComponent>
          <div className="px-2 md:px-7 w-full md:w-[90%] ">
            <p className="text-gray-600 text-md md:text-lg mt-3 md:mt-14">
              <span className="text-gray-700 font-bold">At Soft Forte,</span> our talented team of professionals is the backbone of everything we do. With diverse skills and a passion for innovation, each member plays a vital role in delivering high-quality digital solutions for our clients.
            </p>
          </div>
        </div>
      
      <Swiper
        style={{padding:"20px" }}
        modules={[Pagination,Mousewheel]}
        slidesPerView={1}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
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
            <div className="transition-all mt-5 md:mt-10 swiper-slide-content mb-8 md:mb-16">
            <div className="flex justify-center md:justify-start">
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 md:w-[80px] md:h-[80px] rounded-full mb-4 -ml-24 md:ml-40"
            />
          </div>
            <div className="rounded-3xl shadow-lg py-8 px-4 md:px-6 bg-violet-700 -mt-12 w-[100%] md:w-[350px] mx-auto">
              <h3 className="text-5xl md:text-[80px] font-semibold text-blue-700 ml-10">{service.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm -mt-5 text-center md:text-left">
                {service.description}
              </p>
              <hr className="my-4 md:my-5" />
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-4 md:mt-0">
                <div className="text-center md:text-left md:w-[50%] ml-0 md:ml-5">
                  <p className="text-white text-sm md:text-base">{service.name}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{service.role}</p>
                </div>
                {/* <img className='w-[150px] h-24 -mt-8' src={stars} alt='stars'/> */}
                <p className="text-yellow-500 text-2xl md:text-3xl mt-2 md:mt-0">★★★★★</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
