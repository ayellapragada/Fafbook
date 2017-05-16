source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.0'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# How to securely work with api keys
gem 'figaro'
# Paperclip to handle image uploading
gem "paperclip", "~>5.0.0"
# Let paperclip connect to AWS
gem 'aws-sdk', '>=2.0'

# Good multisearch gem
gem 'pg_search'

# Easy friendship model
gem 'has_friendship'
# Comment model that can be attached to posts
gem 'acts_as_commentable'
# Easy likes and mentions for posts and comments 
gem 'socialization'
# For realtime chat and notifications
gem 'pusher'
# Notification manager
gem 'activity_notification'


# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'annotate'
  gem 'faker'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  gem 'guard', ">= 2.2.2", :require => false
  gem "guard-livereload",  :require => false
  gem "rack-livereload"
  gem "rb-fsevent",        :require => false
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end
