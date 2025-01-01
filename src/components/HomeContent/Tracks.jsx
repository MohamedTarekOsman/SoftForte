import iosIco from '../../assets/Icons/ios.png'
import androidIco from '../../assets/Icons/android.png'
import reactIco from '../../assets/Icons/react-native.png'
import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
const Tracks = () => {

    const services = [
        {
          title: "IOS",
          image: iosIco,
        },
        {
          title: "Android",
          image: androidIco,
        },
        {
          title: "Flutter",
          image: reactIco,
        },
        {
          title: "React Native",
          image: iosIco,
        }
        ,
        {
          title: "React Native",
          image: reactIco,
        }
      ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4"> 
      <Swiper
  style={{ padding: "20px" }}
  modules={[Mousewheel, Autoplay]}
  slidesPerView={1}
  spaceBetween={10}
  mousewheel={true}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }}
>
  {services.map((service, index) => (
    <SwiperSlide key={index}>
      <div className="px-20 transition-all">
        <div className="text-center items-center flex flex-col">
          <img
            src={service.image}
            alt={service.title}
            className="w-[80px] h-[60px] my-3"
          />
          <p className="font-bold text-lg">{service.title}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </div>
  )
}

export default Tracks