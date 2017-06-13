var PostsTable = React.createClass({

  componentWillMount: function(){
    this.fetchPosts(this.props.fetchPostsUrl);
  },

  getInitialState: function(){
    return{
      posts: []
    };
  },

  fetchPosts: function(url){
    var result;
    return $.get(url, function(data){
      console.log(data.data);
      return(data.data);
    });
  },

  test: function(){
    console.log(this.state.posts);
  },

  render: function(){
    var fetch = this.fetchPosts(this.props.fetchPostsUrl)
    console.log(fetch);
    this.state
    return(
      <h1>asds</h1>
    );
  }
});
