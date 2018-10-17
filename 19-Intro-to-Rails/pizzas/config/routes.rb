Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/pizzas', to: "pizza#index"
  # get '/pizzas/:id', to: "pizza#show"
  resources :pizzas

end
