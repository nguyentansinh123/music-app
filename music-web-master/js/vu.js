$(".song").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId); 
    ap.play();
    $("#aplayer").addClass('showPlayer') ;
       

});

const ap = new APlayer({
container: document.getElementById('aplayer'),
ListFolded : true ,
audio: [
{
name: 'Đông kiếm em',
artist: 'Vũ',
url: '../js/audio/DongKiemEm.mp3',
cover: 'https://i.ytimg.com/vi/O5_6Nti5iJY/maxresdefault.jpg'
},
{
name: 'Lạ lùng',
artist: ' Vũ ',
url: '../js/audio/LaLung.mp3',
cover: 'https://avatar-ex-swe.nixcdn.com/song/2018/01/26/1/8/9/0/1516930244148_640.jpg'
},
{
name: 'Lời yêu em ',
artist: ' Vũ ',
url: '../js/audio/LoiYeuEm.mp3',
cover: 'https://kenh14cdn.com/thumb_w/650/2016/img-0176-1481199671899-1482564383262.jpg'
},
{
name: 'Em là mưa',
artist: ' Vũ ',
url: '../js/audio/EmLaMua.mp3',
cover: 'https://2sao.vietnamnetjsc.vn/images/2019/08/31/14/31/thai-vu-2.png'
},
] 

});