'use strict;'



$(".boton").on("click", function () {
    $(".h2").css("color", "gray")
    $(".h2").css("font-size", "70px")

    $(".h2").html("THE FORCE IS WITH ME......").fadeToggle(6000, .07)



});

$(".top").mouseover(function () {
    $(this).fadeIn();

})
//
//

$("h1").on("click", function () {
    $("")
    $("#star-wars").show()
    $(this).hide()
})
$( function() {
    $( "#dialog" ).dialog();
} );



