

$(document).ready(function(){
  //shitty paralax

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
 


     //FADE OUT TOP YELLOW PART
      $(window).scroll(function(){
              $("#header ").css("opacity", 1 - $(window).scrollTop() / 800);
            });
         



// FADES IN CONTENT PART
$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 500 && $(window).scrollTop() < 1500 ){
    
 		$('.section.content').addClass('show');
    $('.section.content').removeClass('butt');
    $('.section.content').removeClass('cock');
  } else if  ($(window).scrollTop() > 1500 && $(window).scrollTop() < 3000 ){
    
    $('.section.content').removeClass('show');
     $('.section.content').removeClass('cock');
    	$('.section.content').addClass('butt');
    
} else if  ($(window).scrollTop() > 3000 && $(window).scrollTop() < 6000 ){
    
    $('.section.content').removeClass('show');
    	$('.section.content').removeClass('butt');
    $('.section.content').addClass('cock');
} else {
  $('.section.content').removeClass('butt');
  $('.section.content').removeClass('show');
   $('.section.content').removeClass('cock');
};   	
});

