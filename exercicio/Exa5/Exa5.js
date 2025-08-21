const input=parseInt(window.prompt("ate onde vai ir a soma?"));
let sum=0
let sequence='1'

for(let i=0;i<input;i++){
  sum+=parseInt(sequence);
  sequence+='1'
}

document.writeln(`o resultado da soma é ${sum}`);
