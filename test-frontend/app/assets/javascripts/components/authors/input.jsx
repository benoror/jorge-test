var AuthorsInput = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    selectedAuthor: React.PropTypes.string.isRequired
  },

  showOptions: function(authors){
    return authors.map(function(author){
      return(<option key={author["id"]} value={author["id"]}>{author["attributes"]["name"]}</option>);
    });
  },

  render: function(){
    return(
      <select id="author_id" name="author_id" value={this.props.selectedAuthor}
        onChange={this.props.handleChange}>
        {this.showOptions(this.props.authors)}
      </select>
    );
  }

});
