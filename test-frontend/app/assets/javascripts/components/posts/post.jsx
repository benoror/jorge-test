var Post = React.createClass({
  propTypes: {
    authorName: React.PropTypes.string.isRequired,
    bodyContent: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },

  render: function(){
    return(
      <div>
        <hr/>
        <h2>{this.props.title}</h2>
        <p>{this.props.bodyContent}</p>
        <i><b>Por: </b>{this.props.authorName}</i>
        <hr/>
      </div>
    );
  }
});
