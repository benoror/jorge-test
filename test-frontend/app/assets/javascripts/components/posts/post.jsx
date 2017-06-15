var Post = React.createClass({
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
