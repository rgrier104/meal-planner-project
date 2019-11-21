class RecipesController < ApplicationController

    def index
        recipes = Recipe.all

        render json: recipes
    end

    def create
        recipe = Recipe.create(recipe_params)

        render json: recipe
    end

    def destroy
        recipe = Recipe.find_by_id(params[:id])
        recipe.destroy

        render json: recipe
    end 

    private

    def recipe_params
        params.require(:recipe).permit(:name, :url, :meal_type, :cuisine)
    end

end
