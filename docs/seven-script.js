$(function () {

  var $sleds;

  $sleds = $('.seven-segment');

  $sleds.find('.item').mousedown(function () {
    $(this).toggleClass('active');
    ledsToHex();
  });
    
});