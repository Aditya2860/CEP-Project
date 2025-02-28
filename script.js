document.querySelector(".block").addEventListener("mouseover", function() {
    document.querySelector(".crop-pre").classList.add("hover-effect");
});
document.querySelector(".block").addEventListener("mouseout", function() {
    document.querySelector(".crop-pre").classList.remove("hover-effect");
});
