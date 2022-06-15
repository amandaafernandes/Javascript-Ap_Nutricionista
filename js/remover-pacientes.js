var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fedeOut");

    setTimeout(function(){ 
        event.target.parentNode.remove();
    }, 500);
});

/*
ACIMA A FORMA RESUMIDA
var alvoEvento = event.target;
var paiDoAlvo = alvoEvento.parentNode; // tr = paciente == remover
*/
