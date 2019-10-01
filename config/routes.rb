Rails.application.routes.draw do
  get 'legal/index', as: 'legal'
  get 'contact/index', as: 'contact'
  get 'about/index', as: 'about'
  get 'offer/index', as: 'offer'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
