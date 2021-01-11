$("#vide-plein").click(function(){
    $("div > div").addClass("fond");
});

$("#plein-vide").click(function(){
    $("div > div").removeClass("fond");
});

$(".cercle").click(function(){
    $(this).toggleClass("fond");
});

$(".carre").click(function(){
    $(this).toggleClass("fond");
    //suite
});

$(".losange").click(function(){
    $(this).toggleClass("fond");
    //suite
});
