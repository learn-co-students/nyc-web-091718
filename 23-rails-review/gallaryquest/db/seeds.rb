# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gallery.create(name: "banksy's house", sqfootage: 100, location: "UK", banksy_has_shredded_here: true)
Gallery.create(name: "banksy's flat", sqfootage: 1000, location: "UK", banksy_has_shredded_here: false)

Painting.create(gallery_id: 1, name: "guernica", style: "picasso", artist: "also picasso", value: 10000000, oil: false)
Painting.create(gallery_id: 2, name: "the banksy one", style: "shredded", artist: "british guy", value: 1000000000, oil: false)
Painting.create(gallery_id: 1, name: "the banksy one", style: "shredded", artist: "british guy", value: 1000000000, oil: false)
Painting.create(gallery_id: 2, name: "the banksy one", style: "shredded", artist: "british guy", value: 1000000000, oil: false)


# t.string "name"
# t.string "style"
# t.string "artist"
# t.integer "value"
# t.boolean "oil"
# t.integer "gallery_id"

# t.string "name"
# t.integer "sqfootage"
# t.string "location"
# t.boolean "banksy_has_shredded_here"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# end
