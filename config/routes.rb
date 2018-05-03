Rails.application.routes.draw do
  resources :events
  root 'pages#index'
  resources :activities
  devise_for :users

  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
end
