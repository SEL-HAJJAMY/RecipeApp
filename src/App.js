import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {APP_ID, APP_KEY } from './keys';  
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import axios from "axios";

import {
  Header, 
  AppNameComponent, 
  AppIcon, SearchComponent, 
  SearchIcon, 
  SearchInput
}from './components/headerComponent'

import {
  RecipeContainer, 
  CoverImage, 
  RecipeName, 
  IngredientText, 
  SeemoreText
} from './components/recipeComponent'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gab: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;

`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin 250px;
  opacity: 50%;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const {recipeObj} = props;
  return(
    <>
      <Dialog open={show}>
      <DialogTitle id='alert-dialog-slide-title'>Ingredients</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {recipeObj.recipe.ingredients.map((ingredientObj) =>(
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
            ))}  
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
        <IngredientText onClick={() => window.open(recipeObj.recipe.url)}>See More</IngredientText>
        <SeemoreText onClick={() => setShow("")}>Close
        </SeemoreText>

      </DialogActions>
        
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.recipe.image} alt=""/>
        <RecipeName>{recipeObj.recipe.label}</RecipeName>
        <IngredientText onClick={() => setShow(true)}>Ingredients</IngredientText>
        <SeemoreText onClick={() => window.open(recipeObj.recipe.url)}>
          See Complete Recipe
        </SeemoreText>
        </RecipeContainer>
    </>      
  )
}

function App() {
  const [timeoutid, updateTimeoutid] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const result = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    updateRecipeList(result.data.hits);

  };

  const onTextChange = (event) => {
    clearTimeout(timeoutid);
    // event.pretentDefault(event.target.value);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutid(timeout);
  }
  return (

    <Container>
        <Header>
          <AppNameComponent>
            <AppIcon src="/hamburger.svg" alt=''/>
            Recipe Finder
          </AppNameComponent>
          <SearchComponent>
            <SearchIcon src ="/search-icon.svg" alt='' /> 
            <SearchInput placeholder='Search recipe' onChange={onTextChange}/> 
          </SearchComponent>  
        </Header> 
        <RecipeListContainer>
          {recipeList.length ? recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj} />
          )) : (
          <Placeholder src="/hamburger.svg" />
          )}
          


          

          

          
        </RecipeListContainer> 
    </Container>

    
  )
}
export default App;
