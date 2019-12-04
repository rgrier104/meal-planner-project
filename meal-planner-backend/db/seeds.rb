# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

buff_chickpea_wraps = Recipe.create(name: "Buffalo Chickpea Wraps", url: "https://minimalistbaker.com/spicy-buffalo-chickpea-wraps/", meal_type: "Entree", cuisine: "American")
blueberry_pancakes = Recipe.create(name: "Blueberry Muffin Pancakes", url: "https://minimalistbaker.com/vegan-blueberry-muffin-pancakes/", meal_type: "Breakfast", cuisine: "American")
falafel_wraps = Recipe.create(name: "Kale Falafel Hummus Wraps", url: "https://minimalistbaker.com/kale-falafel-hummus-wraps/", meal_type: "Entree", cuisine: "Mediterranean")
Recipe.create(name: "White Bean & Kale Salad with Tahini Dressing", url: "https://minimalistbaker.com/white-bean-kale-salad-with-tahini-dressing/", meal_type: "Entree", cuisine: "American")
Recipe.create(name: "General Tso's Tofu Stir-Fry", url: "https://minimalistbaker.com/general-tsos-tofu/", meal_type: "Entree", cuisine: "Asian")
Recipe.create(name: "Chipotle Sofritas Burrito Bowls", url: "https://www.eatingbirdfood.com/chipotle-tofu-sofritas/", meal_type: "Entree", cuisine: "Mexican")
Recipe.create(name: "Peanut Butter Overnight Oats", url: "https://minimalistbaker.com/peanut-butter-overnight-oats/", meal_type: "Breakfast", cuisine: "American")
Recipe.create(name: "Tzatziki", url: "https://www.discoverdelicious.org/food-blog/vegan-tzatziki", meal_type: "Snack", cuisine: "Mediterranean")
Recipe.create(name: "Vegan Buffalo Chicken Dip", url: "https://www.noracooks.com/vegan-buffalo-chicken-dip/", meal_type: "Snack", cuisine: "American")
Recipe.create(name: "Jackfruit Burrito Bowl", url: "https://myplantedplate.com/2018/08/20/jackfruit-burrito-bowl-vegan-gluten-free-grain-free/", meal_type: "Entree", cuisine: "Mexican")

mp1 = MealPlan.create(name: "Marathon Training", notes: "List of ingredients")

