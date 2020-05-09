$(document).ready(function () {
    //LazyLoad
    window.scroll(1, 1);
    var item = $(".lazy");
    $(item).addClass("loadingimg");
    $(window).load(function () {
        $(item).each(function (i) {
            if (!$(this).hasClass("loaded")) {
                var element = $(this);
                var srcyebas = element.data("srcyebas");
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height() + $(this).height();
                if (bottom_of_window > bottom_of_object) {
                    var im = $(this).data("src");
                    var img = new Image();
                    img.src = im;
                    img.onload = function (e) {
                        element.css("opacity", 0);
                        if (srcyebas != null) {
                            element.attr("src", im).animate({
                                opacity: 1
                            });
                        } else {
                            element.css({
                                'background-image': 'url(\'' + im + '\')'
                            }).animate({
                                opacity: 1
                            });
                        }
                        element.removeClass("loadingimg");
                        element.addClass("loaded");
                    }, img.onerror = function () {
                        im = "/uploads/small/no.png";
                        if (srcyebas != null) {
                            element.attr("src", im).animate({
                                opacity: 1
                            });
                        } else {
                            element.css({
                                'background-image': 'url(\'' + im + '\')'
                            }).animate({
                                opacity: 1
                            });
                        }
                        element.removeClass("loadingimg");
                        element.addClass("loaded");
                    }
                }
            }
        });
    });
    $(window).scroll(function () {
        var item = $(".lazy");
        $(item).each(function (i) {
            if (!$(this).hasClass("loaded")) {
                var element = $(this);
                var srcyebas = element.data("srcyebas");
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height() + $(this).height();
                if (bottom_of_window > bottom_of_object) {
                    var im = $(this).data("src");
                    var img = new Image();
                    img.src = im;
                    img.onload = function (e) {
                        element.css("opacity", 0);
                        if (srcyebas != null) {
                            element.attr("src", im).animate({
                                opacity: 1
                            });
                        } else {
                            element.css({
                                'background-image': 'url(\'' + im + '\')'
                            }).animate({
                                opacity: 1
                            });
                        }
                        element.removeClass("loadingimg");
                        element.addClass("loaded");
                    }, img.onerror = function () {
                        im = "/uploads/small/no.png";
                        if (srcyebas != null) {
                            element.attr("src", im).animate({
                                opacity: 1
                            });
                        } else {
                            element.css({
                                'background-image': 'url(\'' + im + '\')'
                            }).animate({
                                opacity: 1
                            });
                        }
                        element.removeClass("loadingimg");
                        element.addClass("loaded");
                    }
                }
            }
        });
    });
    $(".menuBtn").click(function() {
        $("body").toggleClass("open");
    });
    typedJS();
    if ($(".counter").length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    $('[data-toggle="validate"]').validator();
});

if ($(".parallax").length > 0) {
    var scene = $('.parallax').get(0);
    var parallax = new Parallax(scene, { relativeInput: true })
}

function typedJS() {

    "use strict";

    var options = {
        strings: $(".element").attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed(".element", options);
}

$(function scroll() {
    $('ul#navMenu li a[href*="#"]:not([href="#"])').click(function () {
        $("ul#navMenu li a").removeClass("active");
        $(this).addClass("active");
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(window).on('load resize', function () {
    var genislik = $(window).width();
    if (genislik < 1200) {
        $(".main").css("width", genislik + "px");
    } else {
        $(".main").removeAttr("style");
    }
});