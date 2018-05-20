# Object Identification Hooks
# A GraphQL schema needs a handful of hooks for finding and disambiguating objects while queries are executed.

SmartMovSchema = GraphQL::Schema.define do
  mutation Types::MutationType
  query Types::QueryType

  # return a unique ID for the given object
  # This ID will later be sent to object_from_id to refetch the object
  id_from_object ->(obj, type, ctx) {
    GraphQL::Schema::UniqueWithinType.encode(type.name, obj.id, separator: "-#{ctx[:current_user].graph_token}-")
  }

  # receives a unique ID and must return the object for that ID, or nil
  object_from_id ->(id, ctx) {
    type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(id, {separator: "-#{ctx[:current_user].graph_token}-"})
    type_name.constantize.find(obj_id)
  }

  # used when a specific object’s corresponding GraphQL type must be determined
  # such as when sending in "node(id: 'RANDOM HASH')"
  resolve_type ->(type, obj, ctx) {
    case obj
    when Event
        binding.pry
      Types::EventType
    when Activity
      Types::ActivityType
    when User
      Types::UserType
    else
      raise "Unexpected object: #{obj}"
    end
  }
end

