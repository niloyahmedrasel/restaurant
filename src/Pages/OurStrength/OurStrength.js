import React from 'react';
import icon1 from '../../assets/features-icon-1.png'
import icon2 from '../../assets/features-icon-2.png'
import icon3 from '../../assets/features-icon-3.png'
import icon4 from '../../assets/features-icon-4.png'
import StrengthCard from './StrengthCard';
import shape from '../../assets/shape-7.png'
import shape2 from '../../assets/shape-8.png'


const OurStrength = () => {
    const infos = [
        {
          title: "Hygenic Food",
          img: icon1,
          information: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Fresh Environment",
          img: icon2,
          information: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Skilled Chefs",
          img: icon3,
          information: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Event & Party",
          img: icon4,
          information: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
      ];
    return (
      <div >
      <img className='mt-20' src={shape} alt="" />
      <h1 className='text-xl text-mytheme-gold mt-40'>WHY CHOOSE US</h1>
      <h1 className='text-5xl text-mytheme-white mt-10'>Our Strength</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mx-60 mx-20  gap-20 mt-40'>
            {
              infos.map(info =><StrengthCard key={info.img} info={info}></StrengthCard>)
            }
        </div>
        <img className='mt-20' src={shape2} alt="" />
        </div>
    );
};

export default OurStrength;