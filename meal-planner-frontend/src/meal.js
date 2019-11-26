const MEALS_URL = "http://127.0.0.1:3000/meals";

class Meal {
    constructor(meal_plan_id, recipe_id, day, meal_type) {
        this.meal_plan_id = meal_plan_id;
        this.recipe_id = recipe_id;
        this.day = day;
        this.meal_type = meal_type;
    }
}

function renderMealForm(modalContent, mealPlan, day, meal_type) {
    const mealForm = document.createElement("form");
    const mealFormSelect = document.createElement("select");
    mealFormSelect.name = "recipeName"
    const saveMeal = document.createElement("input");
    saveMeal.setAttribute("type", "submit");
    saveMeal.setAttribute("value", "Save Meal");

    allRecipes.forEach(recipe => {
        let optn = document.createElement("option");
        optn.text = recipe.name;
        optn.value = recipe.id;
        mealFormSelect.appendChild(optn);
    })

    modalContent.appendChild(mealForm);
    mealForm.appendChild(mealFormSelect);
    mealForm.appendChild(saveMeal);

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
            })
    })
}