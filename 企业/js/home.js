//轮播图
$(".dianbox li").click(function () {
    $(this).addClass("active").siblings().filter(".active").removeClass("active");

    var index=$(this).index();
    $(".banner li").fadeOut(500).eq(index).fadeIn(1000);
    num=index;
});
var st=setInterval(move,3000);
var num=0;
function move() {
    num++;
    if(num===$(".dianbox li").length){
        num=0;
    }
    $(".dianbox li").filter(".active").removeClass("active").end().eq(num).addClass("active");
    $(".banner li").fadeOut(500).eq(num).fadeIn(1000);
}
$(".bannerbox").hover(function () {
    clearInterval(st);
},function () {
    st=setInterval(move,3000);
});

//置顶
$(".totop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    },500)
});
$("window").scroll(function () {
    var st=$(window).srollTop();
    if(st>$(window).innerHeight()){
        $(".totop").show();
    }else{
        $(".totop").hide();
    }
});

//导航
$(".nav .right>li").hover(function () {
    $(this).find(".secnav").show(200);
},function () {
    $(this).find(".secnav").hide(200);
});
