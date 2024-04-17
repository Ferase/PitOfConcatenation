// Get user color scheme preferences and set theme first
window.onload = function getColorScheme(){
    var theme = localStorage.getItem("theme");
    if (theme !== null){
        document.documentElement.setAttribute("data-theme", theme);
        return;
    }
    if (prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        return;
    }
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "light");
}

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