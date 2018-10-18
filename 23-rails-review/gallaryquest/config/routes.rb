Rails.application.routes.draw do
  resources :galleries
  resources :paintings, only: [:index, :show, :new, :create]
  # post '/searchpaintings', to: 'paintings#index'
  # get '/searchpaintings', to: 'paintings#search_results'

  # get '/searchpaintings', to: 'paintings#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
