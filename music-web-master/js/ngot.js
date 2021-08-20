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
name: 'Lần cuối ',
artist: 'Ngọt',
url: '../js/audio/LanCuoi.mp3',
cover: 'https://i.ytimg.com/vi/yJbGCwT7Kms/maxresdefault.jpg'
},
{
name: 'Em dạo này',
artist: 'Ngọt',
url: '../js/audio/EmDaoNay.mp3',
cover: 'https://billboardvn.vn/wp-content/uploads/2020/03/ngot-TN.jpg'
},
{
name: 'Cho tôi đi theo ',
artist: 'Ngọt',
url: '../js/audio/ChoToiDiTheo.mp3',
cover: 'https://i.ytimg.com/vi/9qpM5H1lDFk/maxresdefault.jpg'
},
{
name: 'Xanh',
artist: 'Ngọt',
url: '../js/audio/Xanh.mp3',
cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7eqnAe2qN2qBEpXQeSbpGdvyQJtGkFURlA&usqp=CAU'
},
{
name: 'Cho ',
artist: 'Ngọt',
url: '../js/audio/Cho.mp3',
cover: 'https://i.ytimg.com/vi/RkXStDkolwE/maxresdefault.jpg'
},

] 

});