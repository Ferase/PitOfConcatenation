// Get user theme settings saved by the site (if they exist)
var theme = localStorage.getItem("theme");

// Set the user's color scheme
function getColorScheme(){
    if(theme !== null){ // If user has visited prior
        document.documentElement.setAttribute("data-theme", theme);
        return;
    }

    // Check user system preference, then set accordingly
    if(prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches){
        theme = "dark"
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

getColorScheme() // Run before page draws

// On page load, check the checkbox if the user prefers dark mode and then add a listener for the checkbox
window.onload = function applyCheck(){
    if(theme === "dark"){
        document.getElementById("night-light").checked = true
    }

    // Toggle dark mode via the night light
    var checkbox = document.getElementById("night-light");
    
    var v_checkbox = document.getElementById("night-light-label");
    v_checkbox.style.backgroundImage = `url(img/night_light/nl_${theme}.png)`;

    v_checkbox.addEventListener("mousedown", function() {
        this.classList.add("pulldown");
    });
    v_checkbox.addEventListener("mouseup", function() {
        this.classList.remove("pulldown");
        if(checkbox.checked){
            theme = "light";
        }
        else{
            theme = "dark";
        }
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        v_checkbox.style.backgroundImage = `url(img/night_light/nl_${theme}.png)`;
    });
}