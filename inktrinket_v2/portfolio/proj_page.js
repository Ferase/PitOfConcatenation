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

// Create reel item
const createImageReel = async (image, title) => {
    var li = document.createElement("li");

    li.innerHTML = `
        <div class="reel-item">
            <img class="reel-thumb" src="img/${image}" alt="${title}">
        </div>
    `;
    imageReel.appendChild(li);
}




// --- Onload ---

window.addEventListener("load", async () => {

    await processJSON();

});