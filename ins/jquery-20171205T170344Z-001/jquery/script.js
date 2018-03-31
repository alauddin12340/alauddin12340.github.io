$(function () {
    /*document.getElementBy('box').*/
    /*$(selector).action();*/

    /*$("#click").click(function () {
    $("#box").hide("slow", function () {
        alert("Animation complete.");
    });
    $('.thing').fadeOut(1000);
    $('h1').css("color", "red");
});*/


    /*---------------
    JQUERY SELECTOR
    -----------------*/
    //group selector
    //$('h1, h2, h3').css("border", "solid 1px red");

    //decendent selector
    //$('.decendent em').css("border", "solid 1px red");

    //$('.decendent').css("border", "solid 1px red");

    //$('.decendent > p').css("border", "solid 1px red");
    //$('#wrapper').css("border", "solid 1px red");

    //$('li:odd').css("border", "solid 1px red");

    /*-------------------
    JQUERY EVENTS METHOD
    ---------------------*/
    $('#box').click(function () {
        $(this).hide();
    });
    $('input').blur(function () {
        if ($(this).val() == "") {
            $(this).css("border", "solid 1px red");
        }
    });
    $('input').keydown(function () {
        if ($(this).val() != "") {
            $(this).css("border", "solid 1px green");
        }
    });
    $('input').keyup(function () {
        if ($(this).val() != "") {
            $('#box').text("Key Up event");
        }
    });

    $('#box').hover(function () {
        $(this).text("box Hover in");
    }, function () {
        $(this).text("box Hover out");
    });

    /*-------------------
    JQUERY CHAIN
    ---------------------*/
    /*-------------------
    JQUERY ANIMATION
    ---------------------*/
    /*-------------------
    JQUERY FADE,SLIDE,HIDE
    ---------------------*/


});

/*
$(document).ready(function () {

});*/
