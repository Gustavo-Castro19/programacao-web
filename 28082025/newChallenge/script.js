const incrementer=document.getElementById('increment');
const decrementer=document.getElementById('decrement');
const num=document.getElementById('counter');

const form1=document.getElementById('form');
const new_paragraph=document.getElementById('text1');
const getCount=document.getElementById('text2');

const form2=document.getElementById('getElements');
const new_elements=document.getElementById('elements');
const resetter=document.getElementById('goblank');

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

form2.addEventListener('keydown', (event)=>{
  if (event.key=="Enter"){
    switch (parseInt(form2.value)){
      case 1:
        addParagraph();
        break;
      case 2:
        addList("ord");
        break;
      case 3:
        addList("unord");
        break;
      default:
        alert("erro:elemento ainda não disponivel ou tipo não especificado");
        break;
    }
    form2.value='';
  }
});

function addParagraph(){
  const p1=document.createElement('p');
  let text=prompt('o que voce vai escrever nesse paragrafo:');
  p1.textContent=text;
  new_elements.append(p1);
}

function addList(opt){
  let my_list;
  if(opt == "ord"){ 
    my_list=document.createElement('ol');
  }else if(opt=="unord"){ 
    my_list=document.createElement('ul');
  }else{ 
    alert("erro inesperado!!! verifique a funcao addList");
    return;
  }

  const myite=parseInt(prompt("quantos itens a lista vai ter?"));
  if(myite>0 && !isNaN(myite)){
    for(let i=0;i<myite;i++){
      let new_item=document.createElement('li');
      let content=prompt(`${i+1} item-`);
      new_item.innerHTML=content;
      my_list.append(new_item);
    }
    new_elements.append(my_list);
  }else{
    alert("voce nao especificou itens o suficiente");
    return;
  }
}

resetter.addEventListener('click', ()=>{
  num.innerHTML=0;
  form1.value='';
  new_paragraph.innerHTML='';
  getCount.innerHTML='';
  new_elements.innerHTML="";
});
