//  BEBIDA

// botao

let bebidaBtn = document.querySelector("#bebida-continuar");

// variaveis

let soft = document.querySelector("#soft");
let alcoolica = document.querySelector("#alcoolica");

// funcoes disable

soft.addEventListener("change", function(e) {
    e.preventDefault();

    let tamanho1 = document.querySelector("#tamanho1");
    let tamanho2 = document.querySelector("#tamanho2");
    let tamanho3 = document.querySelector("#tamanho3");

    if (soft.options[soft.selectedIndex].value == "nenhuma") {
        tamanho1.disabled = true;
        tamanho2.disabled = true;
        tamanho3.disabled = true;
    } else {
        tamanho1.disabled = false;
        tamanho2.disabled = false;
        tamanho3.disabled = false;
    }
});

alcoolica.addEventListener("change", function(e) {
    e.preventDefault();

    let tamanho4 = document.querySelector("#tamanho4");

    if (alcoolica.options[alcoolica.selectedIndex].value == "nenhuma") {
        tamanho4.disabled = true;
    } else {
        tamanho4.disabled = false;
    }
});

// funcao principal

bebidaBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // puxando valores quando o botao é clicado

    // selects
    let softEscolhida = soft.options[soft.selectedIndex].text;
    let alcoolicaEscolhida = alcoolica.options[alcoolica.selectedIndex];

    // radios
    let tamanhoSoft = document.querySelector('input[name="tamanho-soft"]:checked');
    let tamanhoAlcoolica = document.querySelector('input[name="tamanho-alcoolica"]:checked');

    // variaveis vazias

    let tamanhoSoftEscolhido = "";
    let tamanhoAlcoolicaEscolhido = "";
    let bebidaAlcoolicaEscolhida = "";
    let proximaPaginaSoft = "";
    let proximaPaginaAlcoolica = "";
    let alerta = "";

    // definindo como salvar cada valor

    // soft

    if (tamanhoSoft == null) {
        alert("Selecione o tamanho da bebida");
        alerta = 1;
    } else if (tamanhoSoft.value =="600") {
        tamanhoSoftEscolhido = "600mL";
        proximaPaginaSoft = 1;
    } else if (tamanhoSoft.value == "lata") {
        tamanhoSoftEscolhido = "lata";
        proximaPaginaSoft = 1;
    } else if (tamanhoSoft.value == "2") {
        tamanhoSoftEscolhido = "2L";
        proximaPaginaSoft = 1;
    } 

    // alcoolica

    if (alcoolicaEscolhida.value == "cerveja") {
        bebidaAlcoolicaEscolhida = "cerveja";
    } else if (alcoolicaEscolhida.value == "ice") {
        bebidaAlcoolicaEscolhida = "smirnoff ice";
    } else if (alcoolicaEscolhida.value == "beats") {
        bebidaAlcoolicaEscolhida = "skol beats";
    }

    if (tamanhoAlcoolica == null) {
        if (alerta != 1) {
            alert("Selecione o tamanho da bebida");
        }
    } else if (tamanhoAlcoolica.value == "long") {
        tamanhoAlcoolicaEscolhido = "long neck";
        proximaPaginaAlcoolica = 1;
    }

    // armazenando selecoes no local storage
    console.log(softEscolhida);
    console.log(tamanhoSoftEscolhido);
    console.log(bebidaAlcoolicaEscolhida);
    console.log(tamanhoAlcoolicaEscolhido);

    localStorage.setItem("soft", softEscolhida);
    localStorage.setItem("tamanhoSoft", tamanhoSoftEscolhido);
    localStorage.setItem("alcoolica", bebidaAlcoolicaEscolhida);
    localStorage.setItem("tamanhoAlcoolica", tamanhoAlcoolicaEscolhido);

    // definindo quando vai para a pagina seguinte

    if (proximaPaginaSoft == 1 && proximaPaginaAlcoolica == 1) {
    // window.open("dados.html", "_self");
    }
})

