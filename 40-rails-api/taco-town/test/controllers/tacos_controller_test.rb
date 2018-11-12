require 'test_helper'

class TacosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @taco = tacos(:one)
  end

  test "should get index" do
    get tacos_url
    assert_response :success
  end

  test "should get new" do
    get new_taco_url
    assert_response :success
  end

  test "should create taco" do
    assert_difference('Taco.count') do
      post tacos_url, params: { taco: { ingredients: @taco.ingredients, name: @taco.name } }
    end

    assert_redirected_to taco_url(Taco.last)
  end

  test "should show taco" do
    get taco_url(@taco)
    assert_response :success
  end

  test "should get edit" do
    get edit_taco_url(@taco)
    assert_response :success
  end

  test "should update taco" do
    patch taco_url(@taco), params: { taco: { ingredients: @taco.ingredients, name: @taco.name } }
    assert_redirected_to taco_url(@taco)
  end

  test "should destroy taco" do
    assert_difference('Taco.count', -1) do
      delete taco_url(@taco)
    end

    assert_redirected_to tacos_url
  end
end
