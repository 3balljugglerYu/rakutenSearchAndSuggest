class GoodsController < ApplicationController

  def search
    if params[:keyword].present?
    # if params[:keyword].present? && params[:keyword].gsub(" ","").length >= 2
      @items = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword])
      # binding.pry
    else
      render :search
    end
  end

  def suggest
  end

end