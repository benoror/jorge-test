class PostsController < ApplicationController
  def index
    @posts_url = 'http://localhost:3000/posts'
  end

  def new
    @new_post_info = {
      new_post_url: 'http://localhost:3000/posts',
      authors_url: 'http://localhost:3000/authors'
    }
  end
end
