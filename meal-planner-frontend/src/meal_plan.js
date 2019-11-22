class MealPlan {
    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }

    

    

}

function displayMealPlan() {
    let addMealPlan = false;
    const mealPlanForm = document.getElementById("new-meal-plan");
    const mealPlanContainer = document.getElementById("meal-plan-week");
    mealPlanForm.addEventListener("submit", (e) => {
        console.log("test")
        e.preventDefault();

        let newMealPlan = new MealPlan();
        newMealPlan.name = e.target.name.value
        addMealPlan = !addMealPlan
        if (addMealPlan) {
            mealPlanContainer.style.display = 'block'
        } else {
            mealPlanContainer.style.display = 'none'
        }
    })
}

function renderCalendar() {
    const mealPlanContainer = document.getElementById("meal-plan-week");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (let i = 0; i < 7; i++) {
        const dayContainer = document.createElement("div");
        dayContainer.className = "day-card"
        dayContainer.innerHTML = `
            <div>${daysOfWeek[i]}</div>
            <div id = "$daysOfWeek[i]-breakfast>Breakfast: </div>
            <div>Lunch</div>
            <div>Dinner</div>
            <div>Snack</div>
            <div>Other</div>
        `
        mealPlanContainer.appendChild(dayContainer);
    }

}