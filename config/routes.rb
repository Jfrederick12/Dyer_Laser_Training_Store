Rails.application.routes.draw do
  resources :posts
  resources :charges
  resources :product_charges

  get '/', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
