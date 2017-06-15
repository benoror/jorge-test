var NewPost = React.createClass({
  propTypes: {
    fetchAuthorsUrl: React.PropTypes.string.isRequired,
    newPostUrl: React.PropTypes.string.isRequired
  },

  getInitialState: function(){
    return{
      author_id: '',
      authors: [],
      body: '',
      title: ''
    };
  },

  componentWillMount: function(){
    this.fetchAuthors(this.props.fetchAuthorsUrl);
  },

  fetchAuthors: function(url){
    return $.get(url, function(data){
      this.setState({authors: data.data});
    }.bind(this));
  },

  handleChange: function(attrToChange, event){
    var state = $.extend({}, this.state);
    state[attrToChange] = event.target.value;
    this.setState(state)
  },

  handleSubmit: function(e){
    var dataToSubmit = this.dataToSubmit();
    $.post(this.props.newPostUrl, dataToSubmit, function( data ) {
      alert("Post realizado");
    })
      .fail(function(){
        alert("Ocurrió un error, verifique el form");
      });
    e.preventDefault();
  },

  dataToSubmit: function(){
    return{
      post: {
        author_id: this.state.author_id,
        body: this.state.contentBody,
        title: this.state.title
      }
    };
  },

  render: function(){
    return(
      <div>
        <h2>Nuevo post</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Título: <br/>
            <input type="text" id="title" name="title" onChange={this.handleChange.bind(this, 'title')}/><br/>
          </label>
          <label>
            Contenido: <br/>
            <textarea id="contentBody" name="contentBody" cols="50" rows ="4" onChange={this.handleChange.bind(this, 'contentBody')} /><br/>
          </label>
          <label>
            Autor: <br/>
            <AuthorsInput authors={this.state.authors} handleChange={this.handleChange.bind(this, 'author_id')} selectedAuthor={this.state.author_id}/>
          </label>

          <br/> <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});
