
10.times do
  Library.create({ 'name' => Faker::Pokemon.name, 'location' => Faker::Pokemon.location, 'status' => [true, false].sample })
end

10.times do
  Book.create({ 'title' => Faker::Book.title, 'isbn' => Faker::IDNumber.valid, 'genre' => Faker::Book.genre, "library_id" => Library.all.sample.id })
end

10.times do
  Author.create(name: Faker::FunnyName.two_word_name, dob: Faker::Date.birthday(7, 100), country: Faker::WorldCup.team)
end

10.times do
  BookAuthor.create(book: Book.all.sample, author: Author.all.sample)
end

# Thesre are yopiur steps to migrate over data to a new table

# make that Genre table => model, create a migration, migrate, check schema, test
# move that data over, write ruby code that you run once
# genre_id to the books table
# link up that data
# drop that useless genre column
