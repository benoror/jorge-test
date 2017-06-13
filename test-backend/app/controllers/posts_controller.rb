class PostsController < ApplicationController

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors.full_messages, status: :unprocessable_entity
    end
  end


  def index
    posts = Post.all
    render json: posts
  end

  private

    def post_params
      params.require(:post).permit(:title, :body, :author_id)
    end

end
