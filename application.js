var $tweets = $('.tweetSection');
var index = streams.home.length - 1;
var latestTweetIndex = 0;


function getTweets(){
  while(latestTweetIndex < index){
    var tweet = streams.home[latestTweetIndex];
    var $tweet = $('<div class=\'tweet\'></div>');
    var $user = $('<p class=\'user\'></p>');
    var $message = $('<p class=\'message\'></p>');
    var $timeSig = $('<p class=\'timeSig\'></p>');
    $user.text('@' + tweet.user + ': ');
    $message.text(tweet.message + '; ');
    $timeSig.text(tweet.created_at)
    $tweet.append($user).append($message).append($timeSig);
    $tweet.prependTo($tweets);
    $tweet.show('slow', function(){});
    latestTweetIndex += 1;

  }
}

$(document).ready(function(){

  setInterval(function(){
    index = streams.home.length - 1;
    getTweets();
    latestTweetIndex = index;
  },100);

  $('.tweet').on('click', function(){
    console.log('egg');
  });

});
