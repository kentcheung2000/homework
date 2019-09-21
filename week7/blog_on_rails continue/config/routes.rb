Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'users/new'
  # get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/posts/new', {to: "posts#new", as: :new_post}

  # post 'posts', {to: 'posts#create', as: :posts}

  # get '/posts', {to: 'posts#index'}

  # get '/posts/:id', {to: 'posts#show', as: :post }

  # delete '/posts/:id', { to: 'posts#destroy'}

  # get '/posts/:id/edit', {to: 'posts#edit', as: :edit_post}

  # patch '/posts/:id', { to: 'posts#update'}


  resources :posts do
    resources :comments, only: [:create, :destroy]
  end

  

  resource :session, only: [:new, :create, :destroy]

  resources :users, only: [:new, :create, :edit, :update]

  #post 'posts', {to: 'users#update_password', as: :posts}

  # get 'update_password' => "users_controller#update_password"

  get '/users/:id/password', { to: "users#password", as: 'password' }
  patch '/users/:id/password', { to: "users#update_password", as: 'update_password' }









  get('/', {to: 'posts#index', as: 'root'})

  
end
