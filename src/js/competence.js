document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            links.forEach(link => {
                link.classList.remove('active');
  
            });

            
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
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/ps.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/js.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/r.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/js.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/hc.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/c4.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/f.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/hc.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/java.mp4)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/b.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/p.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/sw.png)",
    "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)) , url(/src/comptence/g.png)",

];

const expe = [
    null, 
    "7 ans",
    "2 ans",
    "1 ans",
    "1 ans",
    "1 ans",
    "7 ans",
    "1 ans",
    "5 ans",
    "3 ans",
    "0 ans",
    "2 ans",
    "1 ans",
    "1 ans",

];
const nombrep = [
    null, 
    "∞",
    "5",
    "1",
    "1",
    "1",
    "∞",
    "∞",
    "∞",
    "3",
    "0",
    "1",
    "1",
    "∞",

];

const title = [
    null, 
    "PHOTOSHOP",
    "JAVASCRIPT",
    "REACTJS",
    "NEXTJS",
    "GSAP",
    "CINEMA4D",
    "FIGMA",
    "HTML CSS",
    "JAVA",
    "BLENDER",
    "PHYTON",
    "SWIFT",
    "GITHUB",

];
const tTEXT = [
    null, 
    "c'est une application d'adobe creative cloud que j'utilise en partie pour produire des élément au format png que je peut ensuite reutiliser dans mes different design de site web ou autre par exemple : des logo. j'utilse aussi premiere pro",
    "c'est en effet un des language de développement que j'utilise le plus meme si j'utilise d'autre framework. javascript est multi usage et je peut l'utiliser pour plein de chose: animation,etc",
    "c'est un framework de javascript énormement aprecier de m'as personne pour toute les chose qu'il permet, développer avec react est un bonheur.",
    "C'est un framerwork de React qui rend encore plus simple l'utilisation tous est claire et facile à comprendre, je l'ai découvert quand j'ai du developper l'application Ecoreport j'ai hate d'aborder un nouveau project avec ce framework",
    "C'est un framerwork de javascript qui permet de sublimer nos site web avec des animation cela me permet de m'etendre sur mon cote creative coder",
    "C'est une application de modlisation 3d que j'ai utiliser toute m'as jeunesse me permettend de faire des miniature,banniere,thumnail,logo pour different createur de contenu et different jeu comme : Minecraft, Fornite, Call of Duty",
    "C'est un application web qui me permet de creer des maquette animer,interactive de mes site web ou autre, je passe des journée à modéliser l'UI/UX des different projet que j'ambicionne de commencer",
    "Ce sont les languages que j'utilisent le plus et par ou toute personne ambicionnant de commencer le code est passer. je concidère c'est deux languages commme acquis ",
    "c'est un language de back end qui me permet de gerer le back end des mes application web ou de creer des application de bureau actuellement je ne l'utilse que dans le cadre scolaire",
    "C'est aussi une application de modélisation 3d que je découvre actuellement",
    "C'est un language de back end que je redcouvre en effet j'en avait pratique pendant mes années de baccalaureat en math experte par la suite les programme de la licence informatique et du bts n'en contenais pas. actuellemnt je recommence à utiliser et creer de multiple project",
    "C'est un lanugage pour creer des application IOS que je découvre dans les multiple projet que j'ai démarer",
    "c'est un un site web et une application qui est extremement utile en effet il me permet de versionner mes projet, héberger mes petit projet que je souhaite partager, travailler en equipe de facon organiser sans perdre du temps sur la transmission de code à c'est collaborateur.",

];


function changeImg(id) {
    const tittle = title[id];
    const text = tTEXT[id];
    const color = test[id];
    const experience = expe[id];
    const nombreprojet = nombrep[id];
    if (color) {
       const cineElement = document.querySelector(".cine");
       
       
       // cineElement.style.backgroundImage = color;
        cineElement.style.color = "#EFEBE7" ;

        document.getElementById("xp").innerHTML = "ANNEE D'EXPERIENCE : "+experience ;
        document.getElementById("np").innerHTML = "NOMBRE DE PROJET : "+ nombreprojet;
        document.getElementById("ti").innerHTML = tittle +" :" ;
        document.getElementById("text").innerHTML = text;

    }

}