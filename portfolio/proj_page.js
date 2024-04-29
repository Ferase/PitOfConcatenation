const path = window.location.pathname;
const project = path.substring(path.lastIndexOf("/", path.lastIndexOf("/") - 1), path.lastIndexOf("/")).slice(1);

const portfolioGallery = document.getElementById("grid-main__hero-gallery");
const heroVideo = document.getElementById("hero-video");
const heroImage = document.getElementById("hero-image");
const imageReel = document.getElementById("image-reel");

const zoomImage = document.getElementById("image-zoom");
const blackoutBG = document.getElementById("blackout");

var youtubeBase = "https://www.youtube.com/embed/"
var reelItems = [];

// Parse JSON
const processJSON = async() => {
    await fetch("/portfolio/main_portfolio.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            let getVideos = data[project]["videos"];
            let getImages = data[project]["images"];

            getVideos.forEach((video) => {
                createReelVideo(video);
            });
            getImages.forEach((image) => {
                createReelImage(image["image"], image["title"]);
            });
        })
        .catch((error) => 
            console.error("Unable to fetch data:", error));
}

// Create reel item
const createReelVideo = async (video) => {
    var li = document.createElement("li");

    li.innerHTML = `
        <div class="reel-item" data-video="${video}" onclick="setYoutubeVideo(this)" data-invert-dark="true">
            <img class="reel-thumb" src="../../img/icons/thumb_video.png" alt="Video">
        </div>
    `;
    imageReel.appendChild(li);
}

// Create reel item
const createReelImage = async (image, title) => {
    var li = document.createElement("li");

    li.innerHTML = `
        <div class="reel-item" onclick="setImage(this)">
            <img class="reel-thumb" src="img/${image}" alt="${title}">
        </div>
    `;
    imageReel.appendChild(li);
}

const setYoutubeVideo = (item) => {
    heroVideo.src = `${youtubeBase}${item.getAttribute("data-video")}`;
    heroImage.classList.add("disabled");
    heroVideo.classList.remove("disabled");
}
const setImage = (item) => {
    heroVideo.classList.add("disabled");
    heroImage.src = item.children[0].getAttribute("src");
    heroImage.classList.remove("disabled");
}

const setZoom = (item) => {
    zoomImage.children[0].src = item.getAttribute("src");
    zoomImage.classList.add("zoomed");
    blackoutBG.classList.add("zoomed");
}
const removeZoom = (item) => {
    zoomImage.classList.remove("zoomed");
    blackoutBG.classList.remove("zoomed");
}

const setReelActive = (num) => {
    if(reelItems[num].getAttribute("onclick") === "setYoutubeVideo(this)"){
        setYoutubeVideo(reelItems[num]);
    } else {
        setImage(reelItems[num]);
    }
}



// --- Onload ---

window.addEventListener("load", async () => {
    await processJSON();
    reelItems = document.querySelectorAll(".reel-item");
    
    setReelActive(0);
});