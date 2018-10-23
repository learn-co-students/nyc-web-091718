10.times do
  Artist.create!(name: Faker::Music.band).songs.create!([
    { title: Faker::Hacker.say_something_smart },
    { title: Faker::Hacker.say_something_smart },
    { title: Faker::Hacker.say_something_smart },
    { title: Faker::Hacker.say_something_smart },
    { title: Faker::Hacker.say_something_smart },
    { title: Faker::Hacker.say_something_smart }
  ])
end

20.times do
  User.create!({
    username: Faker::LordOfTheRings.character,
    password: 'michael',
    profile_photo: Faker::Avatar.image
  }).songs << Song.all.sample(5)
end
