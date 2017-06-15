var NewPost = React.createClass({
  propTypes: {
    fetchAuthorsUrl: React.PropTypes.string.isRequired,
    newPostUrl: React.PropTypes.string.isRequired
  },

  getInitialState: function(){
    return{
      authors: '',
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

  render: function(){
    return(
      <div>
        <h2>Nuevo post</h2>
        <form>
          <label>
            Título: <br/>
            <input type="text" id="title" name="title" onChange={this.handleChange.bind(this, 'title')}/><br/>
          </label>
          <label>
            Contenido: <br/>
            <textarea id="body" name="body" cols="50" rows ="4" onChange={this.handleChange.bind(this, 'body')} /><br/>
          </label>
          <label>
            Autor: <br/>
          </label>
        </form>
      </div>
    );
  }
});
