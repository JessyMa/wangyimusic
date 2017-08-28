/**
 * Created by hxsd on 2017/8/18.
 */
var musurl;
//var curren;
var mControler={
    server:'http://music.163.com/song.php?id=',//虚拟接口
    playmus:function(id){
        $.ajax({
            type:'get',
            //url:this.server+id,
            url:'data/music.json',
            async:true,
            success:function(data){
                //var url=data.url;
                    var url=data[id].url;
                    $('#audio').attr('src',url);
                $('#audio').get(0).play();//转为js对象
                //curren=$('#audio').get(0).currentTime;
                $('.btn').removeClass('pause');
            }
        })
    }
}

$('.btn').click(function(ev) {
    ev.stopPropagation();
    if ($(this).hasClass('pause')) {
        $('#audio').get(0).play();
        //curren=$('#audio').get(0).currentTime;
        $(this).removeClass('pause');
    } else {
        $('#audio').get(0).pause();
        $(this).addClass('pause')
    }
});
$('#globel').click(function () {
    // $('#audio').get(0).pause();
    $(this).css('display','none');
    musurl=$(this).find('#audio').attr('src');
    router('playpage');
});