import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination  } from 'swiper/modules';
import img1 from '../../assets/Project Images/lamp.png';
import img2 from '../../assets/Project Images/target.png';
import img3 from '../../assets/Project Images/message.png';

const Goals = () => {
  const services = [
    {
      description: "We create high-quality mobile applications with 3D and advanced features.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "OUR Vision",
  
    },
    {
      description: "We offer full range of web development services from landing pages to complex web apps.We offer full range of web development services from landing pages.",
      image: img2,
      name: "OUR Mission",
    },
    {
      description: "Our design approach ensures intuitive and highly engaging user interfaces.We offer full range of web development services from landing pages to complex web apps.",
      image: img3,
      name: "OUR Message",
    },
    {
      description: "We create high-quality mobile applications with 3D and advanced features.We offer full range of web development services from landing pages to complex web apps.",
      image: img1,
      name: "OUR Vision",
    },
    {
      description: "We offer full range of web development services from landing pages to complex web apps. We offer full range of web development services from landing pages to complex web apps.",
      image: img2,
      name: "OUR Mission",
    },
  ];

  return (
    <div className="w-full p-7 ">
      <div className="max-w-screen-xl mx-auto px-4 "> 
      <Swiper
        modules={[Pagination,Mousewheel]}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
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
            <div className="px-4 transition-all mt-10 swiper-slide-content mb-16 ">
              <div className="bg-gray-300 rounded-xl shadow-lg text-center p-10 w-[100%] md:w-[400px] mx-auto">
                <img src={service.image} width={80} height={80} className='mx-auto'/>
                <h3 className="text-[30px] font-bold text-violet-800">{service.name}</h3>
                <div className='rounded-xl mt-10'>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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

export default Goals;
