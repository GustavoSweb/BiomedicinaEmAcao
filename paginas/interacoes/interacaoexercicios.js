

function escolherExercícios(){
  // pegando as opitions dos exercícios-->
  var items = [document.getElementById('Biome'),document.getElementById('Nano'),document.getElementById('Informacao')]
  var Assuntos = document.getElementById('Asuntos')
  function display(block, none1, none2){
    items[block].style.display = "block";
    items[none1].style.display = "none";
    items[none2].style.display = "none";
  }
  if(localStorage.selecao == "Biome"){
      
      display(0, 1, 2)
    }
  Assuntos.addEventListener('change', function(){
    escolhaFeita = this.value
    if(items[0].id === escolhaFeita){
      display(0, 1, 2)
  }else if(items[1].id == escolhaFeita){
    display(1, 0, 2)
  }else{
    display(2, 0, 1)
  }
  })
}
function Nanoexercicio2(){
  const Nanoquestoes = [document.getElementById('Nano1959'), document.getElementById('Nano1966'), document.getElementById('Nano1950'), document.getElementById('Nano1896')]
  for(i = 0; i < 4; i++){
  Nanoquestoes[i].addEventListener('change', function(){
    localStorage.respostaDaQuestao1 = this.value
    console.log(this.value)
  })
}
}
function exercicio1(){
  const questoes = [document.getElementById('S1950'), document.getElementById('S1866'), document.getElementById('S1966'), document.getElementById('S1970')]
  for(i = 0; i < 4; i++){
  questoes[i].addEventListener('change', function(){
    localStorage.respostaDaQuestao1 = this.value
  })
  }
}
function submit(){
  const envia = document.getElementById('envia')
  const apagar = document.getElementById('apagar')
  envia.addEventListener('click', function(){
    localStorage.selecao = "Biome";
  })
  
  apagar.addEventListener('click', function(){
    localStorage.clear()
    alert('O exercício foi reinicido!')
    location.reload()
    
  })
  // parte de Nanotecnologia
  const envia2 = document.getElementById('envia2')
  const apagar2 = document.getElementById('apagar2')
  envia2.addEventListener('click', function(){
    localStorage.selecao = "Nano";
  })
  
  apagar2.addEventListener('click', function(){
    localStorage.clear()
    alert('O exercício foi reinicido!')
    location.reload()
})
}
function color(certo, errado){
  const textoDasOpicoes1 = [document.getElementById('R1950'), document.getElementById('R1866'), document.getElementById('R1966'), document.getElementById('R1970')]
  textoDasOpicoes1[certo].style = "background-color: #1C00FF60; border-radius: 10px;"
  if(errado != undefined){
    textoDasOpicoes1[errado].style = "background-color: #FF000070; border-radius: 10px;"
  }
}
function resposta1(){
  
  if(localStorage.selecao == "Biome"){
    var model = document.getElementById('modal')
    var conteudoModel = document.getElementById('conteudoModal')
    model.classList.add('modal')
    conteudoModel.classList.add('conteudoModal')
    
    var conteudoModalClass = document.querySelector(".conteudoModal");
    conteudoModalClass.style.animation = ""
    setTimeout(() => conteudoModalClass.style.animation = "entraModal 2s  1s forwards")

    
    const questoes = [document.getElementById('S1950'), document.getElementById('S1866'), document.getElementById('S1966'), document.getElementById('S1970')]
    for(i = 0; i < 4; i++){
      questoes[i].setAttribute('disabled', 'disabled')
    }
  if(localStorage.respostaDaQuestao1 == "1950"){
      color(2, 0)
    }else if(localStorage.respostaDaQuestao1 == "1866"){
      color(2, 1)
    }else if(localStorage.respostaDaQuestao1 == "1966"){
      color(2)
    }else{
      color(2, 3)
    }
}
}
escolherExercícios()
exercicio1()
Nanoexercicio2()
submit()
resposta1()
