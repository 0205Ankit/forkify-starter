import { API_URL } from "./config";
import { getJSON } from "./helper";
export const state={
    recipe:{},
}
const recipeContainer = document.querySelector('.recipe');
export const loadRecipe= async function(id){ 
    try{
       const data= await getJSON(`${API_URL}/${id}`)
         recipeContainer.innerHTML=''
     console.log(data)
     const  {recipe}=data.data 
     state.recipe={
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      serving: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
     }
     console.log(state.recipe)}catch(err){
        //  console.error(err);
         throw err
     }
}