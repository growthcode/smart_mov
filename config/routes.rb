Rails.application.routes.draw do
  root 'activities#new'
  resources :activities
  devise_for :users



  namespace :api do
    namespace :v1 do

    end
  end
end
