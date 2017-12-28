var $body = $('body');
var index = streams.home.length - 1;
  var latestTweetIndex = 0;
function getTweets(){

  while(latestTweetIndex < index){
    var tweet = streams.home[latestTweetIndex];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '; ' + tweet.created_at);
    $tweet.appendTo($body);
    latestTweetIndex += 1;

  }
}
$(document).ready(function(){

  getTweets();

  $('#getNewTweets').on('click',function(){
    index = streams.home.length - 1;
    getTweets();
    latestTweetIndex = index;
  });
});
