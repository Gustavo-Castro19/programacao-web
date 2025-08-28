const incrementer=document.getElementById('increment');
const decrementer=document.getElementById('decrement');
const num=document.getElementById('counter');
const form1=document.getElementById('form');


incrementer.addEventListener("click", () =>{
    let plus=parseInt(num.textContent);
    plus++;
    num.innerHTML= plus; 
}
);

decrementer.addEventListener("click", ()=>{
    let minus=parseInt(num.textContent);

    if(minus==0){
    alert("impossivel decrementar abaixo de 0");
    return;
    }
    minus--;
    num.innerHTML=minus;
});

form1.addEventListener('keydown', (event)=>{
const new_paragraph=document.getElementById('text1');
if (event.key=="Enter"){
new_paragraph.innerHTML=form1.value;
form1.value='';
}
});


function charCount(paragraph){
    let p1= paragraph.textContent;
    p1.trim();
    let chars = Array.from(paragraph);
    let counter=0;
    for(con of chars){
        if(con !='') counter++;
    }
    return counter;
}