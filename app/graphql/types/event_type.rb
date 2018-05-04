module Types
  EventType = GraphQL::ObjectType.define do
    name "Event"
    field :id, !types.String
    field :value, types.Int
    field :activityTitle, !types.String do
      resolve -> (event, args, ctx) { event.activity.title }
    end
    field :user, !UserType
  end
end
