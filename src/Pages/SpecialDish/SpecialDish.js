import React, { useEffect } from 'react';
import specialDish from  '../../assets/special-dish-banner.jpg'
import badge from '../../assets/badge-1.png'
import aos from 'aos'


const SpecialDish = () => {
    useEffect(()=>{
        aos.init({duration:500})
    },[])
    return (
        <div className="mt-40">
  <div className=" flex flex-col lg:flex-row">
    <img data-aos='slide-right' src={specialDish} alt='' className="w-1/2 rounded-lg shadow-2xl mx-20" />
    <div data-aos='fade-up' className='text-left m-20'>
      <img data-aos='flip-up' src={badge} alt="" />
      <h1 className="text-xl font-bold text-mytheme-gold -tracking-tighter">SPECIAL DISH</h1>
      <h2 className='text-mytheme-crimson font-bold -tracking-tighter text-5xl w-full mt-10 '>Lobster Tortelini</h2>
      <p className="py-6 mt-8 text-mytheme-white text-xl ">Lobster tortellini is a luxurious and exquisite pasta dish that<br></br>
      tantalizes the taste buds with its harmonious blend of flavors and textures.<br></br>
      Each bite unveils a delicate pasta pillow, expertly crafted and filled with<br></br>
      a sumptuous mixture of succulent lobster meat,<br></br>
      fragrant herbs, and creamy cheeses. The velvety richness of the lobster</p>
      <p className='text-mytheme-silver '>$40.00</p>
      <p className='mt-3 text-mytheme-gold font-bold text-xl'>$20.00</p>
      <button className="btn btn-warning text-lg mt-5 ">See Main Menu</button>
    </div>
  </div>
</div>
    );
};

export default SpecialDish;