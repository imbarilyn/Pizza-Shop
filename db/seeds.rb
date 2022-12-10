# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username: "Linah@bambino", password_digest: "linah@254_bambino")
user2 = User.create(username: "Cherokee", password_digest: "sisko@cherokee123")
user3 = User.create(username: "Laurabujuju", password_digest: "lauret@bujuju")
user4 = User.create(username: "Kathambino", password_digest: "kathambi@267")
user5 = User.create(username: "Danbambi", password_digest: "danimbari_bambino")


pizza1 = Pizzerium.create(name: "Pepperoni", price: 800, image_url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
pizza2 = Pizzerium.create(name: "Hawaian", price: 850, image_url: "https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=3U-ZTi5CZPTu-CxDiWUlkkGxvK3L1dflPb4nyDVnkZM=")
pizza3 = Pizzerium.create(name: "Imbari Special", price: 900, image_url: "https://media.istockphoto.com/id/1349560406/photo/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?b=1&s=170667a&w=0&k=20&c=hnqH34PgbSE8qTgrGt-_pWzEgj0Xe9eVmCbYgPcRkxo=")
pizza4 = Pizzerium.create(name: "Margherita", price: 700, image_url: "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?b=1&s=170667a&w=0&k=20&c=C3VC4zOkie0p06V5W7f6JJvZSBiDgqX1nz0J1uqVu3M=")
pizza5 = Pizzerium.create(name: "Vegan", price: 1000, image_url: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
pizza6 = Pizzerium.create(name: "Pineapple", price: 800, image_url: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

review1 = Review.create(comment:"Good", user_id: user1.id, pizzerium_id: pizza2.id)
review2 = Review.create(comment:"Average", user_id: user3.id, pizzerium_id: pizza1.id)
review3 = Review.create(comment:"Bad", user_id: user1.id, pizzerium_id: pizza3.id)
review4 = Review.create(comment:"Good", user_id: user4.id, pizzerium_id: pizza2.id)