const pedra=1;
const papel=2;
const tesoura=3;

let userOption=parseInt(window.prompt("digite 1 para pedra, 2 para papel, e 3 para tesoura"));
let comOption=Math.floor(Math.random()*(tesoura-pedra)+pedra);

let win=(userOption==papel && comOption==pedra) || 
        (userOption==pedra && comOption==tesoura)||
        (userOption==tesoura && comOption==papel);

let draw=(userOption==comOption)


if(win){
  console.log("voce venceu!!!");
}else if(draw){
  console.log("houve um empate!!");
}else{
  console.log("voce perdeu");
}
