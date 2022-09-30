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
    a = 9.9;

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
    k = 0;

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
        j = 1;
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
        k = 0;
        if (sabor1escolhido == 'sabor 1' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor1escolhido != 'sabor 1' && tamanhoSalgada.value == 'p'){
            proximaPaginaSaborSalgada = 1;
        }
        if (sabor2escolhido == 'sabor 2' && tamanhoSalgada.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor2escolhido != 'sabor 2' && sabor1escolhido != 'sabor 1' && tamanhoSalgada.value == 'm') {
            proximaPaginaSaborSalgada = 1;
        }
        if (sabor3escolhido == 'sabor 3' && tamanhoSalgada.value != 'm' && tamanhoSalgada.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoSalgada.value == 'g') {
            proximaPaginaSaborSalgada = 1;
        } 
        if (sabor4escolhido == 'sabor 4' && tamanhoSalgada.value != 'm' && tamanhoSalgada.value != 'p' && tamanhoSalgada.value != 'g' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor4escolhido != 'sabor 4' && sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoSalgada.value == 'gg') {
            proximaPaginaSaborSalgada = 1;
        }
    }

    // valores para armazenar

    if (bordaSalgada == null && tamanhoSalgada.value != 'nenhuma' && j != 1) {
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

// DOCE

let totalDoce = 0;
let proximaPaginaTamanhoDoce, proximaPaginaBordaDoce, proximaPaginaSaborDoce;

// botao

btnDoce = document.querySelector("#doce-continuar");

// variaveis

let tamanhoDoce = document.querySelector("#tamanho-doce");
let sabor1doce = document.querySelector("#sabor1");
let sabor2doce = document.querySelector("#sabor2");
let sabor3doce = document.querySelector("#sabor3");
let sabor4doce = document.querySelector("#sabor4");
let bordaDoceSim = document.querySelector("#doce-sim");
let bordaDoceNao = document.querySelector("#doce-nao");
let subtotalDoce = document.getElementById("doce-subtotal");
let paginaDoce = document.querySelector("#doce");

// funcao disable

function imprimirDoce() {
    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); ;
}
let idoce, jdoce;

tamanhoDoce?.addEventListener('change', function(e) {
    
    totalDoce = 0;
    i = 0;
    bordaDoceSim.checked = false;
    bordaDoceNao.checked = false;


    if (bordaDoceSim.checked == true) {
        totalDoce += 9.9;
    }

    if (tamanhoDoce.value == 'p') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = true;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 44.9;
    } else if (tamanhoDoce.value == 'm') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 74.9;
    } else if (tamanhoDoce.value == 'g') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = false;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 94.9;
    } else if (tamanhoDoce.value == 'gg') {
        sabor1doce.disabled = false;
        sabor2doce.disabled = false;
        sabor3doce.disabled = false;
        sabor4doce.disabled = false;
        bordaDoceSim.disabled = false;
        bordaDoceNao.disabled = false;
        totalDoce = 124.9;
    } else {
        sabor1doce.disabled = true;
        sabor2doce.disabled = true;
        sabor3doce.disabled = true;
        sabor4doce.disabled = true;
        bordaDoceSim.disabled = true;
        bordaDoceNao.disabled = true;
        totalDoce = 0;
    }

    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 

})

// funcao mudar subtotal

bordaDoceSim?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    i = 0;
    a = 9.9;

    totalDoce += a;

    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    i++;
})

bordaDoceNao?.addEventListener('change', function(e) {
    e.preventDefault();

    let a = 0;
    a = 9.9

    if (i > 0) {
        totalDoce -= a;
    }

    subtotalDoce.innerHTML = totalDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
})

// funcao principal

btnDoce?.addEventListener('click', function(e) {

    e.preventDefault();

    j = 0;
    k = 0;

    // evitar repeticao
    
    totalDoce = 0;

    // selects

    let sabor1escolhido = sabor1doce.options[sabor1doce.selectedIndex].text;
    let sabor2escolhido = sabor2doce.options[sabor2doce.selectedIndex].text;
    let sabor3escolhido = sabor3doce.options[sabor3doce.selectedIndex].text;
    let sabor4escolhido = sabor4doce.options[sabor4doce.selectedIndex].text;
    let tamanhoDoceEscolhido = tamanhoDoce.options[tamanhoDoce.selectedIndex].value.toUpperCase();

    // radio

    let bordaDoce = document.querySelector('input[name="borda"]:checked');
    
    // variavel vazia

    let bordaDoceEscolhida = '';

    // somar ao total

    if (tamanhoDoce.value == '') {
        alert("Selecione o tamanho");
        j = 1;
    } else if (tamanhoDoce.value == 'p') {
        totalDoce += 44.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'm') {
        totalDoce += 74.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'g') {
        totalDoce += 94.9; 
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'gg') {
        totalDoce += 124.9;
        proximaPaginaTamanhoDoce = 1;
    } else if (tamanhoDoce.value == 'nenhuma'){
        proximaPaginaTamanhoDoce = 1;
        proximaPaginaSaborDoce = 1;
        proximaPaginaBordaDoce = 1;
    }

    // verificacao para continuar

    if (tamanhoDoce.value != 'nenhuma') {
        k = 0;
        if (sabor1escolhido == 'sabor 1' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor1escolhido != 'sabor 1' && tamanhoDoce.value == 'p'){
            proximaPaginaSaborDoce = 1;
        }
        if (sabor2escolhido == 'sabor 2' && tamanhoDoce.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor2escolhido != 'sabor 2' && sabor1escolhido != 'sabor 1' && tamanhoDoce.value == 'm') {
            proximaPaginaSaborDoce = 1;
        }
        if (sabor3escolhido == 'sabor 3' && tamanhoDoce.value != 'm' && tamanhoDoce.value != 'p' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoDoce.value == 'g') {
            proximaPaginaSaborDoce = 1;
        } 
        if (sabor4escolhido == 'sabor 4' && tamanhoDoce.value != 'm' && tamanhoDoce.value != 'p' && tamanhoDoce.value != 'g' && j != 1 && k == 0) {
            alert('Selecione o sabor');
            k = 1;
        } else if (sabor4escolhido != 'sabor 4' && sabor3escolhido != 'sabor 3' && sabor1escolhido != 'sabor 1' && sabor2escolhido != 'sabor 2' && tamanhoDoce.value == 'gg') {
            proximaPaginaSaborDoce = 1;
        }
    }

    // valores para armazenar

    if (bordaDoce == null && tamanhoDoce.value != 'nenhuma' && j != 1) {
        alert("Selecione a borda");
    } else if (bordaDoce == null && tamanhoDoce.value != ''){
        proximaPaginaBordaDoce = 1;
    } else if (bordaDoce.value == 'sim') {
        bordaDoceEscolhida = 'sim';
        totalDoce += 9.9;
        proximaPaginaBordaDoce = 1;
    } else if (bordaDoce.value == 'nao') {
        bordaDoceEscolhida = 'não';
        proximaPaginaBordaDoce = 1;
    } 

    // armazenar

    localStorage.setItem("sabor-1-doce", sabor1escolhido);
    localStorage.setItem("sabor-2-doce", sabor2escolhido);
    localStorage.setItem("sabor-3-doce", sabor3escolhido);
    localStorage.setItem("sabor-4-doce", sabor4escolhido);
    localStorage.setItem("total-doce", totalDoce);
    localStorage.setItem("tamanho-doce", tamanhoDoceEscolhido);
    localStorage.setItem("borda-doce", bordaDoceEscolhida);

    if (proximaPaginaTamanhoDoce == 1 && proximaPaginaBordaDoce == 1 && proximaPaginaSaborDoce == 1) {
        window.open('bebida.html', '_self');
    }
})
