import React, { useEffect } from "react";
import breakfast from "../../assets/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai (1).jpg";
import lunch from "../../assets/peakpx.jpg";
import dinner from "../../assets/pic11.jpeg";
import TopMenuItem from "./TopMenuItem";
import Aos from 'aos'
import 'aos/dist/aos.css'

const TopMenu = () => {
  useEffect(()=>{
    Aos.init({duration: 500})
  },[])
  const infos = [
    {
      title: "Breakfast",
      img: breakfast,
      button: "Order Now",
    },
    {
      title: "Lunch",
      img: lunch,
      button: "Order Now",
    },
    {
      title: "Dinner",
      img: dinner,
      button: "Order Now",
    },
  ];
  return (
    <div data-aos='fade-up' >
      <h1 className="text-mytheme-gold mt-40 -tracking-tight  font-bold text-xl">
        FLAVORS FOR ROYALITY
      </h1>
      <h2 className="text-mytheme-white text-7xl -tracking-tight mt-10">
        We Offer Top Notch
      </h2>
      <p className="mt-10 text-mytheme-gold -tracking-tighter text-3xl font-bold">
        "Indulge in an exquisite culinary journey,<br></br> where flavors dance on your
        palate,<br></br> embracing your senses with every bite."
      </p>
      <div className="grid items-center md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 gap-5  lg:ml-40  ">
        {infos.map((info) => (
          <TopMenuItem key={info.title} info={info}></TopMenuItem>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
