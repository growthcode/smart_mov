source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby "2.3.3"
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

gem 'active_model_serializers'
gem 'annotate'
gem 'attribute_normalizer'
gem 'awesome_print'
gem 'bootstrap', '~> 4.1.0'
gem 'bootswatch'
gem 'colorize','~> 0.7.5'
gem 'devise'
gem 'factory_bot_rails'
gem 'faker'
gem 'font-awesome-rails'
gem 'jquery-rails' # Dropped in Rails 5.1
gem 'simple_form'
gem 'devise-bootstrapped'
gem 'stamp'



# https://github.com/rails/webpacker
gem 'webpacker', '~> 3.0.2' # https://mkdev.me/en/mentors/IvanShamatov || https://paweljw.github.io/2017/07/rails-5.1-api-with-vue.js-frontend-part-1-setting-up-a-rails-api-app/
gem 'foreman'


# might use later:
# ==============================================================================
# gem 'devise_invitable'
# gem 'ejs'
# gem 'foreman'
# gem 'friendly_id' # apply slug to user for friendly URLs
# gem 'fullcalendar-rails' # flock calendar (hours / schedule)
# gem 'kaminari' # pagination
# gem 'kaminari-bootstrap', '~> 3.0.1' # pagination
# gem 'paper_trail'
# gem 'paranoia'
# gem 'pretender' # devise "impersonation" of users
# gem 'redis'
# gem 'redis-namespace'
# gem 'redis-rack-cache'
# gem 'redis-rails'
# gem 'seedbank' # Seedbank gives your seed data a little structure. Puru used in Flock.
# gem 'select2-rails' # better styled selected boxes... use this if you don't have vendor file
# gem 'sidekiq'
# gem 'sidekiq-failures' # Keep track of Sidekiq failed jobs
# gem 'sidekiq-throttler' # adds the ability to rate limit job execution... like: "when the number of executed jobs for the worker exceeds 50 in an hour, remaining jobs will be delayed"
# gem 'stamp' # easy date time formatting
# gem 'webpacker' # https://mkdev.me/en/mentors/IvanShamatov || https://paweljw.github.io/2017/07/rails-5.1-api-with-vue.js-frontend-part-1-setting-up-a-rails-api-app/
# gem 'whenever', require: false # clear syntax for writing and deploying Cron Jobs (schedule.rb)

group :development, :test do
  gem 'rspec-rails' # this needs to be in development group so generators will also make spec files
  gem 'better_errors' # Better error page for Rack apps (doesn't work when you run "Bundle Exec rails s")
  gem 'bullet' # env development/test: pg, help to kill N+1 queries and unused eager loading
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rack-mini-profiler', require: false
  gem 'rubocop'
  gem 'pry-rails'
  gem 'reek' # https://github.com/troessner/reek; code smells
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'timecop' # making it simple to test time-dependent code
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'binding_of_caller' # this with web-console puts binding on error page in develpment
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Unused Rails Defaults
# ==============================================================================
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

