$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');

  $('.parallax--box').css('top', -5 + (wScroll*.005)+'em');

  $('.parallax--box2').css('bottom', -4 - (wScroll*.015)+'em');

  $('.parallax--box3').css('top', 5 - (wScroll*.015)+'em')
}
