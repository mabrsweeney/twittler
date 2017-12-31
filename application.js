var $tweets = $('.tweetSection');
var index = streams.home.length - 1;
var latestTweetIndex = 0;
var twittlerStream;
var interval = true;

var twittlerActivity = function(){
    index = streams.home.length - 1;
    while(latestTweetIndex < index){
      var tweet = streams.home[latestTweetIndex];
      var $tweet = $('<div class=\'tweet\'>' + '<a class=\'user\'>' + '@' + tweet.user 
                    + '</a>' + '<p class=\'message\'>' + tweet.message + '</p>' 
                    + '<p class=\'timeSig\'>' + tweet.created_at + '</p>' + '</div>');
      $tweet.prependTo($tweets);
      $tweet.show('slow', function(){});
      latestTweetIndex += 1;
    }
    latestTweetIndex = index;
  }


$(document).ready(function(){

  //set up followers list
  for(i in streams.users){
    $('.following').append($('<a class=\'user\'>' + '@' + String(i) +'</a>'));
  }
  
  twittlerStream = setInterval(twittlerActivity,100);

  //View Single User's feed
  $('body').on('click','.user', function(){
    if (interval){
      clearInterval(twittlerStream);
      interval = false
    }
      $('#back').show();
      $('.tweet').hide();
      $('.tweet:contains('+ $(this).text() +')').show();
    
  });

  //click back button to resume twittler Activity
  $('#back').on('click', function(){
    if(!interval){
      $('.tweet').show();
      twittlerStream = setInterval(twittlerActivity,100);
      interval = true;    
      $('#back').hide();
    }
  });

});
