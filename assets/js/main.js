$(document).ready(function(){
    $('#click').click(function(){
        $('#dropdown').slideToggle();
    });
    $('#click2').click(function(){
        $('#dropdown2').slideToggle();
    });
    $('#click3').click(function(){
        $('#dropdown3').slideToggle();
    });
    $('#click4').click(function(){
        $('#dropdown4').slideToggle();
    });
    $('#click5').click(function(){
        $('#dropdown5').slideToggle();
    });
    $('#click6').click(function(){
        $('#dropdown6').slideToggle();
    });
    $('#click7').click(function(){
        $('#dropdown7').slideToggle();
    });
    $('#subject_dropdown').click(function(){
        $('#dropdown8').slideToggle();
    });
    $('#hint_box_main').click(function(){
        $('#hint_box').slideToggle();
    });
    $('#hint_box_main2').click(function(){
        $('#hint_box2').slideToggle();
    });
    $('#hint_box_main3').click(function(){
        $('#hint_box3').slideToggle();
    });
    $('#hint_box_main4').click(function(){
        $('#hint_box4').slideToggle();
    });
    $('#hint_box_main5').click(function(){
        $('#hint_box5').slideToggle();
    });
    $('#hint_box_main6').click(function(){
        $('#hint_box6').slideToggle();
    });
    $('#hint_box_main7').click(function(){
        $('#hint_box7').slideToggle();
    });
    $('#hint_box_main8').click(function(){
        $('#hint_box8').slideToggle();
    });
    $('#hint_box_main9').click(function(){
        $('#hint_box9').slideToggle();
    });
    $('#hint_box_main10').click(function(){
        $('#hint_box10').slideToggle();
    });
    $('#hint_box_main11').click(function(){
        $('#hint_box11').slideToggle();
    });
    $('#hint_box_main12').click(function(){
        $('#hint_box12').slideToggle();
    });
    $('#hint_box_main13').click(function(){
        $('#hint_box13').slideToggle();
    });
    $('#hint_box_main14').click(function(){
        $('#hint_box14').slideToggle();
    });
    $('#hint_box_main15').click(function(){
        $('#hint_box15').slideToggle();
    });
    $('#hint_box_main16').click(function(){
        $('#hint_box16').slideToggle();
    });
    $('#hint_box_main17').click(function(){
        $('#hint_box17').slideToggle();
    });
    $('#hint_box_main18').click(function(){
        $('#hint_box18').slideToggle();
    });
    $('#hint_box_main19').click(function(){
        $('#hint_box19').slideToggle();
    });
    $('#hint_box_main20').click(function(){
        $('#hint_box20').slideToggle();
    });
    
    $('#hide_btn').click(function(){
        $('#hide_ans').slideToggle();
    });
    $('#hide_btn2').click(function(){
        $('#hide_ans2').slideToggle();
    });
    $('#hide_btn3').click(function(){
        $('#hide_ans3').slideToggle();
    });
    $('#hide_btn4').click(function(){
        $('#hide_ans4').slideToggle();
    });
    $('#hide_btn5').click(function(){
        $('#hide_ans5').slideToggle();
    });
    $('#hide_btn6').click(function(){
        $('#hide_ans6').slideToggle();
    });
    $('#hide_btn7').click(function(){
        $('#hide_ans7').slideToggle();
    });
    $('#hide_btn8').click(function(){
        $('#hide_ans8').slideToggle();
    });
    $('#hide_btn9').click(function(){
        $('#hide_ans9').slideToggle();
    });
    $('#hide_btn10').click(function(){
        $('#hide_ans10').slideToggle();
    });

    // Slick Slider Index Page
    $('.responsivee').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

});
    
$('.venobox').venobox();



var $audio = $('#audio');
var $audioHover = $('#audio-hover');


$audioHover.on('mouseenter focus', function() {
    $audio.get(0).play();
});
$audioHover.on('mouseleave blur', function() {
    $audio.get(0).pause();
});


var $audio2 = $('#audio2');
var $audioHover2 = $('#audio-hover2');


$audioHover2.on('mouseenter focus', function() {
    $audio2.get(0).play();
});
$audioHover2.on('mouseleave blur', function() {
    $audio2.get(0).pause();
});


var $audio3 = $('#audio3');
var $audioHover3 = $('#audio-hover3');


$audioHover3.on('mouseenter focus', function() {
    $audio3.get(0).play();
});
$audioHover3.on('mouseleave blur', function() {
    $audio3.get(0).pause();
});


var $audio4 = $('#audio4');
var $audioHover4 = $('#audio-hover4');


$audioHover4.on('mouseenter focus', function() {
    $audio4.get(0).play();
});
$audioHover4.on('mouseleave blur', function() {
    $audio4.get(0).pause();
});


var $audio5 = $('#audio5');
var $audioHover5 = $('#audio-hover5');


$audioHover5.on('mouseenter focus', function() {
    $audio5.get(0).play();
});
$audioHover5.on('mouseleave blur', function() {
    $audio5.get(0).pause();
});


var $audio6 = $('#audio6');
var $audioHover6 = $('#audio-hover6');


$audioHover6.on('mouseenter focus', function() {
    $audio6.get(0).play();
});
$audioHover6.on('mouseleave blur', function() {
    $audio6.get(0).pause();
});


var $audio7 = $('#audio7');
var $audioHover7 = $('#audio-hover7');


$audioHover7.on('mouseenter focus', function() {
    $audio7.get(0).play();
});
$audioHover7.on('mouseleave blur', function() {
    $audio7.get(0).pause();
});


var $audio8 = $('#audio8');
var $audioHover8 = $('#audio-hover8');


$audioHover8.on('mouseenter focus', function() {
    $audio8.get(0).play();
});
$audioHover8.on('mouseleave blur', function() {
    $audio8.get(0).pause();
});


var $audio9 = $('#audio9');
var $audioHover9 = $('#audio-hover9');


$audioHover9.on('mouseenter focus', function() {
    $audio9.get(0).play();
});
$audioHover9.on('mouseleave blur', function() {
    $audio9.get(0).pause();
});


var $audio10 = $('#audio10');
var $audioHover10 = $('#audio-hover10');

$audioHover10.on('mouseenter focus', function() {
    $audio10.get(0).play();
});
$audioHover10.on('mouseleave blur', function() {
    $audio10.get(0).pause();
});


var $audio11 = $('#audio11');
var $audioHover11 = $('#audio-hover11');

$audioHover11.on('mouseenter focus', function() {
    $audio11.get(0).play();
});
$audioHover11.on('mouseleave blur', function() {
    $audio11.get(0).pause();
});