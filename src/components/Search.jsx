var Search = (props) => {
  var onSearchButtonClick = () => {
    let info = $('input').val();
    props.search(info);
  };
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyPress={(e)=>{ if (e.which === 13 || e.keyCode === 13) { props.search(e.target.value); } }}/>
      <button className="btn hidden-sm-down" onClick={(onSearchButtonClick.bind(this))}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//e.target.value