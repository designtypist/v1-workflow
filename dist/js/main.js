$(document).ready(function(){function i(){windowHeight=$(window).innerHeight(),$(".splashPage").css("height",windowHeight)}i(),$(window).resize(function(){i()}),$("#navMenuBtn").on("click",function(){$("#navMenu").toggleClass("isOpen")}),$(".pastWorkCatalog").slick({slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:2e3,nextArrow:'<i class="slickBtn fa fa-chevron-right fa-2x" aria-hidden="true"></i>',prevArrow:'<i class="slickBtn fa fa-chevron-left fa-2x" aria-hidden="true"></i>',dots:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1}}]}),$(".currentWorkCatalog").slick({slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:2e3,nextArrow:'<i class="slickBtn fa fa-chevron-right fa-2x" aria-hidden="true"></i>',prevArrow:'<i class="slickBtn fa fa-chevron-left fa-2x" aria-hidden="true"></i>',dots:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1}}]})});