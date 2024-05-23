document.querySelector('.underline').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    var liMenu = document.querySelector('.underline');
    var h3Elements = document.querySelectorAll('.menu div h3');
    
    var liElements = document.querySelectorAll('nav ul li:nth-child(1)::before');
    var lidElements = document.querySelectorAll('nav ul li:nth-child(2)::before');
    if(menu.classList.contains('active')) {
        liMenu.textContent = 'MENU';
        h3Elements.forEach(function(h3, index) {
            h3.style.opacity = 1;
            h3.style.animation = 'reversehop 2s forwards cubic-bezier(0.19, 1, 0.22, 1) ' + (.7 + index * 0.25) + 's';
          
        });
        setTimeout(function() {
            menu.classList.remove('active');
            h3Elements.forEach(function(h3) {
                h3.style.animation = '';
                h3.style.opacity = 0;
            });
        }, 2320);
    } else {
        menu.classList.add('active');
        liMenu.textContent = 'X';
        h3Elements.forEach(function(h3, index) {
            h3.style.animation = 'hop 2s forwards cubic-bezier(0.19, 1, 0.22, 1) ' + (1.2 + index * 0.25) + 's';
        });
    }
});