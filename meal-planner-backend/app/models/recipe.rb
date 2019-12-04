class Recipe < ApplicationRecord
    has_many :meals, :dependent => :destroy
    has_many :meal_plans, through: :meals
end
