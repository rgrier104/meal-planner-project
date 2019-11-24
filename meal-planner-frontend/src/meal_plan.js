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

const mealPlanContainer = document.getElementById("meal-plan-week");

function renderCalendar() {
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (let i = 0; i < 7; i++) {
        const dayContainer = document.createElement("div");
        dayContainer.className = "day-card"
        dayContainer.innerHTML = `
            <div>${daysOfWeek[i]}</div>
        `

        mealPlanContainer.appendChild(dayContainer);

        const breakfastBtn = document.createElement("div");
        breakfastBtn.className = `${daysOfWeek[i]}-breakfast`;
        breakfastBtn.innerText = `Breakfast`;

        renderModalForm(breakfastBtn, dayContainer);
        
    }

}

function renderModalForm(btn, dayContainer) {
    const modalDiv = document.createElement("div");
    modalDiv.className = `modal`;

    const modalContent = document.createElement("div");
    modalContent.className = `modal-content`;

    const closeBtn = document.createElement("span");
    closeBtn.className = "closeBtn";
    closeBtn.innerHTML = `&times;`;

    const p = document.createElement("p");
    p.innerText = `Select Breakfast`;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(p);
    modalDiv.appendChild(modalContent);
    btn.appendChild(modalDiv);

    dayContainer.appendChild(modalDiv);
    dayContainer.appendChild(btn);

    btn.addEventListener("click", () => {
        modalDiv.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        console.log("close");
        modalDiv.style.display = "none";
    });
}