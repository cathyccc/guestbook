class MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.all.order(created_at: :desc)
  end

  def create
    @message = Message.new(message_params)
    @message.save
    respond_to do |format|
      format.html { render html: "<p>#{@message.text}</p>".html_safe }
      format.json { render json: @message.to_json }
    end
  end

  def destroy
  end

  private
  def message_params
    params.require(:message).permit(:text, :guestname)
  end
end
