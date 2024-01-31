import React, { useEffect, useState } from 'react';
import menu1 from  '../../assets/menu-1.png'
import menu2 from '../../assets/menu-2.png'
import menu3 from '../../assets/menu-3.png'
import menu4 from '../../assets/menu-4.png'
import menu5 from '../../assets/menu-5.png'
import menu6 from '../../assets/menu-6.png'
import Menu from './Menu';
const MainMenu = () => {
   
    const Items=[
        {
            name:'Greek Salad',
            img:menu1,
            info:'tometo,salad,onion',
            prize:'20.00$'
        },
        {
            name:'Greek Salad',
            img:menu2,
            info:'tometo,salad,onion',
            prize:'20.00$'
        },
        {
            name:'Greek Salad',
            img:menu3,
            info:'tometo,salad,onion',
            prize:'20.00$'
        },
        {
            name:'Greek Salad',
            img:menu4,
            info:'tometo,salad,onion',
            prize:'20.00$'
        },
        {
            name:'Greek Salad',
            img:menu5,
            info:'tometo,salad,onion',
            prize:'20.00$'
        },
        {
            name:'Greek Salad',
            img:menu6,
            info:'tometo,salad,onion',
            prize:'20.00$'
        }
        
    ]
    return (
        <div>
        <h1 className='text-mytheme-gold -tracking-tighter text-xl mt-20'>SPECIAL SELECTION</h1>
        <p className='text-5xl text-mytheme-white -tracking-tighter mt-10'>Delicious Menu</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10 mt-40 lg:mx-80 lg:gap-20'>
            {
                Items.map(item=><Menu key={item.img} item={item}></Menu>)
            }
            </div>
        </div>
    );
};

export default MainMenu;