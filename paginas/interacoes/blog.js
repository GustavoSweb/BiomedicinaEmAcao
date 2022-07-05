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

$(window).scroll(function(){
  var sc = $(this).scrollTop()
  var maior = 1-((sc -1170)/100)
  var texto4 = $(".texto4")
  if(sc > 1170){
  texto4.css("opacity", maior)
  }
})
