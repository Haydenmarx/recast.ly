class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.youtubeSearch = this.youtubeSearch.bind(this);
    
    this.state = {
      videos: props.videos,
      currentVideo: props.videos[0]
    };
  }

  youtubeSearch(query) {
    searchYouTube(query, videos => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em></em><Search search = {this.youtubeSearch}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id='videoPlayer'><h5><VideoPlayer video= {this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em><VideoList videos= {this.state.videos} cb = {this.handleClick}/></h5></div>
          </div>
        </div>
      </div>   
    );
  }
}

// console.log(exampleVideoData);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
