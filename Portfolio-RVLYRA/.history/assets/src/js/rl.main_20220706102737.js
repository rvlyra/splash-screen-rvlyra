const header = document.querySelector('.header');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
}










const ano = document.getElementById("ano");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();