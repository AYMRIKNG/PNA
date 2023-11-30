document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Retirer la classe "active" de tous les liens
            links.forEach(link => {
                link.classList.remove('active');
  
            });

            // Ajouter la classe "active" au lien cliqué
            this.classList.add('active');
           
        });
    });
});


let emp = [];
emp[1] = "/src/";
emp[2] = "/src/";
emp[3] = "/src/";
emp[4] = "/src/";
emp[5] = "/src/";
emp[6] = "/src/";
emp[7] = "/src/";
emp[8] = "/src/";
emp[9] = "/src/";
emp[10] = "/src/";
emp[11] = "/src/";
emp[12] = "/src/";
emp[13] = "/src/";

const test = [
    null, 
    "red",
    "darkblue",
    "orange",
    "pink",
    "chocolate",
    "brown",
    "yellow",
    "purple",
    "gray",
    "green",
    "blue",
    "lightgreen",
    "lightblue",

];

const expe = [
    null, 
    "4 ans",
    "2 ans",
    "3 ans",
    "1 ans",
    "5 ans",
    "6 ans",
    "1 ans",
    "2 ans",
    "3 ans",
    "9 ans",
    "5 ans",
    "1 ans",
    "2 ans",

];
const nombrep = [
    null, 
    "4",
    "5",
    "2",
    "1",
    "3",
    "2",
    "6",
    "8",
    "4",
    "7",
    "1",
    "2",
    "9",

];


function changeImg(id) {
    const color = test[id];
    const experience = expe[id];
    const nombreprojet = nombrep[id];
    if (color) {
        const cineElement = document.querySelector(".cine");
       
        cineElement.style.background = color;
        cineElement.style.color = "white" ;

        document.getElementById("xp").innerHTML = experience ;
        document.getElementById("np").innerHTML = nombreprojet ;

    }

}