var PostsContainer = React.createClass({

  getInitialState: function(){
    return{
      posts: []
    };
  },

  componentWillMount: function(){
    this.fetchPosts(this.props.fetchPostsUrl);
  },

  fetchPosts: function(url){
    return $.get(url, function(data){
      this.setState({posts: data.data});
    }.bind(this));
  },

  getPosts: function(){
    var posts = this.state.posts.map(function(post){
      return(<Post title={post["attributes"]["title"]} bodyContent={post["attributes"]["body"]}
        authorName={post["attributes"]["author-name"]} key={post["id"]}/>);
    });
    return posts;
  },

  render: function(){
    return(
      <div>
      <h1>Posts</h1>
      {this.getPosts()}
      </div>
    );
  }
});
