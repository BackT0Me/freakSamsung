"use strict";require(["../../static/conf/config.js"],function(){require(["jquery","sw"],function(a,s){a(function(){var e=new s(".swiper-container",{autoplay:!0,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0}});a(".swiper-container").on("mouseleave",function(){e.autoplay.start()}),a(".swiper-container").on("mouseenter",function(){e.autoplay.stop()}),a("#thenew").on("click",function(){a(".slidershow2").animate({left:"0px"},500),a("#thenew a").removeClass("word_list_color"),a("#thenew").siblings().children().addClass("word_list_color"),a(".label").remove();var e=a("<div>");a("#thenew").append(e),a("#thenew div").addClass("label"),a(".label").animate({width:"128px"})}),a("#suggest").on("click",function(){a(".slidershow2").animate({left:"-1470px"},500),a("#suggest a").removeClass("word_list_color"),a("#suggest").siblings().children().addClass("word_list_color"),a(".label").remove();var e=a("<div>");a("#suggest").append(e),a("#suggest div").addClass("label"),a(".label").animate({width:"64px"})}),a("#hot").on("click",function(){a(".slidershow2").animate({left:"-2940px"},500),a("#hot a").removeClass("word_list_color"),a("#hot").siblings().children().addClass("word_list_color"),a(".label").remove();var e=a("<div>");a("#hot").append(e),a("#hot div").addClass("label"),a(".label").animate({width:"128px"})}),a(".silde_one div").on("mouseenter",function(){this.addClass("shadow")})})})});