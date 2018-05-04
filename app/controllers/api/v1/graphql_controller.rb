class Api::V1::GraphqlController < Api::BaseController
  # TODO: authenticate this URL... i.e. remove the skip_before_action :authenticate_user
  # skip_before_action :authenticate_user!

  # def create
  #   query_string = params[:query]
  #   binding.pry
  #   query_variables = JSON.load(params[:variables]) || {}
  #   current_user = User.first
  #   context = { current_user: current_user }
  #   result = Schema.execute(query_string, variables: query_variables, context: context)
  #   render json: result
  # end
# end
# class GraphqlController < ApplicationController
  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      # current_user: User.first,
    }
    result = SmartMovSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
