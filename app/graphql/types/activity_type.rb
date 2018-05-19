module Types
  ActivityType = GraphQL::ObjectType.define do
    name "Activity"
    description "Movs of the User"
    implements GraphQL::Relay::Node.interface

    global_id_field :id
    field :value, types.Float do
      resolve ->(activity, args, ctx) { activity.value.round(2) }
    end
    field :title, !types.String
    field :num_movs, !types.Int
    field :value_saved, !types.Float
    field :avg_value, !types.Float do
      resolve ->(activity, args, ctx) do
        (activity.value_saved / activity.num_movs).round(2)
      end
    end
  end
end
