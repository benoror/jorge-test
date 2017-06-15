class PostsController < ApplicationController
  def index
    @posts_url = 'http://localhost:3000/posts'
  end

  def new
    new_post_url = 'http://localhost:3000/posts'
    authors_url = 'http://localhost:3000/authors'
    @new_post_facade = Posts::NewFacade.new(new_post_url, authors_url)
  end
end
