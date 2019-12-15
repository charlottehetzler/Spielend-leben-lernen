require 'test_helper'

class SandControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sand_index_url
    assert_response :success
  end

end
