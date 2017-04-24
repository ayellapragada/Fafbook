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

User.create(fname: 'Test', lname: 'Testerson', 
            email: 'test@password.com', password: 'password',
            gender: true, date: '9', month: '2', year: '1995'
           )
