
const activePage = window.location.pathname;
console.log(activePage);
const menuLinks = document.querySelectorAll('li a');

for (const link of menuLinks){
    if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`)
        link.classList.replace("menu-style","menu-active")
        
        // link.classList.remove('menu-style');
        // link.classList.toggle('menu-active');
      
    }


}