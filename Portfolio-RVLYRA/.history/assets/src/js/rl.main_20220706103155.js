const splash = document.querySelector('.splash');

document.addEventListener(DOMContentLoaded, (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    })
});



const header = document.querySelector('.header');
window.onscroll = function (){
    var top = window.scrollY;
    // console.log(top);
    if (top >= 50)
        header.classList.add('active')
    else 
        header.classList.remove('active');

}










const ano = document.getElementById("ano");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();