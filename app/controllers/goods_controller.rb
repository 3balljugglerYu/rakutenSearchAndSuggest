class GoodsController < ApplicationController
  require 'rakuten_web_service'

  def search
    if params[:keyword].present?
      # binding.pry
      # @items = RakutenWebService::Ichibaitem.search(title: params[:keyword])
      @items = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword])
    else
      render :search
    end
  end
end