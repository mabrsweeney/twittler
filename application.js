var $tweets = $('.tweetSection');
var index = streams.home.length - 1;
var latestTweetIndex = 0;
var twittlerStream;

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
  
  twittlerStream = setInterval(twittlerActivity,100);

  //View Single User
  $('body').on('click','.user', function(){
      clearInterval(twittlerStream);
      $('.tweet').hide();
      $('.tweet:contains('+ $(this).text() +')').show()
      //$('.tweet').filter($('.tweet').find('.user').text($(this).text())).show();
  });

  $('h1').on('click', function(){
    $('.tweet').show();
    twittlerStream = setInterval(twittlerActivity,100);
  });

});
