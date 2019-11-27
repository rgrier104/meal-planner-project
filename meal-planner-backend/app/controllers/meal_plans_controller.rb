class MealPlansController < ApplicationController

    def create
        meal_plan = MealPlan.create(meal_plan_params)

        render json: meal_plan
    end

    def update
        meal_plan = MealPlan.find_by_id(params[:id])
        meal_plan.update(notes: params[:notes])

        render json: meal_plan
    end

    private

    def meal_plan_params
        params.require(:meal_plan).permit(:name, :notes)
    end
end
