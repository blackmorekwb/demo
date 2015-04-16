// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  // Hover ability on TABS
  $('.nav-tabs > li > a').hover( function(){
    $(this).tab('show');
  });

  $('#pg-btn').click(function(){
    var div = document.getElementById('pg-well');
    changeBgColor(div, '#F0F');


  });

  $('#contact-btn').hover(function() {
    $(this).addClass("pulse");
  });
  

  function changeBgColor (div, color) {

    //var elem = document.getElementById(div);
    div.style.transition = "background 2.0s ease-in 0s";
    div.style.background = color;


  }

/*
  $(window).scroll(function() {
    $('#animatedElement').each(function(){
      var imagePos    = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+350) {
        //$(this).addClass("slideLeft");
        changeBgColor($(this), '#F0F');
      }
    });
  });
*/
  /* CSS animations */
  /*
  //element.style.webkitAnimationPlayState = "paused";
  //element.style.webkitAnimationPlayState = "running";

  $('#contact-btn').hover(function() {
    $(this).addClass("pulse");
  });

  $(window).scroll(function() {
    $('#animatedElement').each(function(){
      var imagePos    = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideLeft");
      }
    });
  });
*/


});
