//valores combustiveis
const priceGas= 6.09;
const priceEthanol=5.20;
const priceDisel=5.80;
const combType= document.getElementById('combustivel');

function calcularValorAbastecimento(Price,Volume){
    return Price*Volume;
}


function atualizaValor(){
    let userOption=document.getElementById('combustivel').value;
    let pricePerLiter;
    let liters=document.getElementById('litros').value;
    switch(userOption){
        case "gasolina":
            pricePerLiter=priceGas;
            break;
        case "etanol":
            pricePerLiter=priceEthanol;
            break;
        case "disel":
            pricePerLiter=priceDisel;
            break;
        default:
            alert("NENHUMA OPCAO FOI ESCOLHIDA");
            return;
    }
    let res=document.getElementById('resultado');
    let br=calcularValorAbastecimento(pricePerLiter,liters);
    if (br<0) {
        res.textContent="insira um valor valido";
        return;
    }
    let format=br.toLocaleString("pt-br",{
        style: "currency",
        currency: "BRL"
    });
    res.textContent=format;
}


combType.addEventListener("change",atualizaValor);

let liters=document.getElementById('litros');
liters.addEventListener("input", atualizaValor);
