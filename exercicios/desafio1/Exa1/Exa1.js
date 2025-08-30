let max=21;
let min=1;


const randInt=Math.floor(Math.random()*(max-min)+min);

let guess=-1;
const body=document.getElementsByTagName('body');
const item=document.createElement('p');
console.log(`o numero que voce quer chutar é ${randInt}`); //informacao para debug

while(guess != randInt){
guess = parseInt(window.prompt("qual valor do numero?"));
if(guess<randInt){
  item.innerText="voce errou para baixo<br>";
}else if(guess>randInt){
  item.innerText="voce errou para cima<br>";
}else{
  item.innerText="voce acertou parabens!!!!<br>";
}
body.append(item);
}
