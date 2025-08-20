let max=21;
let min=1;


const randInt=Math.floor(Math.random()*(max-min)+min);

let guess=-1;

console.log(`o numero que voce quer chutar é ${randInt}`); //informacao para debug

while(guess != randInt){
guess = parseInt(window.prompt("qual valor do numero?"));
if(guess<randInt){
document.writeln("voce errou para baixo" );
}else if(guess>randInt){
  document.writeln("voce errou para cima");
}else{
  document.writeln("voce acertou parabens!!!!");
}
}
