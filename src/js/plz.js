$(document).ready(function(){
    var $slider = $('.slides');
    var names = ["ECOREPORT", "SERVADMIN", "GESTION DE LIGUE", "IN THE LAB"];
    $('.slides').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('#prev-btn'),
      nextArrow: $('#next-btn'),
      speed: 800,
      cssEase: 'cubic-bezier(.94,-0.03,.57,.97)',
    });
    $('#slide-name').text(names[$slider.slick('slickCurrentSlide')]);
    $('#slide-index').text($slider.slick('slickCurrentSlide') + 1+" / 4");
    $slider.on('afterChange', function(event, slick, currentSlide){
        $('#slide-index').text(currentSlide + 1+" / 4");
        $('#slide-name').text(names[currentSlide]);
      });
    $('#prev-btn, #next-btn').on('click', function() {
        $('.slide').addClass('scroll-effect');
        setTimeout(function() {
          $('.slide').removeClass('scroll-effect');
        }, 400);
        $('.hh').addClass('goesup');
        setTimeout(function() { $('.hh').removeClass('goesup');},400);
        $('.hh').addClass('goesdown');
        setTimeout(function() { $('.hh').removeClass('goesdown');},400);
      });
      
  });
  
  