/**
 * Created by hxsd on 2017/8/17.
 */
var params=getUrlParams();
// console.log(params.id);
var id=params.id;
var thesong;
var thind;
//var url='http://music.163.com/songlist.php?id='+id;
//根据专辑id去查询对应的专辑列表
$('#back').click(function(){
    router('tab');
});
function getlist(backfn){
    $.ajax({
        type:'get',
        url:'data/playlist.json',
        async:true,
        success:function(data){
            var plast=data.playlist;
            $('#top').css('background',temp.coverImgUrl);
            $('#top .avimg').find('img').attr('src',temp.coverImgUrl);
            $('#top .txt h3').html(temp.name);
            $('#top .txt span').html(temp.creator.nickname);
            var tag=temp.tags;
            var hcon='';
            for(var j=0;j<tag.length;j++){
                hcon+='<span class="tagn">' + tag[j] + '</span>';
            };
            $('#disc .tagl').html('标签： '+hcon);
            $('#disc .cont').html('简介： '+temp.description);
            var tracks=data.playlist.tracks;
            backfn(tracks);
        }
    })
}
getlist(function(list){
    var $avalist=$('#avalist');
    //
    var music=$('#music').html();
    for(var i=0;i<list.length;i++){
        var $music=$(music);
        var mu=list[i];
        // thind=tmp;
        $music.find('.ind').html(i+1);
        $music.find('.md').children('.mn').html(list[i].name);
        $music.find('.md').children('.avt').html(list[i].al.name);
        $music.find('.md').children('.nam').html(list[i].ar[0].name);
        $music.data('ind',i);
        $music.data('mu',mu).click(function(){
            thesong=$(this).data("mu");
            thind=$(this).data("ind");
            $("#globel").css('display','block');
            $("#globel").find(".gem").html($(this).data("mu").name);
            $("#globel").find("img").attr('src',$(this).data("mu").al.picUrl);
            $("#globel").find(".artist").html($(this).data("mu").ar[0].name);
            console.log($(this).data("mu").id);
            mControler.playmus($(this).data("mu").id);
        });
        $avalist.append($music);
    }
});