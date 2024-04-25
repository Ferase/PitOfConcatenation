const portfolioGallery = document.getElementById("grid-main__hero-gallery");
const heroVideo = document.getElementById("hero-video");
const heroImage = document.getElementById("hero-image");
const imageReel = document.getElementById("image-reel");

var youtubeBase = "https://www.youtube.com/embed/"
var reelItems;

// Parse JSON
const processJSON = async() => {
    await fetch("./data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            for(let i = 0; i < data["videos"].length; i++){
                createReelVideo(data["videos"][i]);
            };
            for(let j = 0; j < data["images"].length; j++){
                createReelImage(data["images"][j]["image"], data["images"][j]["title"]);
            };
        })
        .catch((error) => 
            console.error("Unable to fetch data:", error));
}

// Create reel item
const createReelVideo = async (video) => {
    var li = document.createElement("li");

    li.innerHTML = `
        <div class="reel-item" data-video="${video}" onclick="setYoutubeVideo(this)">
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



// --- Onload ---

window.addEventListener("load", async () => {
    await processJSON();
});