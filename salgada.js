
// botao

let salgadaBtn = document.querySelector("#salgada-continuar"); 

// variaveis

let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");

// funcoes disable


// funcao principal
salgadaBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // valores quando o botao é clicado

    // radios
    let tamanhoSalgada = document.querySelector('input[name="tamanho-salgada"]:checked');

    // selects

    // variaveis vazias

    let tamanhoSalgadaEscolhido = "";
    let sabor1Escolhido = "";
    let sabor2Escolhido = "";
    let sabor3Escolhido = "";
    let sabor4Escolhido = "";

    tamanhoSalgada.addEventListener("change", function(e) {
        e.preventDefault();
        tamanhoSalgadaEscolhido = tamanhoSalgada.value;
    })
    // definindo como salvar cada valor

    if (tamanhoSalgada.value == "p") {
        tamanhoSalgadaEscolhido = "P";
    } else if (tamanhoSalgada.value == "m") {
        tamanhoSalgadaEscolhido = "M";
    } else if (tamanhoSalgada.value == "g") {
        tamanhoSalgadaEscolhido = "G";
    } else if (tamanhoSalgada.value == "gg") {
        tamanhoSalgadaEscolhido = "GG";
    } else if (tamanhoSalgada.value == "nenhuma") {
        tamanhoSalgadaEscolhido = "";
    }

    localStorage.setItem("tamanhoSalgada", tamanhoSalgadaEscolhido);
    
    // window.open("doce.html", "_self");
})

