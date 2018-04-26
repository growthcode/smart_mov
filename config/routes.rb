Rails.application.routes.draw do
  root 'pages#index'
  resources :activities
  devise_for :users

  namespace :api do
    namespace :v1 do

    end
  end
end
