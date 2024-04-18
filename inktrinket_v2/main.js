// Get user color scheme preferences and set theme first
// window.onload = function getColorScheme(){
// }

function getColorScheme(){
    var theme = localStorage.getItem("theme");
    if (theme !== null){ // If user has visited prior
        document.documentElement.setAttribute("data-theme", theme);
        if(theme === "dark"){ // Check checkbox if they prefer dark mode
            document.getElementById("night-light").checked = true
        }
        return;
    }
    if (prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches){ // If user has prefers dark mode
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("night-light").checked = true
        return;
    }
    // Define light theme and set otherwise
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "light");
}

getColorScheme()

// Toggle dark mode via the night light
var checkbox = document.getElementById("night-light");
checkbox.addEventListener("change", function() {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});