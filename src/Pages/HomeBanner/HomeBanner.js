import React from "react";
import background1 from "../../assets/pexels-lumn-604969.jpg";
import Navbar from "../../Shared/Navbar";
import './HomeBanner.css'
import { useTypewriter,Cursor } from "react-simple-typewriter";

const HomeBanner = () => {
  const BackgroundStyle = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  };
  const [text]=useTypewriter(
    {
      words:['EVERY FLAVOR TELLS A STORY'],
      loop:0
    }
  )
 

  return (
    <div>
      <div style={BackgroundStyle} className="text-center ">
        <Navbar></Navbar>

        <h1 className="text-mytheme-gold mt-40 -tracking-tighter  font-bold text-2xl    ">
          Delightfull Experience
        </h1>
        <h2 className=" text-mytheme-white text-2xl md:text-4xl lg:text-7xl -tracking-tight mt-40 ">
          <span>{text}</span>
          <Cursor cursorColor="white"></Cursor>
        </h2>
        <p className="mt-10 text-mytheme-white -tracking-tighter text-3xl font-bold">
          come with family & fell the mouthwatering food
        </p>
        <button className="button" >
          Book a Table
        </button>
        <h1 className="mt-60">ok</h1>
      </div>
    </div>
  );
};

export default HomeBanner;
