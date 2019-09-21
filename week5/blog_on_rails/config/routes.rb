Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/posts/new', {to: "posts#new", as: :new_post}

  post 'posts', {to: 'posts#create', as: :posts}

  get '/posts', {to: 'posts#index'}

  get '/posts/:id', {to: 'posts#show', as: :post }

  delete '/posts/:id', { to: 'posts#destroy'}

  get '/posts/:id/edit', {to: 'posts#edit', as: :edit_post}

  patch '/posts/:id', { to: 'posts#update'}


  resources :posts do
    resources :comments, only: [:create, :destroy]
  end









  get('/', {to: 'posts#index', as: 'root'})

  
end
