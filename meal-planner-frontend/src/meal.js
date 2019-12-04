const MEALS_URL = "http://127.0.0.1:3000/meals";

class Meal {
    constructor(meal_plan_id, recipe_id, day, meal_type) {
        this.meal_plan_id = meal_plan_id;
        this.recipe_id = recipe_id;
        this.day = day;
        this.meal_type = meal_type;
    }
}

// Render drop down with all recipes for that meal
function renderMealForm(formDiv, mealPlan, day, meal_type) {
    const mealForm = document.createElement("form");
    mealForm.setAttribute("id", `${day}-${meal_type}-form`) 
    const mealFormSelect = document.createElement("select");
    mealFormSelect.name = "recipeName"
    const saveMeal = document.createElement("input");
    saveMeal.setAttribute("type", "submit");
    saveMeal.setAttribute("value", "Save Meal");

    // Filter recipes to only show relevant recipes in drop down
    let filteredRecipes = allRecipes.filter(recipe => {
        if (meal_type === "Breakfast") {
            return recipe.meal_type === "Breakfast";
        } else if (meal_type === "Snack") {
            return recipe.meal_type === "Snack";
        } else {
            return recipe.meal_type === "Entree";
        }
    })
    // Add select options
    filteredRecipes.forEach(recipe => {
        let optn = document.createElement("option");
        optn.text = recipe.name;
        optn.value = recipe.id;
        mealFormSelect.appendChild(optn);
    })

    formDiv.appendChild(mealForm);
    mealForm.appendChild(mealFormSelect);
    mealForm.appendChild(saveMeal);

    // Create new meal associated with the meal plan and recipe
    mealForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        let formData = {
            recipe_id: event.target.recipeName.value,
            meal_plan_id: mealPlan.id,
            day: day,
            meal_type: meal_type
        };

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        return fetch(MEALS_URL, configObj)
            .then(resp => resp.json())
            .then(meal => {
                let newMeal = new Meal(meal.meal_plan_id, meal.recipe_id, meal.day, meal.meal_type)
                console.log(newMeal)
                formDiv.parentNode.parentNode.style.display = "none";

                let selectedRecipeObject = allRecipes.find(recipe => recipe.id === meal.recipe_id)
                let selectedRecipeDiv = document.createElement("div")

                let mealDiv = document.querySelector(`#${day}-${meal_type}`)
                selectedRecipeDiv.innerHTML = `<a href="${selectedRecipeObject.url}" target="_blank">${selectedRecipeObject.name}</a>`
                mealDiv.innerText = `${meal_type}`
                mealDiv.className = `meal-type-calendar-no-hover`
                mealDiv.append(selectedRecipeDiv);
            })
    })
}