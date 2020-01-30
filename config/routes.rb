Rails.application.routes.draw do
  get 'sand/index', as: 'sand'
  get 'privacy_policy/index', as: 'policy'
  get 'philosophy/index', as: 'philosophy'
  get 'legal/index', as: 'legal'
  get 'contact/index', as: 'contact'
  get 'about/index', as: 'about'
  get 'offer/index', as: 'offer'
  get '/' to: 'pages#home'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
