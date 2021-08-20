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
name: 'im lặng thôi dsk ',
artist: 'DSK',
url: '../js/audio/ImLangThoi.mp3',
cover: 'https://i.ytimg.com/vi/_pgjLLSo8yM/maxresdefault.jpg'
},
{
name: 'Điếu thuốc cuối',
artist: 'DSK',
url: '../js/audio/dieuthuoccuoidsk.mp3',
cover: 'https://i.ytimg.com/vi/o35IyZpOW4U/maxresdefault.jpg'
},
{
name: 'Lớn Rồi ',
artist: 'DSK',
url: '../js/audio/Lon-Roi-DSK.mp3',
cover: 'https://img.youtube.com/vi/tfKjamYnbP0/0.jpg'
},
{
name: 'Ngày tàn ',
artist: 'DSK',
url: '../js/audio/Ngay-Tan-DSK.mp3',
cover: 'https://i.ytimg.com/vi/e6nRF2W5jMU/maxresdefault.jpg'
},
{
name: 'Có sao đâu ',
artist: 'DSK',
url: '../js/audio/Co-Sao-Dau-DSK.mp3',
cover: 'https://i.ytimg.com/vi/ETPA4BCBDjA/maxresdefault.jpg'
},
{
name: 'Thế hệ tao ',
artist: 'DSK',
url: '../js/audio/TheHeTao-DsKKraziNoyze-4762260.mp3',
cover: 'https://i.ytimg.com/vi/CM3F58zsSkc/maxresdefault.jpg'
},
{
name: 'Chưa bao giờ ',
artist: 'DSK',
url: '../js/audio/Chua-Bao-Gio-DSK.mp3',
cover: 'https://i.ytimg.com/vi/2xdF-amp8UI/maxresdefault.jpg'
},
{
name: 'Ai mà biết được ',
artist: 'DSK',
url: '../js/audio/Ai_Ma_Biet_Duoc_-_Dsk.mp3',
cover: 'https://i.ytimg.com/vi/Koe0hwEqzm8/maxresdefault.jpg'
},
] 

});