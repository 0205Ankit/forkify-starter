// import { render } from 'sass';
import * as model from './model.js'
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

////////////////////////////////////

const showRecipie=async function(){
  try{
    const id =window.location.hash.slice(1)
    if(!id)return
    recipeView.renderSpinner()

    // loading recipe
        await model.loadRecipe(id)
        // const recipe=model.state.recipe
     
    // rendering recipe
       recipeView.render(model.state.recipe)
     
  }catch(err){
    recipeView.renderError()
  }
}
// showRecipie()
const init=function(){
  recipeView.addHandlerRender(showRecipie)
}
init();
