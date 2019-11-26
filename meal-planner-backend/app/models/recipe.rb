class Recipe < ApplicationRecord
    has_many :meals
    has_many :meal_plans, through: :meals
end
