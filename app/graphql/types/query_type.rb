module Types
  QueryType = GraphQL::ObjectType.define do
    name "Query"
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :node, GraphQL::Relay::Node.field

    # field :user do
    #   type UserType
    #   description "asdfasdf"
    #   resolve ->(obj, args, ctx) {
    #     User.first
    #   }
    # end

    field :users, types[Types::UserType] do
      description "fdasfdsa"
      # User.all do |u|
      #   resolve ->(obj, args, ctx) {
      #     u
      #   }
      # end
      resolve ->(obj, args, ctx) { User.all }
      # resolve ->(obj, args, ctx) {
      #   User.first
      # }
    end


    field :me, Types::UserType do
      description "current_user"
      resolve ->(obj, args, ctx) { ctx[:current_user] }
    end

    field :events, types[Types::EventType] do
      description "all events"
      resolve ->(obj, args, ctx) { ctx[:current_user].events.order(created_at: :desc).all }
    end

    field :activities, types[Types::ActivityType] do
      description "all activities"
      resolve ->(obj, args, ctx) { ctx[:current_user].activities.history }
    end

    # field :activity, types[Types::ActivityType] do
    #   description "Find an Activity by ID"
    #   resolve ->(obj, args, ctx) {
    #     ctx[:current_user].activities.find_by(args[:id])
    #   }
    # end
  end
end
