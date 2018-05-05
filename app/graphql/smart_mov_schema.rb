# query {
#   node(id: "VXNlci0yNjhkNDk5NmRlZDZkYzg4LTE=") {
#     id
#     ... on Event {
#       activityTitle
#       value
#     }
#     ... on User {
#       email
#         first
#         last
#     }
#   }
#
#   me {
#     id
#     email
#     first
#     last
#   }
#
#   events {
#     id
#     activityTitle
#     value
#   }
# }

SmartMovSchema = GraphQL::Schema.define do
  mutation Types::MutationType
  query Types::QueryType

  id_from_object ->(obj, type, ctx) {
    GraphQL::Schema::UniqueWithinType.encode(type.name, obj.id, separator: "-#{ctx[:current_user].graph_token}-")
  }

  object_from_id ->(id, ctx) {
    type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(id, {separator: "-#{ctx[:current_user].graph_token}-"})
    type_name.constantize.find(obj_id)
  }

  resolve_type ->(type, obj, ctx) {
    case obj
    when Event
      Types::EventType
    when User
      Types::UserType
    else
      raise "Unexpected object: #{obj}"
    end
  }
end

