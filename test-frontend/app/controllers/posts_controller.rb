class PostsController < ApplicationController
  def index
    @posts_url = 'http://localhost:3000/posts'
  end

  def new
    @new_post_url = 'http://localhost:3000/posts'
  end
end
