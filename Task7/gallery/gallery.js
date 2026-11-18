var main = document.getElementById("m");
var small = document.getElementsByClassName("small");

for (let i = 0; i < small.length; i++) {

    small[i].addEventListener("click", function() {

        main.src = small[i].src;
        main.alt = small[i].alt;

    });

}
