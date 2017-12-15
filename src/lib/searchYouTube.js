var searchYouTube = (options, callback) => {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&key=${options.key}`; 
  $.get(url).done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
    .fail(({}) => {
      responseJSON.error.forEach((error) => console.error(error));
    });
};
window.searchYouTube = searchYouTube;