//menu show
$(".menu").click(function(){
    if($(this).hasClass("h")){
        $(this).removeClass("h");
    } else {
        $(this).addClass("h");
    }
})
//scrolling to loction
$(".nav2,.nav3,.nav4").on({"click":function () {
    $("body").stop(true).animate({"scrollTop":600})
}})
$(".nav5").on({"click":function () {
    $("body").stop(true).animate({"scrollTop":1250})
}})
$(".nav6").on({"click":function () {
    $("body").stop(true).animate({"scrollTop":2470})
}})
$(".nav7").on({"click":function () {
    $("body").stop(true).animate({"scrollTop":3240})
}})
$(".footer .toTop,.footer p").on({"click":function () {
    $("body").stop(true).animate({"scrollTop":0})
}},1000)

//when the window scrolling,back to top

$(window).scroll(function () {
    var dis = $(window).height();
    var disscr =$(window).scrollTop();
    if(disscr>dis){
        $(".toTop").show();
    }
})

// fadein
$(document).ready(function () {
    $(".sub,.sup").fadeIn(2000);
    $(window).scroll(function () {
        var disTop = $(window).scrollTop();
        if(disTop > 0 && disTop < 200){
            $(".sub,.sup").fadeIn(2000);
        }
        else if(disTop>200 &&disTop<1100){
            $(".analysis-right ul,.left-title").fadeIn(2000);
        }
        else if(disTop>1100 &&disTop<2100){
            $(".server-content ul").fadeIn(2000);
        }
        else if(disTop>2100 &&disTop<3100){
            $(".article").fadeIn(2000);
        }
    })
})

// when window scrolling ,nav hide
$(window).scroll(function () {
    $(".menu").addClass("h");
})
