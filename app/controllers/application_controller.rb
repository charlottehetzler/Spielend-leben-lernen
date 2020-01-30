class ApplicationController < ActionController::Base
  # include HttpAuthConcern
  #http_basic_authenticate_with name: ENV['USER_NAME'], password: ENV['PASSWORD']
  protect_from_forgery with: :exception
end
