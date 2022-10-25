import React from 'react';
import './RecipeTitle.css'

export default function RecipeTitle({recipe}) {
  return (
        // recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)!= null && (
        <div className='recipeTitle'>
            
            <img className='recipeTitle__img' alt='' src = {recipe['recipe']['image']}/>
            <p>{recipe['recipe']['label']}</p>
            {/* <img className='recipeTitle__img' alt='' src = {recipe['recipe']['image']}/>
            <p className='recipeTitle__name'>{recipe['recipe']['label']}</p> */}

        </div>
    )
  
  
}
