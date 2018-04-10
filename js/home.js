
var temp;
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'horizontal',
        loop: true,
        autoplay : 1500,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true
    });
    function getPlist(n,cba){
        if(check()){
            var list=JSON.parse(localStorage.playlists);
            cba(list);
        }else{
            $.ajax({
                url:'data/topPlayList.json',
                success: function (data) {
                    var list = data.playlists;
                    localStorage.playlists=JSON.stringify(data.playlists);
                    cba(list);//实参
                    localStorage.cactime=new Date().getTime();
                }
            })
        }

    }
    //检查本地是否储存了缓存数据
    function check(){
        if(!localStorage.playlists){
            return false
        }
        var ctime=localStorage.cactime;
        var dist=new Date().getTime()-ctime
        if(dist>5000){
            return false;
        }

        return true;
    }
    getPlist(true,function(data){//data形参
        var $slist=$('.songlist');
        var item=$('#songitem').html();
        for(var i=0;i<data.length;i++){
            var $item=$(item);//创建jquery对象
            $item.find('img').attr('src',data[i].coverImgUrl);
            $item.find('span').html(data[i].playCount);
            $item.find('p').html(data[i].name);
            var pl=data[i];
            $item.find('a').attr('href',"#detail?id="+data[i].id);
            $item.find('a').data('pls',pl).click(function(){
                router('detail','#share');
                temp=$(this).data('pls');
            });
            $slist.append($item);
        }
    })
});
