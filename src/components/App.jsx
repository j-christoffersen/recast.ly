

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
    
    this.clickTitleHandler = this.clickTitleHandler.bind(this);
    this.successFunction = this.successFunction.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    
    if (props.searchYouTube) {
      this.searchYouTube = props.searchYouTube;
    }
    
    this.searchYouTube('', this.successFunction);
  }

  
  clickTitleHandler(selectedVideoIndex, e) {
    this.setState({
      currentVideo: this.state.videos[selectedVideoIndex]
    });
  }
  
  searchHandler(e) {
    console.log(e.target.value);
    this.searchYouTube(e.target.value, this.successFunction);
  }
  
  successFunction(videoData) {
    this.setState({
      videos: videoData,
      currentVideo: videoData[0] // used to be 0
    });
  }
  
  searchYouTube(query, callback) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 10
    };
    searchYouTube(options, callback);
  }
  
  render() {
    // console.log('videos: ', this.state.videos);
    // console.log('currentVideo: ', this.state.currentVideo);
    // var currentVideo = this.state.videos.
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchHandler={this.searchHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickTitleHandler={this.clickTitleHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
