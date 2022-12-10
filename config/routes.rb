Rails.application.routes.draw do
  # resources :users
  # resources :pizzeria
  post '/signup', to: 'users#create' 
  post '/login', to: 'session#create' 
  delete '/logout', to: 'session#destroy'
  get '/me', to: 'users#show'

  resources :pizzeria, only: [:index]

  resources :reviews
  
end

