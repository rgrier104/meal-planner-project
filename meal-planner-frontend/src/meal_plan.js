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
            <h5>${daysOfWeek[i]}</h5>
            <h3>Breakfast</h3>
            <h3>Lunch</h3>
            <h3>Dinner</h3>
            <h3>Snack</h3>
            <h3>Other</h3>
        `
        mealPlanContainer.appendChild(dayContainer);
    }

}