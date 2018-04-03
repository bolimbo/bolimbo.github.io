'use strict;'



$(".boton").on("click", function () {

    $(".h2").css("color", "gray");
    $(".h2").css("font-size", "50px");
    $(".h2").html("The force is with me......").fadeToggle(3000, .01)




});

$(".top").mouseover(function () {
    $(this).fadeIn();

})
//
//

// $("h1").on("click", function () {
//     $("");
//     $("#star-wars").show()
//     $(this).hide()
// });
// $( function() {
//     $( "#dialog" ).dialog();
//
// } );
$("#home").on("click",function(){
    $( "#dialog" ).dialog().html("Once upon A time");
    $(".ui-dialog-content").css("background-image", "url('stw.jpg')")
});

$(".bio").on("click",function(){
    $( "#dialog" ).dialog().html("Once upon many years");
    $(".ui-dialog-content").css("background-image", "url('stw.jpg')")
});

$(".contact").on("click",function(){
    $( "#dialog" ).dialog().html("Once upon many galaxies");
    $(".ui-dialog-content").css("background-image", "url('stw.jpg')")
});
