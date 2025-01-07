import './App.css';
//import { MainPage } from './Components/MainPage';
import {Route, Routes} from 'react-router-dom';
//import { MealInfo } from './Components/MealInfo';
import { Food } from './Components/Food';
import { Recipe } from './Components/Recipe';

function App() {
  return (
    //<MainPage />

    //<Route path=':mealid' element={<Recipe/>} />
    <Routes>
      <Route path='' element={<Food/>} />
      <Route path="/:idMeal" element={<Recipe />} />
    </Routes>
  );
}

export default App;
