const profile = document.querySelector('#id_email');
const desktopMenu = document.querySelector('.desktop-menu');

profile.addEventListener('click',toggleDesktopMenu);


function toggleDesktopMenu(){
    console.log("aquoi tyoy")
    desktopMenu.classList.toggle('inactive');
}
console.log(desktopMenu);