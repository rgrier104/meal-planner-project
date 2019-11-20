class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :url
      t.string :meal_type
      t.string :cuisine

      t.timestamps
    end
  end
end
