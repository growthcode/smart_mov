module Types
  EventInputType = GraphQL::InputObjectType.define do
    name "EventInput"
    argument :value, !types.Float
    argument :activity_id, !types.Int
  end
end
