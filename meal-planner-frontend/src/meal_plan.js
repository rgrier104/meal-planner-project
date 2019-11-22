class MealPlan {
    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }

    static displayMealPlan() {
        let addMealPlan = false;
        const mealPlanBtn = document.getElementById("new-meal-plan");
        const mealPlanContainer = document.getElementById("meal-plan-week");
        mealPlanBtn.addEventListener("click", () => {
            let newMealPlan = new MealPlan();
            addMealPlan = !addMealPlan
            if (addMealPlan) {
                mealPlanContainer.style.display = 'block'
            } else {
                mealPlanContainer.style.display = 'none'
            }
        })
    }

}

MealPlan.displayMealPlan();