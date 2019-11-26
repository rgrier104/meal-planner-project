class Meal {
    constructor(meal_plan_id, recipe_id, day, meal_type) {
        this.meal_plan_id = meal_plan_id;
        this.recipe_id = recipe_id;
        this.day = day;
        this.meal_type = meal_type;
    }
}

function renderMealForm(modalContent) {
    const mealForm = document.createElement("form");
    const mealFormSelect = document.createElement("select");
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

    mealForm.addEventListener("submit", () => {
        //create new meal
    })
}