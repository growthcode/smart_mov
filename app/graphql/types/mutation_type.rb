module Types
  MutationType = GraphQL::ObjectType.define do
    name "Mutation"

    field :eventCreate, !Types::EventType do
      description "Creates Event"
      argument :event, !Types::EventInputType
      resolve ->(obj, args, ctx) {
        event = ctx[:current_user].events.new(args[:event].to_h)
        event.save!
        event
      }
    end
  end
end
