// Toggle Menu Button
let menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener("click", () => {
    document.getElementById("line1").classList.toggle("w-[25px]");
    document.getElementById("line1").classList.toggle("w-[25px]");
    document.getElementById("line1").classList.toggle("rotate-45");
    document.getElementById("line1").classList.toggle("translate-y-[0px]");
    document.getElementById("line1").classList.toggle("-translate-y-[8px]");

    document.getElementById("line2").classList.toggle("translate-x-[60px]");

    document.getElementById("line3").classList.toggle("w-[25px]");
    document.getElementById("line3").classList.toggle("w-[15px]");
    document.getElementById("line3").classList.toggle("rotate-[315deg]");
    document.getElementById("line3").classList.toggle("translate-y-[0px]");
    document.getElementById("line3").classList.toggle("translate-y-[8px]");
});

// Login And Register

