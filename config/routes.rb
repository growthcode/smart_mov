Rails.application.routes.draw do
  root 'activities#new'
  resources :activities
  devise_for :users
end
