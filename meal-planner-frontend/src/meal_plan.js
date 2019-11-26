let MEALPLANS_URL = "http://127.0.0.1:3000/meal_plans";

class MealPlan {
    constructor(name, notes, id) {
        this.name = name;
        this.notes = notes;
        this.id = id;
    }
}

function displayMealPlan() {
    let addMealPlan = false;
    const mealPlanForm = document.getElementById("new-meal-plan");
    const mealPlanContainer = document.getElementById("meal-plan-week");
    mealPlanForm.addEventListener("submit", (e) => {
        e.preventDefault();

        createMealPlan(e);

        renderCalendar();

        addMealPlan = !addMealPlan
        if (addMealPlan) {
            mealPlanContainer.style.display = 'block'
        } else {
            mealPlanContainer.style.display = 'none'
        }
    })
}

function createMealPlan(event) {
    let formData = {
        name: event.target.name.value,
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch(MEALPLANS_URL, configObj)
        .then(resp => resp.json())
        .then(meal_plan => {
            let newMealPlan = new MealPlan(meal_plan.name, meal_plan.notes, meal_plan.id)
            console.log(newMealPlan)
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

        renderModal(breakfastBtn, dayContainer);
        
    }

}

function renderModal(btn, dayContainer) {
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
        renderMealForm(modalContent);
    });

    closeBtn.addEventListener("click", () => {
        modalDiv.style.display = "none";
    });

}

