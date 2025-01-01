import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination  } from 'swiper/modules';
import img1 from '../../assets/Project Images/review-user.png';
import TitleComponent from '../CustomComponents/TitleComponent';

const Testimonial = () => {
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
      description: "We offer full range of web development services from landing pages to complex web apps.We offer full range of web development services from landing pages.",
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
    <div className="w-full p-7 bg-violet-800">
      <div className="max-w-screen-xl mx-auto "> 
      <TitleComponent header={"Testimonial"} width={`${"auto"}`} headerColor={"text-white"} ttlClass="xl:!text-[47px] md:!text-[42px] !text-[35px] !font-bold">
          What People<br/><span className="text-cyan-400"> Says</span> About Us
      </TitleComponent>

      <Swiper
        modules={[Pagination,Mousewheel]}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
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
            <div className="px-4 transition-all mt-10 swiper-slide-content mb-16">
              <div className="bg-white rounded-xl shadow-lg text-center py-10 px-4 w-[100%] md:w-[350px] mx-auto">
                <h3 className="text-[80px] font-bold text-violet-800 -mt-10">{service.title}</h3>
                <div className='bg-blue-300 p-3 mb-5 rounded-xl -mt-10'>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <p className='text-yellow-500 text-4xl'>★★★★★</p>
              </div>
              <div className="text-center -mt-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 md:w-[80px] md:h-[80px] rounded-full mx-auto"
                />
                <p className="text-white">{service.name}</p>
                <p className="text-gray-400 text-xs">{service.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
