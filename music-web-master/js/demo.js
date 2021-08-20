$(".album-poster").on('click', function(e){
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
artist: '',
url: '../js/audio/ImLangThoi.mp3',
cover: 'cover.jpg'
},
{
name: 'Điếu thuốc cuối',
artist: '',
url: '../js/audio/dieuthuoccuoidsk.mp3',
cover: 'cover.jpg'
},
{
name: 'Lớn Rồi ',
artist: '',
url: '../js/audio/Lon-Roi-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Ngày tàn ',
artist: '',
url: '../js/audio/Ngay-Tan-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Có sao đâu ',
artist: '',
url: '../js/audio/Co-Sao-Dau-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Thế hệ tao ',
artist: '',
url: '../js/audio/TheHeTao-DsKKraziNoyze-4762260.mp3',
cover: 'cover.jpg'
},
{
name: 'Chưa bao giờ ',
artist: '',
url: '../js/audio/Chua-Bao-Gio-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Ai mà biết được ',
artist: '',
url: '../js/audio/Ai_Ma_Biet_Duoc_-_Dsk.mp3',
cover: 'cover.jpg'
},
] 

});