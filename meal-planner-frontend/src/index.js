
let RECIPES_URL = "http://127.0.0.1:3000/recipes"


document.addEventListener("DOMContentLoaded", () => {

    fetchRecipes();

    let addRecipe = false;
    let newRecipeBtn = document.getElementById("new-recipe-button");
    let recipeForm = document.getElementById("new-recipe-container")

    newRecipeBtn.addEventListener("click", () => {
        addRecipe = !addRecipe
        if (addRecipe) {
            recipeForm.style.display = 'block'
        } else {
            recipeForm.style.display = 'none'
        }
    })


    function fetchRecipes() {
        fetch(RECIPES_URL)
            .then(resp => resp.json())
            .then(json => json.forEach(recipe => {
                renderRecipe(recipe)
            }))
    }

    function renderRecipe(recipe) {
        const allRecipesTable = document.getElementById("all-recipes");
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>${recipe.name}</td>
        <td>${recipe.meal_type}</td>
        <td>${recipe.cuisine}</td>
    `
        allRecipesTable.appendChild(tableRow);

    }

})

