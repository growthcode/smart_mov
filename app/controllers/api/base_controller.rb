# class BaseController < ActionController::Base
class Api::BaseController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # before_action :authenticate_user!
end
