const darkToggle = document.getElementById('toggle-dark')
const navbarBtn = document.getElementById('toggleMenu')
const navMenu = document.getElementById('mobileNavbar')
const closeMenu = document.getElementById('closeMenu')

window.onload = checkMode;

function checkMode() {
    if (localStorage.getItem("theme") === "dark"){
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
};

darkToggle.addEventListener('click', (event) =>{
    event.preventDefault();
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.className === "dark") {
      localStorage.setItem("theme", "dark");
    }else {
      localStorage.setItem("theme", "white");
    }
});


navbarBtn.addEventListener('click', () => {
    mobileNavbar.style.display = "flex"
    document.body.style.overflow = "hidden"
});

closeMenu.addEventListener('click', ()=>{
    mobileNavbar.style.display = "none"
    document.body.style.overflow = "auto"
});

