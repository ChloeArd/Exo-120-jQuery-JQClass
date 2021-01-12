$("#vide-plein").click(function(){
    $("div > div").addClass("fond");
});

$("#plein-vide").click(function(){
    $("div > div").removeClass("fond");
});

$(".cercle").click(function(){
    $(this).toggleClass("fond");
});

$("#carre1").click(function(){
    $(this).toggleClass("fond");
    $(".ligne1").toggleClass("fond");
    $(".colone1").toggleClass("fond");
});

$("#carre2").click(function(){
    $(this).toggleClass("fond");
    $(".ligne2").toggleClass("fond");
    $(".colone2").toggleClass("fond");
});

$("#carre3").click(function(){
    $(this).toggleClass("fond");
    $(".ligne4").toggleClass("fond");
    $(".colone4").toggleClass("fond");
});

$("#carre4").click(function(){
    $(this).toggleClass("fond");
    $(".ligne5").toggleClass("fond");
    $(".colone5").toggleClass("fond");
});

$(".losange").click(function(){
    $(this).toggleClass("fond");
    $(".ligne3").toggleClass("fond");
    $(".colone3").toggleClass("fond");
});
