// --- Core stuff ---

const paginationNumbers = document.getElementById("pagination-numbers");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const paginatedList = document.getElementById("paginated-list");
const paginationLimit = 8;
var pageCount = 1;
var currentPage = 1;

var listItems;
var start_data = {};

// --- JSON and layout ---

// Create portfolio list item
const createPortfolioItem = (link, title) => {
    var li = document.createElement("li");
    li.innerHTML = `
        <a class="v-card" href="portfolio/${link}">
            <div class="v-card__img">
                <img src="portfolio/${link}/thumb.png" alt="${title}">
            </div>
            <h2>${title}</h2>
        </a>
    `;
    paginatedList.appendChild(li);
}

// Parse JSON
const processJSON = async() => {
    await fetch("./portfolio/main_portfolio.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {

            for (let [key, value] of Object.entries(data)) {
                start_data[key] = {
                    "title": data[key]["title"],
                    "tags": data[key]["tags"]
                }
            }

        })
        .catch((error) => 
            console.error("Unable to fetch data:", error));
}

// --- Page buttons ---

// Disable button function
const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

// Enable button function
const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

// Handle page button state (disabled/enabled at bounds)
const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

// HTML code to append to the numeric NAV
const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

// Append page numbers to array
const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

// Give the active page number the .active class
const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

// Set page logic
const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
        }
    });
};



// --- Search ---

const search = () => {
    paginatedList.innerHTML = ""
    
    let searchTerm = searchInput.value.trim().toLowerCase();
    let new_data = {};

    // 2. check: if input exists and if input is larger than 0
    if (searchTerm && searchTerm.trim().length > 0){

        for (let [key, value] of Object.entries(start_data)) {
            let queries = start_data[key]["tags"].concat([start_data[key]["title"]]);

            switch(queries.includes(searchTerm)){
                case true:
                    new_data[key] = {
                        "title": start_data[key]["title"],
                        "tags": start_data[key]["tags"]
                    }
                    break;
                default:
                    console.log(`Wanted any from ${start_data[key]["tags"]}, got ${searchTerm} instead`)
                    break;
            }
        }

        listItems = paginatedList.querySelectorAll("li");
        pageCount = Math.ceil(listItems.length / paginationLimit);

    } else {
        new_data = start_data;
    }

    for (let [key, value] of Object.entries(new_data)) {
        createPortfolioItem(key, new_data[key]["title"], new_data[key]["tags"]);
    }

};



// --- Onload ---

window.addEventListener("load", async () => {
    // Load JSON
    await processJSON();

    for (let [key, value] of Object.entries(start_data)) {
        createPortfolioItem(key, start_data[key]["title"], start_data[key]["tags"]);
    }

    const paginatedList = document.getElementById("paginated-list");
    listItems = paginatedList.querySelectorAll("li");
    pageCount = Math.ceil(listItems.length / paginationLimit);

    getPaginationNumbers();
    setCurrentPage(1);

    // Previous button event
    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    // Next button event
    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    // Number button events
    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });

    searchButton.addEventListener("click", () => {
        search();
    });
    searchInput.addEventListener("keypress", (e) => {
        switch(e.key){
            case "Enter":
                search();
                break;
            default:
                break;
        }
    });
});