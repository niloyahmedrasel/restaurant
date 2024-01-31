import React, { useEffect } from 'react';
import aos from 'aos';

const Menu = ({item}) => {
    useEffect(()=>{
        aos.init(
            {duration:1000}
        )
    },[])
    const {img,name,info,prize} = item
    return (
        <div className='flex '>
            <div>
            <img data-aos='fade-left' className='cards shadow-2xl' src={img} alt="" />
            </div>
            <div data-aos='zoom-in-down' className='text-left'>
            <h1 className='mx-5 mt-3 text-mytheme-gold font-bold xl'>{name} <span className='text-lg font-semibold mx-5 text-mytheme-crimson'>{prize}</span> </h1>
            <h2 className='mx-5 mt-3 text-mytheme-silver '>{info}</h2>
           
            </div>
        </div>
    );
};

export default Menu;