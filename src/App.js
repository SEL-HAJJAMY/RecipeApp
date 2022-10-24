// import logo from './logo.svg';
import './App.css';
import {YOUR_APP_ID, YOUR_APP_KEY } from './key';
import axios from 'axios';


function App() {
  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

async function getRecipe(){

  var result = await axios.get(url);
  console.log(result.data);
}


  return (
    <div className="App">
     <h1 onClick={getRecipe}>Hello world</h1>

    </div>
  );
}

export default App;



// Notes: 
// - Axios : is a promise based HTTP request library which allows us to interface with REST API. 
//           More thing that we can cancel request and intercept request.