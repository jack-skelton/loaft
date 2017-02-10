$(document).ready(function(){
  //shitty paralax
  $('.parallax').parallax();

  $('#side-menu').hide();
  $('#header h1').hide().slideDown(function() {
    $('#side-menu').fadeIn(1000);
    //slogan 
    $(function(){
      $(".element").typed({
        //strings: ["web developers.", "graphic designers.","solution architects."],
        strings: ["modern <strong>Web</strong> and <strong>Graphic</strong> design.", "increase your <b>Digital</b> reach."],
        typeSpeed: 50,
        loop: true,
        showCursor: true,
        backDelay: 1500,
        startDelay: 0
      });
    });
  });

});

