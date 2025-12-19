
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // <-- import Navigation module
import ThemeBtn from '../ThemeBtn'
import Title from "../Title";
import { Link } from 'react-router-dom';

import image1 from '../../assets/images/Project/business_tamizha_news_blog.png'
import image2 from '../../assets/images/Project/electwin.png'
import image3 from '../../assets/images/Project/dental.png'
import image4 from '../../assets/images/Project/bt_componey.png'
import image5 from '../../assets/images/Project/velan.png'
import image6 from '../../assets/images/Project/astro.png'
import image7 from '../../assets/images/Project/ecommerce.png'



   
function Section4(){
    const projectData = [
       {nameComponey:"React Ecommerce",details:"React",link:"https://sitedesign-ecommerce.vercel.app/",img:image7},
    {nameComponey:"Business Tamizha",details:"PHP Full Stack",link:"https://businesstamizha.com/",img:image1},
    {nameComponey:"Astro Tamizha",details:"PHP Full Stack",link:"https://astrotamizha.com/",img:image6},
    {nameComponey:"JKKN DENTAL COLLEGE & HOSPITAL",details:"Wordpress",link:"https://dental.jkkn.ac.in/",img:image3},
    {nameComponey:"Business Tamizha",details:"PHP Full Stack",link:"https://businesstamizha.in/",img:image4},
    {nameComponey:"Velanmedias",details:"Frontend",link:"https://velanmedias.com/",img:image5},
    {nameComponey:"Electwin",details:"Wordpress",link:"https://electwin.jicate.solutions/",img:image2},
    
  
  
  
   
  
    ]
return(
  <section  className='layout-wrapper py-10'>

<div className='container flex flex-col md:flex-row justify-between items-center  '>
         <div className='w-full md:w-1/2'>
              <Title
  smallTitle="Past Projects"
  mainTitle="The work I did for client."
  isWhite={false}
/>
         </div>

          <div>
           <Link to={"/projects"}> <ThemeBtn icon={true}  isActive={true}  onClick={() => console.log("Download CV clicked")}>
            All Projects</ThemeBtn> </Link>  
          </div>
</div>

 <div className="w-full h-[450px] relative py-4">
  {/* Custom Buttons */}
  <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10   text-white bg-black p-2 rounded-full cursor-pointer">
    ‹
  </div>
  <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10  text-white bg-black p-2 rounded-full cursor-pointer">
    ›
  </div>

  <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: '.swiper-button-prev-custom',
      nextEl: '.swiper-button-next-custom',
    }}
    keyboard={false}
    mousewheel={false}
    autoplay={false}
    spaceBetween={20}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {projectData.map((item, index) => (
  <SwiperSlide key={index}>
  <div className="theme-sk relative items-center border-amber-400 border-[1px] rounded-lg">
   
    <img
      className="theme-sk-Hover-img w-full h-full object-cover rounded-lg"
      src={item.img}
      alt={item.nameComponey}
    />


   <div className="theme-sk-Hover absolute inset-0 flex flex-col justify-center items-center p-5">
   <div className="relative py-5 px-14 bg-white dark:bg-black">
    <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#FF91FA] via-[#FA6490] to-[#F7D86A]"></div>
    <h3 className='text-xl'>{item.nameComponey.toLocaleUpperCase()}</h3>
    <div className='py-3'>
      <h4 className='text-base'>Development Type: {item.details}</h4>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full text-sm hover:scale-105 transition-transform">
                View
              </button>
            </a>
    </div>
  </div>
</div>



 
  </div>
</SwiperSlide>

    ))}
  </Swiper>
</div>





  </section>
)
}
export default Section4;