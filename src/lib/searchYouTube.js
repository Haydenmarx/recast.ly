var searchYouTube = (options, callback) => {
  console.log(this);
  var search = function(options) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&key=${options.key}`; 
    $.get(url).success(function (data) {
      console.log('Data = ', data);
    });
  };
  search(options);
};
window.searchYouTube = searchYouTube;