var searchYouTube = ({query, key, max}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: query,
      key: key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      maxResults: max
    },
    success: function(data) {
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
