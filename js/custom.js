
/**tabs */

  (function($) {
	$(function() {
	  
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	  
	});
    })(jQuery);


    $(function ($) {
        $(".owl-full").owlCarousel({
            loop:true,
            items: 1,
            autoplay: true,
            dots: true,
            nav: false,
        })
        $(".owl-news").owlCarousel({
            //center:true,
            stagePadding:180,
            loop:true,
            items: 4,
            margin:38,
            //autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
                    "<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
            responsive : {
                0 : {
                    center:true,
                    stagePadding:0,
                    items: 1,
                },
                370 : {
                    center:true,
                    stagePadding:50,
                    items: 1,
                },
                480 : {
                    center:true,
                    stagePadding:100,
                    items: 1,
                },
                570 : {
                    center:true,
                    stagePadding:0,
                    items: 2,
                },
                670 : {
                    center:true,
                    stagePadding:60,
                    items: 2
                },
                992 : {
                    items: 2,
                },
                1200 : {
                    items: 3,
                },
                1500 : {
                    items: 4,
                },
                1800:{
                    items: 4,
                },
                1950 : {
                    items: 4,
                },
                2000 : {
                    items:5,
                }
            }
        });
      })


  var ratio = 1/1.5; // высота равна половине ширины
  if($(window).width()<992){var ratio = 1/1.3;}
  if($(window).width()>992){var ratio = 1/1.5;}
  if($(window).width()>1300){var ratio = 1/1.5;}
  var $box = $('.bl-2'); // кэшируем результат вызова функции
  var $box1=$('.bmb-img5'); 

    $box.height($box.width() * ratio);
    $box1.height($box.width()/2 * ratio);

 $(window).resize(function () {
     if($(window).width()>992){var ratio = 1/1.3;}
     if($(window).width()>1300){var ratio = 1/1.5;}
      if($(window).width()<992){var ratio = 1/1.5;}
      $box.height($box.width() * ratio);
      $box1.height($box.width()/2 * ratio);
 }) 

 /***radio */
$(".radio-button input[name='radio']").click(function(){
    $('.radio-button').removeClass('active');
    var a= $(this).parent();
    if ($('input[name="radio"]').is(':checked')){
        a.addClass('active');
    }
})

$("#modal-1").click(function (){
    var a = $(".modal-1");
    if(!$(a).hasClass('active')){
        $(a).addClass('active');
        return false;
    }else{
        $(a).removeClass('active');
        return false;
    }
})
$(".close").click(function () {
    $(this).parents('.modal').removeClass('active');
    return false
})


var scrollPos = 0;
var ww = $(window).width();

if( ww < 1920 && ww > 1600){var np = 600;}
else if( ww < 1600 && ww > 1200){var np = 400;}
else if( ww < 1200 ){var np = -400;}
var st = $(this).scrollTop();
//console.log(st + "|" + np)
scrollPos = (st+np) /3 * -1;
$('.fon-x').css('top',scrollPos)

$(window).scroll(function(){
   var st = $(this).scrollTop();
   //console.log(st + "|" + np)
   if (st > scrollPos){
     $('#result').html('Вниз');
     //console.log(st)
   } else {
     $('#result').html('Вверх');
     //console.log(st)
   }
   scrollPos = (st+np) /3 * -1;
   $('.fon-x').css('top',scrollPos)
});

$('.hpala').click(function(){
    var a = $('.nav-h-m');
    if(!$(a).hasClass('active')){
        $(a).addClass('active');
        $('.hpala').addClass('active');
        return false;
    }else{
        $(a).removeClass('active');
        $('.hpala').removeClass('active');
        return false;
    }

})

AOS.init({
    disable: function () {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
  });







