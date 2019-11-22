

document.addEventListener("DOMContentLoaded", () => {
    // Display all recipes
    Recipe.fetchRecipes();
    // Display new recipe form
    Recipe.displayNewRecipeForm();
    displayMealPlan();
    renderCalendar();
})




