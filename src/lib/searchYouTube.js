var searchYouTube = (options, callback) => {
  //options = {apikey, query, max = number of vids}
  //callback = pass on success
  //search = 'https://www.googleapis/youtube/v3/ query&key='apiKey'
  var search = function(options) {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=API&key="xxxxxxxxxxxxxx"'; 
    fetch(url).then(function () {
      console.log(arguments);
    });
  };
  search(options);
};
window.searchYouTube = searchYouTube;