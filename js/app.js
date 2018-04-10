
function getUrlParams(){
    var url=window.location.href;
    var arr=url.split('?');
    var str=arr[1];
    var parr=str.split('&');
    var params={};
    for(var i=0;i<parr.length;i++){
        var p=parr[i];
        var kv= p.split('=');
        params[kv[0]]=kv[1];
    }
    return params;
}
function getM(){
    var url=window.location.href;
    var arr=url.split('#');
    if(arr.length==2){
        var m=arr[1].split('?');
        var mod=m[0];
    }
    return(mod);
}
//console.log(getM());
//console.log(getUrlParams());
function router(m,$container){
    $container=$container || $('#share');
    $.ajax({
        url:"views/"+m+".html",
        success: function (data) {
            $($container).html(data);
            loadjs(m);
        }
    });
}
function loadjs(m){
    $.ajax({
        type:'get',
        url:'js/'+m+'.js',
        async:true
    });
}
$(function(){
    if(!localStorage.count){
        localStorage.count=0;
    }
    localStorage.count++;
    if(localStorage.count==1){
        router('hello');
    }else{
        router('tab');
        router('audio','#globel')
    }
});

