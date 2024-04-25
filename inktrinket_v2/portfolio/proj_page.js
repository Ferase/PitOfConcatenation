const portfolioGallery = document.getElementById("grid-main__hero-gallery");
const heroVideo = document.getElementById("hero-video");
const heroImage = document.getElementById("hero-image");
const imageReel = document.getElementById("image-reel");

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
            for(let i = 0; i < data.length; i++){
                createImageReel(data[i]["image"], data[i]["title"]);
            };
        })
        .catch((error) => 
            console.error("Unable to fetch data:", error));
}

const setYoutubeVideo = () => {

    heroImage.classList.add("disabled");

    heroVideo.attributes.

    heroVideo.classList.remove("disabled");

}

// Create reel item
const createImageReel = async (func, image, title) => {
    var li = document.createElement("li"),
        src = `img/${image}`;

    switch(func){
        case "setYoutubeVideo":
            src = "https://www.youtube.com/embed/";
            break;
        default:
            break;
    }

    li.innerHTML = `
        <div class="reel-item" onclick="${func}">
            <img class="reel-thumb" src="${src}" alt="${title}">
        </div>
    `;
    imageReel.appendChild(li);
}




// --- Onload ---

window.addEventListener("load", async () => {

    await processJSON();

});