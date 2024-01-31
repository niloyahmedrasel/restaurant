import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Navbar from '../Shared/Navbar';

const FoodItems = () => {
    const [foods,setFoods]=useState([])

    useEffect(()=>{

        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setFoods(data.categories))
    },[])
    return (
        <div>
        <Navbar></Navbar>
        <h1 className='mb-24 text-center text-5xl  text-mytheme-gold lg:mr-24'>Food Menu Here</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  lg:mx-60 mx-5'>
        {
            foods.map(food => <FoodCard food={food}></FoodCard>)
        }
           
        </div>
        </div>
    );
};

export default FoodItems;