const incrementer=document.getElementById('increment');
const decrementer=document.getElementById('decrement');
const num=document.getElementById('counter');
const form1=document.getElementById('form');
const resetter=document.getElementById('goblank');
const new_paragraph=document.getElementById('text1');
const getCount=document.getElementById('text2');

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
  if (event.key=="Enter"){
    new_paragraph.innerHTML=form1.value;
    form1.value='';
  }
});

form1.addEventListener('input', (event)=>{
  let counter=0;
  counter=charCount(counter);
  getCount.innerHTML=counter;
}
);

function charCount(counter){
  let p1= form1.value ;
  p1=p1.trim();
//console.log(p1)
  let chars = Array.from(p1);
//console.log(chars)
  for(let c of chars) if(c !=" ") counter++;
  return counter;
}

resetter.addEventListener('click', ()=>{
  num.innerHTML=0;
  form1.value='';
  new_paragraph.innerHTML='';
  getCount.innerHTML='';
});
