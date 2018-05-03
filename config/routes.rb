Rails.application.routes.draw do
  # if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  # end

  post "/graphql", to: "graphql#execute"
  resources :events
  root 'pages#index'
  resources :activities
  devise_for :users

  namespace :api do
    scope :v1 do
      post "graphql" => "graphqls#create"
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
end
