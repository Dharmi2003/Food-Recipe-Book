/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Recipe = ({detail}) => {

    const [data, setData] = useState();
    const {meal} = useParams();

    const myFunc = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?i=${meal}`);
        const jsonData = await get.json();
        //console.log(jsonData.meals[0]);
        setData(jsonData.meals[0]);
    }
    
    if(meal !== "") {
        myFunc()
    }

  return (
    <>
        { !data ? "Not Found" :
            <div className='msg'>
                <img src={data.strMealThumb} alt='' />
                <div className='info'>
                    <h1>Recipe Detail</h1>
                    <button> {data.strMeal} </button>
                    <h3>Instructions: </h3>
                    <p>{data.strInstructions}</p>
                </div>
            </div>
        }
    </>
  )
}*/


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Recipe = () => {
    const [data, setData] = useState(null);
    const { idMeal } = useParams(); // Correct parameter name

    // Fetch recipe details on component mount or when `idMeal` changes
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const jsonData = await response.json();
                setData(jsonData.meals ? jsonData.meals[0] : null); // Handle null data
            } catch (error) {
                console.error("Error fetching recipe data:", error);
            }
        };

        if (idMeal) fetchRecipe();
    }, [idMeal]);

    return (
        <>
            {!data ? (
                <p>Recipe Not Found</p>
            ) : (
                <div className='msg'>
                    <img src={data.strMealThumb} alt={data.strMeal} />
                    <div className='info'>
                        <h1>Recipe Detail's</h1>
                        <button>{data.strMeal}</button>
                        <h3>Instructions:</h3>
                        <p>{data.strInstructions}</p>
                    </div>
                </div>
            )}
        </>
    );
};

