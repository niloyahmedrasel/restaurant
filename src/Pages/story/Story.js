import React, { useEffect } from 'react';
import img from '../../assets/shape-3.png'
import img2 from '../../assets/shape-7.png'
import aos from 'aos'

const Story = () => {
    useEffect(()=>{
        aos.init({duration: 1000})
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-40  '>
            <div>
            <img data-aos='slide-right' className='w-96' src={img} alt="" />
            </div>
            <div data-aos='fade-up'>
            <h1 className='text-mytheme-gold text-xl -tracking-tighter'>OUR STORY</h1>
            <h2 className='text-mytheme-crimson font-bold -tracking-tighter text-5xl mt-10'>Every Fla Vor Tells a Story</h2>
            <p className='text-mytheme-white text-xl mt-20'>We have started our restaurant since 10 years ago
            till now our first priority is quality
            we appritiate your valuable time and your opinion
            we can proudly say that for our customer we can do anything!!</p>
            <p className='mt-20 text-mytheme-white text-xl'>Book Though Call</p>
            <p className='mt-5 text-mytheme-gold text-3xl font-bold'>01300318906</p>
            </div>
            <div>
             <img data-aos='slide-right' className='w-72 lg:m-20' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Story;