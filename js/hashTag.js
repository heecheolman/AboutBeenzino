//javascript Document
//hashTag.js
$(document).ready(function(){
  $('#hash').hide();
  $('.mobSubHash').hide();

  $('.hashTag').on('click',function(){
    $('.hashTag').fadeOut(0);
    $('#hash').fadeIn(300);
    $('.backHash').on('click',function(){
      $('#hash').fadeOut(0);
      $('.hashTag').fadeIn(300);
    });
  });
  $('.mobHash').on('click',function(){
    $('.mobHash').fadeOut(0);
    $('.mobSubHash').fadeIn(300);
    $('.subBackHash').on('click',function(){
      $('.mobSubHash').fadeOut(0);
      $('.mobHash').fadeIn(300);
    });
  });
});//function 끝
