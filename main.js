/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}
var botao = document.getElementById("butaoDoParticipante");
var Modal = document.getElementById('modal');
var kick = document.querySelector('.kickmodal')
var kick2 = document.querySelector('.kickmodal2')
botao.addEventListener('click', function(){
    Modal.style.display = "block";
    Modal.style.animation= "";
    setTimeout(() => Modal.style.animation = "animacaoclick 1s forwards");
})
kick.addEventListener('click', function(){
  Modal.style.display = "none";
})
kick2.addEventListener('click', function(){
  Modal.style.display = "none";
})
// essa parte e da navegação do site(menu)-->c
var ids = ['link1']
var kickLinks = document.querySelector('#kickLinks')
var JsAtivador = document.querySelector('.JsAtivador')
var Links = document.getElementById('Links')
var conteudoDosLinks = document.querySelector("#conteudoDosLinks")
var textosLinks = document.querySelectorAll(".textoLinks")

JsAtivador.addEventListener('click', function(){
  Links.style.display = "block"
  
  JsAtivador.style.animation = "";
  setTimeout(() => JsAtivador.style.animation = "Menuicone 2s forwards")
  
  conteudoDosLinks.style.animation= "";
  setTimeout(() => conteudoDosLinks.style.animation = "LinksAnimacao 1s forwards");
  
  kickLinks.style.display = "block";
})
kickLinks.addEventListener('click', function(){
  Links.style.display = "none";
  JsAtivador.style.animation = "";
  setTimeout(() => JsAtivador.style.animation = "MenuiconeKick 2s forwards")
  })
