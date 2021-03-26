Rails.application.routes.draw do
  root to: 'goods#search'
  get 'goods', to: 'goods#suggest'
end
