function somar(){
const n1=parseFloat(document.getElementById('num1').value);
const n2=parseFloat(document.getElementById('num2').value);

let sum=n1+n2;
let output=`<strong>Resultado:<strong> ${sum}`;

const res=document.getElementById('resultado').innerHTML=output;
}

const paragraph1=document.getElementById('paragrafo');


/*DEBUG INFO
console.log(paragraph1)
console.log(type paragraph1)
console.log(paragraph1.textContent)
*/

const paragraph2=document.getElementsByClassName('paragrafo');

/* DEBUG INFO
console.log(paragraph2);
for(let i=0;i<paragraph2.length;i++){
    console.log(paragraph2[i].textContent);
}
*/

const paragraph3=document.getElementsByTagName('p');

/*DEBUG INFO
console.log(paragraph3);
for(let i=0;i<paragraph3.length;i++){
    console.log(paragraph3[i].textContent)
}
*/

const destiny=document.getElementById('elemento');

const NewP=document.createElement("p");
NewP.textContent = "Paragrafo criado via javascript";
destiny.append(NewP);

const newUL=document.createElement('ul');
let items= ["item1","item2","item3","item4","item5"];
for(let i=0;i<items.length;i++){
    const newItem= document.createElement('li');
    newItem.textContent=items[i];
    newUL.append(newItem);
}
destiny.append(newUL);

const button=document.getElementById('button');

button.onclick=function(){
    alert("click");
    button.style.backgroundColor="red";
    button.textContent="voce clicou no botão";
};