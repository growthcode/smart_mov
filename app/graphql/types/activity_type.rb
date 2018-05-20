module Types
  ActivityType = GraphQL::ObjectType.define do
    name "Activity"
    description "Movs of the User"
    implements GraphQL::Relay::Node.interface
    # object_from_id

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
    field :events do
      type types[EventType]
      resolve -> (activity, args, ctx) do
        activity.events.order(happened_at: :desc)
      end
    end
  end
end
