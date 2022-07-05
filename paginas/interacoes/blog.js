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
