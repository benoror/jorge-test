class PostsController < ApplicationController
  def index
    @posts_url = 'http://localhost:3000/posts'
  end
end
