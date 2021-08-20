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
name: ' Chạy Say Trong Cơn Xe (CHAYXETRONGCONSAY CHALLENGE)',
artist: '',
url: '../js/audio/ChaySayTrongConXe.mp3',
cover: 'https://i.ytimg.com/vi/X9WH391xJl0/maxresdefault.jpg'
},
{
name: 'Vương',
artist: '',
url: '../js/audio/Vuong.mp3',
cover: 'https://i1.sndcdn.com/artworks-000352969782-g0hl2f-t500x500.jpg'
},
{
name: 'Nói ',
artist: '',
url: '../js/audio/Noi.mp3',
cover: 'https://i.ytimg.com/vi/n0A28QAr50g/maxresdefault.jpg'
},
{
name: 'Anh biết',
artist: '',
url: '../js/audio/AnhBiet.mp3',
cover: 'https://hopamchuan.com/node/get_artist_image/nger'
},

] 

});