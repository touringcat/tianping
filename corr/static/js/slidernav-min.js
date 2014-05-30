/*
 *  SliderNav - A Simple Content Slider with a Navigation Bar
 *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://devgrow.com/slidernav
 */
$.fn.sliderNav=function(options){var defaults={items:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],debug:false,height:null,arrows:true};var opts=$.extend(defaults,options);var o=$.meta?$.extend({},opts,$$.data()):opts;var slider=$(this);$(slider).addClass('slider');$('.slider-content li:first',slider).addClass('selected');$(slider).append('<div class="slider-nav"><ul></ul></div>');

$('.slider-nav').css('max-height', ($(window).height()-133)+'px');

for(var i in o.items)$('.slider-nav ul',slider).append("<li><a alt='#"+o.items[i]+"'  >"+o.items[i]+"</a></li>");var height=$('.slider-nav',slider).height();if(o.height)height=o.height;$('.slider-content, .slider-nav',slider).css('height',height);if(o.debug)$(slider).append('<div id="debug">Scroll Offset: <span>0</span></div>');
if(o.arrows){$('.slider-nav',slider).css('top','135px');$(slider).prepend('<div class="slide-up end"><span class="arrow up"></span></div>');$(slider).append('<div class="slide-down"><span class="arrow down"></span></div>');$('.slide-down',slider).click(function(){$('.slider-content',slider).animate({scrollTop:"+="+height+"px"},500);});$('.slide-up',slider).click(function(){$('.slider-content',slider).animate({scrollTop:"-="+height+"px"},500);});}};
//滚动高度对应字母导航nav位置
$(document).scroll(function(e){
	var navToTop = window.scrollTop(); 

	if(navToTop>50){
		$('.slider .slider-nav').css('position','fixed');
		$('.slider .slider-nav').css('top','50px');
	}else{
		$('.slider .slider-nav').css('position','absolute');
		$('.slider .slider-nav').css('top','135px');
	}
});

$(document).delegate('.slider-nav li a', 'click', function () {
        var id = $(this).attr('alt');
	$('.slider-content .selector>li').each(function(e){
		var $thisNav = $(this);
		var nav = $thisNav.find('a').attr('id');
		if(id.match(nav)==nav){
			var top = $thisNav.offset().top;
			window.scrollTo(0,top-50);
		}else{return;}
	})
});
