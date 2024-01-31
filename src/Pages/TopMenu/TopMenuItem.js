import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const TopMenuItem = ({ info }) => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
    
  const { img, title, button } = info;
  
  return (
    <div>
    <div className="card w-96 bg-transparent shadow-xl">
     <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title text-mytheme-gold ">{title}</h2>
    
    <div className="card-actions">
      <Link to='/fooditems'><button className="btn btn-warning">{button}</button></Link>
    </div>
  </div>
</div>
   
   
    </div>
  );
};

export default TopMenuItem;
