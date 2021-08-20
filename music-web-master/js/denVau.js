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
name: ' Mười năm',
artist: 'Đen Vâu',
url: '../js/audio/MuoiNam.mp3',
cover: 'https://i.ytimg.com/vi/L0NZW6pgSLc/maxresdefault.jpg'
},
{
name: 'Một triệu like',
artist: ' Đen Vâu ',
url: '../js/audio/MotTrieuLike.mp3',
cover: 'https://i.ytimg.com/vi/oigiXW6XyCQ/maxresdefault.jpg'
},
{
name: 'Đưa nhau đi trốn ',
artist: ' Đen Vâu ',
url: '../js/audio/DuaNhauDiTron.mp3',
cover: 'https://i.ytimg.com/vi/5e7e_KZINA4/maxresdefault.jpg'
},
{
name: 'Trời hôm nay nhiều mây cực !',
artist: ' Đen Vâu ',
url: '../js/audio/TroiHomNayNhieuMayCuc.mp3',
cover: 'https://i.ytimg.com/vi/BHCU7CR_Unk/maxresdefault.jpg'
},
{
    name: 'Mơ',
    artist: ' Đen Vâu ',
    url: '../js/audio/Mo.mp3',
    cover: 'https://i1.sndcdn.com/artworks-000178815524-o74yrb-t500x500.jpg'
    },
] 

});