const apiKey = 'AIzaSyBfxY8iHihxgB__6qYQsnaKmQNO1gjNyFI';
const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&regionCode=IN&key=${apiKey}`;


async function getVideos() {
    try {
        let res = await fetch(apiUrl);
        let result = await res.json();
        // console.log(result.items)
        showVideos(result);
    } catch (err) {
        console.error(err)
    }
}

getVideos();


function showVideos(data) {
    let divMain = document.getElementById('videos-container');
    divMain.innerHTML = null;
    data.items.forEach((item) => {

        let div = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement('h3');
        let p = document.createElement('p')
        img.src = item.snippet.thumbnails.medium.url;
        title.textContent = item.snippet.title;
        p.textContent = item.snippet.thumbnails.channelTitle;
        div.append(img, title, p);
        let data = {
            videoId: item.id,
            snippet: item.snippet,


        }
        div.addEventListener('click', () => {
            localStorage.setItem('video', JSON.stringify(data));
            window.location.href = "./video.html"
        })
        divMain.append(div);
        div.classList.add('show');
        // console.log(data);
    });

}

// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API}'

async function search() {
    try {
        let query = document.getElementById('query').value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apiKey}`);

        let data = await res.json();
        // console.log(data)
        showVideos(data);

    } catch (err) {
        console.error(err)
    }



}
let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    search();

});

let query = document.getElementById('query');
query.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        search();
    }
});

