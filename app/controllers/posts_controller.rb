class PostsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all

    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def show
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    # have to refactor this to save the post
    @post = Post.create(post_params)

    respond_to do |format|
      format.json
    end
  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:name)
    end
end
