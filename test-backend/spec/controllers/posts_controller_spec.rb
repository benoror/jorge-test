require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  describe "GET index" do

    it "responds successfully" do
      get :index
      expect(response).to be_success
    end
  end

  describe "POST create" do

    before do
      post :create, params: { post: post_params }
    end

    context "with params complete" do
      let(:post_params) do
        author_id = create(:author).id
        attributes_for(:post, author_id: author_id)
      end

      it "responds created status" do
        expect(response).to have_http_status(:created)
      end

    end

    context "with params incomplete" do
      context "author_id is missing" do
        let(:post_params){ attributes_for(:post) }

        it "responds error" do
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

  end

end
