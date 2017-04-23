
$(".btn").on({"click":function () {
    // 百度地图API功能
    $(".cover").show();
    var map = new BMap.Map("showmap");
    var point = new BMap.Point(118.786357,32.029113);
    map.centerAndZoom(point, 20);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

}});
$(".close").on({"click":function () {
    $(".cover").hide();
}})




