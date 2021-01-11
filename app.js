$("#vide-plein").click(function(){
    $("div > div").addClass("fond");
});

$("#plein-vide").click(function(){
    $("div > div").removeClass("fond");
});

$(".cercle").click(function(){
    $(".cercle").toggleClass("fond");
});

$(".carre").click(function(){
    $(".carre").toggleClass("fond");
    //suite
});

$(".losange").click(function(){
    $(".losange").toggleClass("fond");
    //suite
});
