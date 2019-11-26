class MealsController < ApplicationController

    def create
        meal = Meal.create(meals_params)

        render json: meal
    end

    private

    def meals_params
        params.require(:meals).permit(:recipe_id, :meal_plan_id, :day, :meal_type)
    end
end
