class MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
    else
      render :message
    end
  end

  def destroy
  end

  private
  def message_params
    params.require(:message).permit(:text)
  end
end
