# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts ' making creatures '
Creature.create(species: 'reptile', name: 'Reptar', num_legs:17, eats_humans: true)
Creature.create(species: 'dawg', name: 'Snoop', num_legs:2, eats_humans: true)
Creature.create(species: 'lion', name: 'Scar', num_legs:4, eats_humans: true)

p 'Done. Creatures made. Dark deed is done.'
