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

    static renderCalendar() {
        const mealPlanContainer = document.getElementById("meal-plan-week");
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"]
        for (let i = 0; i < 7; i++) {
            const dayContainer = document.createElement("div");
            dayContainer.innerHTML = `
            <h5>${daysOfWeek[i]}</h5>
        `
            mealPlanContainer.appendChild(dayContainer);
        }
        
    }

}

MealPlan.displayMealPlan();
MealPlan.renderCalendar();