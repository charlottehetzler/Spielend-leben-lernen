Rails.application.routes.draw do
  get 'philosophie', to: 'categories#philosophy', as: "philosophy"
  get 'sandspiel', to: 'categories#sand', as: "sand"
  get 'angebot', to: 'categories#offer', as: "offer"
  get 'uebermich', to: 'categories#about', as: "about"
  get 'kontakt', to: 'categories#contact', as: "contact"
  get 'impressum', to: 'categories#legal', as: "legal"
  get 'datenschutz', to: 'categories#privacy', as: "privacy"
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
