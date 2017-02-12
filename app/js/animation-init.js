

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
        typeSpeed: 30,
        loop: true,
        showCursor: true,
        backDelay: 3000,
        startDelay: 0
      });
    });
  });

});

$(document).ready(function(){
  $('.scrollspy').scrollSpy(
    {scrollOffset: -130}
  );
});

$(document).ready(function(){
  var vid =  $('#lightVideo');
  vid.on("canplay", function() {
    $('#power').css("visibility", "visible");
    vid.css({
      '-webkit-box-shadow': '2px 2px 34px 2px rgba(0,0,0,0.63)',
      '-moz-box-shadow': '2px 2px 34px 2px rgba(0,0,0,0.63)',
      'box-shadow': '2px 2px 34px 2px rgba(0,0,0,0.63)'
    });
  });
});
 

