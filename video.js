let data = JSON.parse(localStorage.getItem('video'));
// console.log(data);

function playVideo(data){
    let container = document.getElementById('play');
    let iframe = document.createElement('iframe');
    // console.log(data.videoId.videoId)
    iframe.src = `https://www.youtube.com/embed/${data.videoId.videoId}?autoplay=1`;
    iframe.height = "615";
    iframe.width= "960";
    iframe.setAttribute('allowfullscreen',true);
    container.appendChild(iframe);

}
playVideo(data)