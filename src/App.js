// import logo from './logo.svg';
import './App.css';
import {YOUR_APP_ID, YOUR_APP_KEY } from './key';
import axios from 'axios';
import { useState } from 'react';
import RecipeTitle from './RecipeTitle';


function App() {
  const [query,  setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [healthLabels, setHealthLabels] = useState("");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

async function getRecipe(){

  var result = await axios.get(url);
  setRecipes(result.data.hits);
  console.log(result.data.hits);
}

const onSubmit = (e) =>{
  e.preventDefault();
  getRecipe();
}


  return (
    <div className="app">
     <h1 onClick={getRecipe}>Our Food Recipes</h1>
     <form className='app__searchForm' onSubmit={onSubmit}>
      <input
      className='app__input' 
      type="text" 
      placeholder='Search recipe'
      value={query}
      onChange={(e) => setQuery(e.target.value)}/>

      <input className='app__submit' type='submit' value = 'Search' />
      {/* <select className='app__healthLabel'>
        <option onClick={() => setHealthLabels("vegan")}>Vegan</option>
        <option onClick={() => setHealthLabels("vegetarian")}>Vegetarian</option>
        <option onClick={() => setHealthLabels("paleo")}>Paleo</option>
        <option onClick={() => setHealthLabels("dairy-free")}>Dairy-free</option>
        <option onClick={() => setHealthLabels("wheat-free")}>Wheat-free</option>
        <option onClick={() => setHealthLabels("low-sugar")}>Low-sugar</option>
        <option onClick={() => setHealthLabels("egg-free")}>Egg-free</option>
        <option onClick={() => setHealthLabels("peanut-free")}>Peanut-free</option>
        <option onClick={() => setHealthLabels("tree-nut-free")}>Tree-nut-free</option>
        <option onClick={() => setHealthLabels("soy-free")}>Soy-free</option>
        <option onClick={() => setHealthLabels("fish-free")}>Fish-free</option>
        <option onClick={() => setHealthLabels("shellfish-free")}>Shellfish-free</option>

   
     
     
     
      </select> */}
     </form>


    <div className='app__recipes'>
      {recipes.map((recipe) => {
        return <RecipeTitle recipe={recipe} />;
      })}

     </div>
     



    </div>
  );
}

export default App;



// Notes: 
// - Axios : is a promise based HTTP request library which allows us to interface with REST API. 
//           More thing that we can cancel request and intercept request.