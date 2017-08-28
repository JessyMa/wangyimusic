/**
 * Created by hxsd on 2017/8/17.
 */

$(function () {
    router('home',$('#tabcon'));
    $('nav li a').click(function () {
        $(this).parents().addClass('active').siblings().removeClass('active');
    });
    $('#list').click(function(){
        router('v1',$('#tabcon'));
    })
    $('#home').click(function(){
        router('home',$('#tabcon'));
    })
    $('#fm').click(function(){
        router('v2',$('#tabcon'));
    })
    $('#dan').click(function(){
        router('order',$('#share'));
    })
});
