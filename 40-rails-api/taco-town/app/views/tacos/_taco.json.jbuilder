json.extract! taco, :id, :name, :ingredients, :created_at, :updated_at
json.url taco_url(taco, format: :json)
