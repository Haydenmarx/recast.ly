class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.currentVideo = this.props.video[0][0];
  }
  
   
  
  //Search send info up
  //info goes to Youtube
  //youtube return results
  //on success update local collection
  //render
  
  youtubeSearch(query) {
    console.log('app.js: ', this);
    searchYouTube(query).bind(this);
  }

  handleClick(video) {
    this.currentVideo = video;
    this.setState();
    this.render();
  }
  
  onVideoItemClick(video) {
    $('.video-player').render(<VideoPlayer id='videoPlayer' video= {video}/>);
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
            <div id='videoPlayer'><h5><VideoPlayer video= {this.currentVideo}/></h5></div>
          }
          </div>
          <div className="col-md-5">
            <div><h5><em></em><VideoList videos= {this.props.video[0]} cb = {this.handleClick}/></h5></div>
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
