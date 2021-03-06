let RECIPES_URL = "http://127.0.0.1:3000/recipes";
let allRecipes = [];

class Recipe {

    constructor(name, url, meal_type, cuisine, id) {
        this.name = name;
        this.url = url;
        this.meal_type = meal_type;
        this.cuisine = cuisine;
        this.id = id;
    }

    // Display all recipes in table on DOM
    renderRecipe() {
        const allRecipesTable = document.getElementById("all-recipes");
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
                <td><a href="${this.url}">${this.name}</a></td>
                <td>${this.meal_type}</td>
                <td>${this.cuisine}</td>
                <td><button id="delete-recipe-${this.id}" data-recipe-id="${this.id}">Delete Recipe</button></td>
                `
        allRecipesTable.appendChild(tableRow);

        let deleteBtn = document.getElementById(`delete-recipe-${this.id}`);
        deleteBtn.addEventListener("click", (e) => {
            let delObj = {
                method: "DELETE"
            }

            fetch(`${RECIPES_URL}/${e.target.dataset.recipeId}`, delObj)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    e.target.parentNode.parentNode.remove()
                    allRecipes.splice(allRecipes.findIndex(recipe => recipe.id === `${e.target.dataset.recipeId}`), 1)
                })
        })

    }
}

// Get all recipes from database
function fetchRecipes() {
        fetch(RECIPES_URL)
            .then(resp => resp.json())
            .then(json => json.forEach(recipe => {
                let newRecipe = new Recipe(recipe.name, recipe.url, recipe.meal_type, recipe.cuisine, recipe.id);
                allRecipes.push(newRecipe);
                newRecipe.renderRecipe();
            }))
    }

// Post request to server to add recipe to database and display on DOM
function addNewRecipe() {
    let recipeForm = document.getElementById("new-recipe-container");

    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let recipeName = event.target.name.value;
        let recipeUrl = event.target.url.value;
        let recipeType = event.target.meal_type.value;
        let recipeCuisine = event.target.cuisine.value;

        let formData = {
            name: recipeName,
            url: recipeUrl,
            meal_type: recipeType,
            cuisine: recipeCuisine
        };

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        return fetch(RECIPES_URL, configObj)
            .then(resp => resp.json())
            .then(recipe => {
                let newRecipe = new Recipe(recipe.name, recipe.url, recipe.meal_type, recipe.cuisine, recipe.id)
                allRecipes.push(newRecipe)
                newRecipe.renderRecipe()
            })

    })
}

// Display all recipes table and new recipe form

const allRecipesBtn = document.getElementById("view-recipes");
const recipesContainer = document.querySelector(".recipes-container")
let showRecipe = false;

allRecipesBtn.addEventListener("click", (e) => {
    
    showRecipe = !showRecipe
    if (showRecipe) {
        recipesContainer.style.display = 'block'
        allRecipesBtn.innerText = `Hide Recipes`
    } else {
        recipesContainer.style.display = 'none'
        allRecipesBtn.innerText = `View & Create Recipes`
    }
})