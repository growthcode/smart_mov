Rails.application.routes.draw do
  if Rails.env.development?
    authenticate :user do
      mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
      post "/graphql", to: "graphql#execute"
    end
  end

  # post "/graphql", to: "graphql#execute"
  resources :events
  root 'pages#index'
  resources :activities
  devise_for :users

  namespace :api do
    namespace :v1 do
      post "graphql" => "graphql#execute"
    end
  end
end
