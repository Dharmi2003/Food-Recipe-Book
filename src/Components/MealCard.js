import React from 'react'
import {NavLink} from 'react-router-dom';

export const MealCard = ({detail}) => {

    console.log(detail);
  return (
    <div class='meals'>
        {!detail ? "Data Not Found" : detail.map((curItem) => {
            return (
                <div className='mealImg'>
                    <img src={curItem.strMealThumb} alt='' />
                    <p> {curItem.strMeal} </p>
                    <NavLink to={`/${curItem.idMeal}`}> <button> Recipe </button> </NavLink>    
                </div>
            )
        })
        
        }
    </div>
  )
}
