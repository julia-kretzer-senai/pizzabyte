// TODAS AS PÁGINAS

let total;

//  BEBIDA

// botao

let bebidaBtn = document.querySelector("#bebida-continuar");

// variaveis

let soft = document.querySelector("#soft");
let alcoolica = document.querySelector("#alcoolica");

// funcoes disable

soft?.addEventListener("change", function(e) {
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

alcoolica?.addEventListener("change", function(e) {
    e.preventDefault();

    let tamanho4 = document.querySelector("#tamanho4");

    if (alcoolica.options[alcoolica.selectedIndex].value == "nenhuma") {
        tamanho4.disabled = true;
    } else {
        tamanho4.disabled = false;
    }
});

// funcao principal

bebidaBtn?.addEventListener("click", function(e) {
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
    window.open("dados.html", "_self");
    }
})

// SALGADA

let totalSalgada = 0;
let proximaPaginaTamanhoSalgada, proximaPaginaBordaSalgada, proximaPaginaSaborSalgada;

// botao

btnSalgada = document.querySelector("#salgada-continuar");

// variaveis

let tamanhoSalgada = document.querySelector("#tamanho-salgada");
let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let bordaSalgadaSim = document.querySelector("#salgada-sim");
let bordaSalgadaNao = document.querySelector("#salgada-nao");
let subtotalSalgada = document.getElementById("salgada-subtotal");
let paginaSalgada = document.querySelector("#salgada");

// funcao disable

function imprimirSalgada() {
    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); ;
}
let i, j;

tamanhoSalgada?.addEventListener('change', function(e) {
    
    totalSalgada = 0;
    i = 0;
    bordaSalgadaSim.checked = false;
    bordaSalgadaNao.checked = false;


    if (bordaSalgadaSim.checked == true) {
        totalSalgada += 9.9;
    }

    if (tamanhoSalgada.value == 'p') {
        sabor1.disabled = false;
        // sabor1.required = true;
        sabor2.disabled = true;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 44.9;
    } else if (tamanhoSalgada.value == 'm') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 74.9;
    } else if (tamanhoSalgada.value == 'g') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = false;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 94.9;
    } else if (tamanhoSalgada.value == 'gg') {
        sabor1.disabled = false;
        sabor2.disabled = false;
        sabor3.disabled = false;
        sabor4.disabled = false;
        bordaSalgadaSim.disabled = false;
        bordaSalgadaNao.disabled = false;
        totalSalgada = 124.9;
    } else {
        sabor1.disabled = true;
        sabor2.disabled = true;
        sabor3.disabled = true;
        sabor4.disabled = true;
        bordaSalgadaSim.disabled = true;
        bordaSalgadaNao.disabled = true;
        totalSalgada = 0;
    }

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 

})

// funcao mudar subtotal

bordaSalgadaSim?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    i = 0;
    a = 9.9

    totalSalgada += a;

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    i++;
})

bordaSalgadaNao?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    a = 9.9

    if (i > 0) {
        totalSalgada -= a;
    }

    subtotalSalgada.innerHTML = totalSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
})

// funcao principal

btnSalgada?.addEventListener('click', function(e) {

    e.preventDefault();

    j = 0;

    // evitar repeticao
    
    totalSalgada = 0;

    // selects

    let sabor1escolhido = sabor1.options[sabor1.selectedIndex].text;
    let sabor2escolhido = sabor2.options[sabor2.selectedIndex].text;
    let sabor3escolhido = sabor3.options[sabor3.selectedIndex].text;
    let sabor4escolhido = sabor4.options[sabor4.selectedIndex].text;
    let tamanhoSalgadaEscolhido = tamanhoSalgada.options[tamanhoSalgada.selectedIndex].value.toUpperCase();

    // radio

    let bordaSalgada = document.querySelector('input[name="borda"]:checked');
    
    // variavel vazia

    let bordaSalgadaEscolhida = '';

    // somar ao total

    if (tamanhoSalgada.value == '') {
        alert("Selecione o tamanho");
    } else if (tamanhoSalgada.value == 'p') {
        totalSalgada += 44.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'm') {
        totalSalgada += 74.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'g') {
        totalSalgada += 94.9; 
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'gg') {
        totalSalgada += 124.9;
        proximaPaginaTamanhoSalgada = 1;
    } else if (tamanhoSalgada.value == 'nenhuma'){
        proximaPaginaTamanhoSalgada = 1;
        proximaPaginaSaborSalgada = 1;
        proximaPaginaBordaSalgada = 1;
    }

    // verificacao para continuar

    if (tamanhoSalgada.value != 'nenhuma') {
        if (sabor1escolhido == 'sabor 1') {
            alert('Selecione o sabor');
        } else if (sabor1escolhido != 'sabor 1'){
            proximaPaginaSaborSalgada = 1;
        }
        if (sabor2escolhido == 'sabor 2' && tamanhoSalgada.value != 'p') {
            alert('Selecione o sabor');
        } else if (tamanhoSalgada.value == 'p') {
            proximaPaginaSaborSalgada = 1;
        }
    }

    // valores para armazenar

    if (bordaSalgada == null && tamanhoSalgada.value != 'nenhuma') {
        alert("Selecione a borda");
    } else if (bordaSalgada == null && tamanhoSalgada.value != ''){
        proximaPaginaBordaSalgada = 1;
    } else if (bordaSalgada.value == 'sim') {
        bordaSalgadaEscolhida = 'sim';
        totalSalgada += 9.9;
        proximaPaginaBordaSalgada = 1;
    } else if (bordaSalgada.value == 'nao') {
        bordaSalgadaEscolhida = 'não';
        proximaPaginaBordaSalgada = 1;
    } 

    // armazenar

    localStorage.setItem("sabor-1-salgada", sabor1escolhido);
    localStorage.setItem("sabor-2-salgada", sabor2escolhido);
    localStorage.setItem("sabor-3-salgada", sabor3escolhido);
    localStorage.setItem("sabor-4-salgada", sabor4escolhido);
    localStorage.setItem("total-salgada", totalSalgada);
    localStorage.setItem("tamanho-salgada", tamanhoSalgadaEscolhido);
    localStorage.setItem("borda-salgada", bordaSalgadaEscolhida);

    if (proximaPaginaTamanhoSalgada == 1 && proximaPaginaBordaSalgada == 1 && proximaPaginaSaborSalgada == 1) {
        window.open('doce.html', '_self');
    }
})