$(document).ready(function(){
    $(".navigationMenuOpen, .closeBtn").on("click", function(){
        $(".linksContainer").toggleClass("active");
        $(".haveMegaMenu").removeClass("active");
    });
});
$(window).on("load", function(){
    var x = document.createElement("div");
    x.setAttribute("class", "goBackBtn");
    // x.classList.addClass("goBackBtn");
    x.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    $(".haveMegaMenu").append(x);
    $(".goBackBtn").on("click", function(){
        console.log(this)
        $(this).parent().removeClass('active');
    });
});
$(".linksContainer").on("click",function(e){
    if(e.target.classList.contains("linksContainer"))
    {
        $(".linksContainer").toggleClass("active");
    }
});
$(".haveMegaMenu").on("click",function(e){
    if(e.target.localName != "a" && !e.target.classList.contains("goBackBtn"))
    {
        $(this).addClass("active");
    }
});