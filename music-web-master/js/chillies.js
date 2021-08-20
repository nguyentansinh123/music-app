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
name: 'Mascara ',
artist: 'Chillies',
url: '../js/audio/Mascara.mp3',
cover: 'https://image3.tienphong.vn/w1000/Uploaded/2020/dr_ysleozyr/2020_03_18/chillies_cover_ceoi.jpg'
},
{
name: 'Cứ chill thôi',
artist: 'Chillies',
url: '../js/audio/CuChillThoi.mp3',
cover: 'https://hozomusicfestival.com/wp-content/uploads/2019/12/the-chillies.jpg'
},
{
name: 'Cho tôi đi theo ',
artist: 'Chillies',
url: '../js/audio/VungKiUc.mp3',
cover: 'https://gocvietstar.com/wp-content/uploads/2020/11/photo-1-1594467271639210290229.jpg'
},
{
name: 'Hay Lang Nghe',
artist: 'Chillies',
url: '../js/audio/HayLangNghe.mp3',
cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmSgEn5ukwY89gL0__7Xg22t6ty5zdsuNKQ&usqp=CAU'
},
{
name: 'Có em đời bỗng vui ',
artist: 'Chillies',
url: '../js/audio/CoEmDoiBongVui.mp3',
cover: 'https://revelogue.com/wp-content/uploads/2020/03/chillies_cu_chill_thoi-e1596726472823.jpg'
},

] 

});