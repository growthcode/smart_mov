module Types
  QueryType = GraphQL::ObjectType.define do
    name "Query"
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :node, GraphQL::Relay::Node.field
    field :users, types[Types::UserType] do
      description "fdasfdsa"
      resolve ->(obj, args, ctx) { User.all }
    end


    field :me, Types::UserType do
      description "current_user"
      resolve ->(obj, args, ctx) { ctx[:current_user] }
    end

    field :events, types[Types::EventType] do
      description "all events"
      resolve ->(obj, args, ctx) do
        binding.pry
        ctx[:current_user].events.order(created_at: :desc).all
      end
    end

    field :activities, types[Types::ActivityType] do
      description "all activities"
      resolve ->(obj, args, ctx) do
        ctx[:current_user].activities.history
      end
    end

    field :activity, Types::ActivityType do
      description "Find an Activity by ID"
      argument :id, !types.ID
      resolve ->(obj, args, ctx) do
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(args[:id], {separator: "-#{ctx[:current_user].graph_token}-"})
        return if !type_name == "Activity"
        ctx[:current_user].activities.history.find_by(id: obj_id)
      end
    end
  end
end
