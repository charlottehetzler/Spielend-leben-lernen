require 'test_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get philosophy" do
    get categories_philosophy_url
    assert_response :success
  end

  test "should get sand" do
    get categories_sand_url
    assert_response :success
  end

  test "should get offer" do
    get categories_offer_url
    assert_response :success
  end

  test "should get about" do
    get categories_about_url
    assert_response :success
  end

  test "should get contact" do
    get categories_contact_url
    assert_response :success
  end

  test "should get legal" do
    get categories_legal_url
    assert_response :success
  end

  test "should get privacy" do
    get categories_privacy_url
    assert_response :success
  end

end
