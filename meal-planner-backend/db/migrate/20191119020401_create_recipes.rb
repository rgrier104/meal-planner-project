class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :url
      t.string :type

      t.timestamps
    end
  end
end
