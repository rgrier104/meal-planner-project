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
    modalContent.appendChild(mealForm);
    mealForm.appendChild(mealFormSelect);

    allRecipes.forEach(recipe => {
        let optn = document.createElement("option");
        optn.text = recipe.name;
        optn.value = recipe.id;
        mealFormSelect.add(optn);
    })
}

