import React, { useEffect } from 'react';
import aos from 'aos';

const StrengthCard = ({info}) => {
    useEffect(()=>{
        aos.init({duration: 1000});
    },[])
    const {img,title,information} = info;
    return (
        <div data-aos='zoom-out-down' className='shadow-2xl w-56 '>
            <img className='mx-16 cards' src={img} alt="" />
            <h1 className='mt-3 text-mytheme-white text-xl'>{title}</h1>
            <h2 className='mt-2 text-mytheme-white'>{information}</h2>
        </div>
    );
};

export default StrengthCard;