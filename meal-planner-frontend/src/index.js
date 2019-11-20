
let RECIPES_URL = "http://127.0.0.1:3000/recipes"

document.addEventListener("DOMContentLoaded", () => {
    fetchRecipes();
})


function fetchRecipes() {
    fetch(RECIPES_URL)
        .then(resp => resp.json())
        .then(json => json.forEach(recipe => {
        renderRecipe(recipe)
    }))
}

function renderRecipe(recipe) {
    const allRecipesTable = document.getElementById("all recipes");
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${recipe.name}</td>
        <td>${recipe.meal_type}</td>
        <td>${recipe.cuisine}</td>
    `
    allRecipesTable.appendChild(tableRow);

}