module Types
  EventType = GraphQL::ObjectType.define do
    name "Event"
    description "Movs of the User"
    implements GraphQL::Relay::Node.interface

    global_id_field :id
    field :aid, types.Int, property: :id
    field :value, types.Float
    field :activity_id, !types.Int
    field :activityTitle, !types.String do
      resolve ->(event, args, ctx) { event.activity.title }
    end
    field :user, !UserType
  end
end
