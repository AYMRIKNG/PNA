
    let mainColor = localStorage.getItem('mainColor');
    let secondeColor = localStorage.getItem('secondeColor');
    if (mainColor && secondeColor) {
        document.documentElement.style.setProperty('--main-color', mainColor);
        document.documentElement.style.setProperty('--seconde', secondeColor);
    }

    function swapColors() {
        let rootStyle = getComputedStyle(document.body);
        let mainColor = rootStyle.getPropertyValue('--main-color');
        let secondeColor = rootStyle.getPropertyValue('--seconde');


        document.documentElement.style.setProperty('--main-color', secondeColor);
        document.documentElement.style.setProperty('--seconde', mainColor);
        var iframe = document.getElementById('hor');
    iframe.src = iframe.src;
       

    
            var i = document.getElementById('sun');

            if(i.classList.contains("fa-sun")){
                i.classList.replace("fa-sun","fa-moon") 
            }else if("fa-moon"){
                i.classList.replace("fa-moon","fa-sun") 
            }
          
        

        // Enregistrer les couleurs dans le stockage local
        localStorage.setItem('mainColor', secondeColor);
        localStorage.setItem('secondeColor', mainColor);
    }

    // Au chargement de la page, définir la couleur de fond à partir du stockage loc