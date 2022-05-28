  import  Fraction  from 'fractions'
// var Fraction = require('fractional').Fraction

  
  class RecipeView{
    #parentElement=document.querySelector('.recipe')
    #errorMessage=`we could not find that recipe. please try another one!`
    #message=''
     
    render(rec){
    //    this.#generateMarkup(rec)
       this.#clear()
       this.#parentElement.insertAdjacentHTML('afterbegin',this.#generateMarkup(rec))
    }
    #clear(){
      return this.#parentElement.innerhtml=''
    }
    
    
    renderSpinner=function(){
        const mark=`
          <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div>
         `
        this.#parentElement.innerHTML=''
        this.#parentElement.insertAdjacentHTML('afterbegin',mark)
}

     renderError(message=this.#errorMessage){
         const markup=`
         <div class="error">
         <div>
         <svg>
         <use href="src/img/icons.svg#icon-alert-triangle"></use>
         </svg>
         </div>
         <p>${message}</p>
         </div>
         `
         this.#parentElement.innerHTML='';
        //  this.#clear()
       this.#parentElement.insertAdjacentHTML('afterbegin',markup)
     }

     renderMessage(message=this.#message){
         const markup=`
         <div class="message">
         <div>
         <svg>
         <use href="src/img/icons.svg#icon-alert-triangle"></use>
         </svg>
         </div>
         <p>${message}</p>
         </div>
         `
        //  this.#parentElement.innerHTML='';
         this.#clear()
       this.#parentElement.insertAdjacentHTML('afterbegin',markup)
     }


    addHandlerRender(handle){
        window.addEventListener('hashchange',handle)
         window.addEventListener('load',handle)
    }

    #generateMarkup(recipe){
     return ` <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.serving}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg> 
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${recipe.ingredients.map((el)=>{
              return `<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${el.quantity?new Fraction(el.quantity):''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${el.unit}</span>
                ${el.description}
              </div>
            </li>`
            }).join('')}</ul></div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div> `
    }
}

export default new RecipeView();