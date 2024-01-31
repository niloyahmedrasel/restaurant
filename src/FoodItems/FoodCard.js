import React from 'react';
import toast from 'react-hot-toast';
const FoodCard = ({food}) => {


    const name=food.strCategory
    const img=food.strCategoryThumb
    const description=food.strCategoryDescription

    const buttonHandler=()=>{

      toast.success('your order is successful')
    }

    
    return (
        <div>
        <div className="card w-96 bg-black shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={food.strCategoryThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{food.strCategory}</h2>
          <p className='text-slate-300'>{food.strCategoryDescription && food.strCategoryDescription.length > 100
            ? `${food.strCategoryDescription.slice(0, 100)}...`
            : food.strCategoryDescription
        }</p>
          <div className="card-actions">
            <button onClick={buttonHandler} className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FoodCard;