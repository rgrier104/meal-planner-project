class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :day
      t.string :meal_type
      t.belongs_to :recipe, null: false, foreign_key: true
      t.belongs_to :meal_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
