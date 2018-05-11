class Api::V1::AuthenticationController < Api::BaseController
  skip_before_action :authenticate_request!, only: [:authenticate_user]

  def authenticate_user
    user = User.find_for_database_authentication(email: params[:email])
    if user.present? && user.valid_password?(params[:password])
      time_now = Time.now
      expires_at = (time_now + 1.day).to_i
      render json: payload(user, expires_at).merge(expiresAt: expires_at)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

  def test
    render json: {test_route: "success"}, status: :ok
  end

  private

  def payload(user, expires_at)
    return nil unless user and user.id
    {
      authToken: JsonWebToken.encode({ user_id: user.id, exp: expires_at }),
      user: { id: user.id, email: user.email }
    }
  end
end
