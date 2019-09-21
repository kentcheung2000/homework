class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :show, :update, :password, :update_password]
  before_action :find_user, only: [:edit, :show, :update, :password, :update_password]
  before_action :authorize!, only: [:edit, :update, :password, :update_password]
  
 
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end


  def show
    @user = user.find(params[:id])
  end


  def edit
    @user =  current_user
  end

  
  def password

  end



  def update_password
    if @user&.authenticate params[:user][ :current_password ]
      if @user.update user_params
          flash[:success] = "Password updated"
          redirect_to root_path
      else
          flash[:danger] = @user.errors.full_messages.join(', ')
          redirect_to password_path(@user)
      end
    else
      flash[:danger] = "You've entered an invalid current password"
      redirect_to password_path
    end
  end



  def update
    @user =  current_user
    if @user.update user_params
      redirect_to root_path
      flash[:notice] = 'User information updated'
    else
      render :edit
    end

  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
    #params.require(:user).permit(:name, :email)
  end

  # def user_password_params
  #   params.require(:user).permit(:password, :password_confirmation)
  # end

  def find_user
    @user = User.find params[:id]
  end

  def authorize!
    # redirect_to root_path, alert: 'Not authorized!' unless can?(:crud, current_user)
    redirect_to root_path, alert: 'Not authorized!' unless can?(:crud, current_user)
  end


end
