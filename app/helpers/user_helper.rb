module UserHelper
  def current_user_greeting
    if current_user.first.present?
      "Hi #{current_user.first} <i class='fa fa-user-circle'></i>".html_safe
    else
      "Hi"
    end
  end
end
