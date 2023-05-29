burger = document.querySelector('.burger');
nav = document.querySelector('nav');
ul= document.querySelector('ul');
burger.addEventListener('click',()=>{
   
    nav.classList.toggle('h-nav-resp');
    ul.classList.toggle('v-class-resp');
})