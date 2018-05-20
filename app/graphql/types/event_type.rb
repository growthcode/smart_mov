module Types
  EventType = GraphQL::ObjectType.define do
    name "Event"
    description "Movs of the User"
    implements GraphQL::Relay::Node.interface
    global_id_field :id
    field :value, types.Float
    field :happened_at, types.String do
      resolve -> (event, args, ctx) do
        event.happened_at.localtime.stamp("9/9/99 at 3:00am PST")
      end
    end
  end
end
