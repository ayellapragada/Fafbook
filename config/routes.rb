Rails.application.routes.draw do
  root 'static_pages#root' 
  get '/api/search/', to: 'api/users#index', default: { format: :json }
  get '/api/search/:query', to: 'api/users#index', default: { format: :json }
  get '/api/posts/feed/:id', to: 'api/posts#feed', default: { format: :json }
  get '/api/likepost/:id', to: 'api/posts#like', default: { format: :json }
  get '/api/users/:id/photos', to: 'api/users#photos', default: { format: :json }
  get '/api/users/:id/friends', to: 'api/users#friends', default: { format: :json }
  get '/api/conversations/read', to: 'api/conversations#read', default: { format: :json }
  get '/api/conversations/read/:id', to: 'api/conversations#read_one', default: { format: :json }
  get '/api/notifications/read', to: 'api/notifications#read', default: { format: :json }
  get '/api/notifications/read/:id', to: 'api/notifications#read_one', default: { format: :json }

  resource :session, only: [:create, :destroy, :show]

  namespace :api, default: { format: :json } do
    resources :users, except: [:index, :new, :edit] do 
      resource :profile, only: [:show, :update]
    end 
    resources :posts, only: [:index, :create, :update, :destroy, :show] 
    resources :comments, only: [:create, :update, :destroy]
    resources :friendships, only: [:index, :update, :create, :destroy]
    resources :photos, only: [:create, :update, :show, :destroy] 
    resources :notifications, only: [:index]
    resources :conversations, only: [:index, :create, :destroy] do 
      resources :messages, only: [:index, :create]
    end

    resources :tweets, only: [:index]
    # resources :albums, only: [:create, :update, :show, :destroy] 

    # Don't worry about albums for right now. Let photo controller default to 
    # Timeline for right now.
  end

end
