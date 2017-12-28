var latestTweetIndex;

$(document).ready(function(){

  var $body = $('body');
  var index = streams.home.length - 1;
  var latestTweetIndex = 0;
  while(latestTweetIndex <= index){
    var tweet = streams.home[latestTweetIndex];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '; ' + tweet.created_at);
    $tweet.appendTo($body);
    latestTweetIndex += 1;

  }

  $('#getNewTweets').on('click',function(){
    index = streams.home.length - 1;
    while(latestTweetIndex < index){
      var tweet = streams.home[latestTweetIndex];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '; ' + tweet.created_at);
      $tweet.appendTo($body);
      latestTweetIndex += 1;

  }
    latestTweetIndex = index;
  });
});
