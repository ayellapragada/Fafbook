# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

Profile.destroy_all
User.destroy_all
Post.destroy_all

User.create(fname: 'Test', lname: 'Testerson', 
            email: 'test@password.com', password: 'password',
            gender: true, date: '9', month: '2', year: '1995'
           )


20.times do |i|
  User.create!(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    email: i,
    password: 'password',
    gender: Faker::Boolean.boolean,
    date: Faker::Number.between(1, 28),
    month: Faker::Number.between(1, 12),
    year: Faker::Number.between(1965, 2005),
  )
end


10.times do |i|
  u = User.find(1)
  b = User.find(i + 3)

  u.friend_request(b)
  b.accept_request(u)
end


