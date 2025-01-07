import React, { useState } from 'react'
//import {Recipe} from './Recipe';
//import {NavLink, Route, Routes} from 'react-router-dom';
import {Cards} from './Cards';

export const Food = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState();
    const [msg, setMsg] = useState("Search and Get Recipes");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const myFunc = async () => {
        if(search === "") {
            setMsg("Please Enter Something !!");
        }
        else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            console.log(jsonData.meals);
            setData(jsonData.meals);
            setMsg("Your Search Result's");
        }
    }
  return (
    <>
        <h1 className='head'>Food Recipe Book</h1>
        <div className='container'>
            <div className='search'>
                <input type='text' placeholder='Search Meals' onChange={handleInput} />
                <button onClick={myFunc}>Search</button>
            </div>
            
            <h2 className='msg'> {msg} </h2>
                        
            <div>
                <Cards detail={data} />
            </div>
        </div>
    </>
  )
}
