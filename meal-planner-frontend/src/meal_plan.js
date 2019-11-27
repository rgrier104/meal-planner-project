const MEALPLANS_URL = "http://127.0.0.1:3000/meal_plans";
const mealPlanContainer = document.getElementById("meal-plan-week");
let newMealPlan;

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

        fetch(MEALPLANS_URL, configObj)
            .then(resp => resp.json())
            .then(meal_plan => {
                let newMealPlan = new MealPlan(meal_plan.name, meal_plan.notes, meal_plan.id)
                console.log(newMealPlan)
                renderCalendar(newMealPlan);
            })

        addMealPlan = !addMealPlan
        if (addMealPlan) {
            mealPlanContainer.style.display = 'block'
        } else {
            mealPlanContainer.style.display = 'none'
        }
    })
}


function renderCalendar(mealPlan) {
    //remove create button

    const createMPBtn = document.querySelector("#create-new-meal-plan");
    createMPBtn.remove();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (let i = 0; i < 7; i++) {
        const dayContainer = document.createElement("div");
        dayContainer.className = `day-card`
        dayContainer.innerHTML = `
            <div class="calendar-day">${daysOfWeek[i]}</div>
        `

        mealPlanContainer.appendChild(dayContainer);

        const breakfastBtn = document.createElement("div");
        breakfastBtn.className = `meal-type-calendar`;
        breakfastBtn.setAttribute("id", `${daysOfWeek[i]}-Breakfast`)
        breakfastBtn.innerText = `Breakfast`;

        const lunchBtn = document.createElement("div");
        lunchBtn.className = `meal-type-calendar`;
        lunchBtn.setAttribute("id", `${daysOfWeek[i]}-Lunch`)
        lunchBtn.innerText = `Lunch`;

        const dinnerBtn = document.createElement("div");
        dinnerBtn.className = `meal-type-calendar`;
        dinnerBtn.setAttribute("id", `${daysOfWeek[i]}-Dinner`)
        dinnerBtn.innerText = `Dinner`;

        const snackBtn = document.createElement("div");
        snackBtn.className = `meal-type-calendar`;
        snackBtn.setAttribute("id", `${daysOfWeek[i]}-Snack`)
        snackBtn.innerText = `Snack`;

        renderModal(breakfastBtn, dayContainer, mealPlan, daysOfWeek[i], "Breakfast");
        renderModal(lunchBtn, dayContainer, mealPlan, daysOfWeek[i], "Lunch");
        renderModal(dinnerBtn, dayContainer, mealPlan, daysOfWeek[i], "Dinner");
        renderModal(snackBtn, dayContainer, mealPlan, daysOfWeek[i], "Snack");
        
    }
}

function renderModal(btn, dayContainer, mealPlan, day, meal_type) {
    const modalDiv = document.createElement("div");
    modalDiv.className = `modal`;

    const modalContent = document.createElement("div");
    modalContent.className = `modal-content`;

    const closeBtn = document.createElement("span");
    closeBtn.className = "closeBtn";
    closeBtn.innerHTML = `&times;`;

    const p = document.createElement("p");
    p.innerText = `Select ${meal_type}`;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(p);
    modalDiv.appendChild(modalContent);
    btn.appendChild(modalDiv);

    dayContainer.appendChild(modalDiv);
    dayContainer.appendChild(btn);

    btn.addEventListener("click", () => {

        if (!document.querySelector(`#${day}-${meal_type}-form`)) {
            modalDiv.style.display = "block";
            renderMealForm(modalContent, mealPlan, day, meal_type);
        }
    });

    closeBtn.addEventListener("click", () => {
        modalDiv.style.display = "none";
    });

}

