


document.getElementById("wood").onclick=clickWood;
document.getElementById('mixed').onclick=clickMixed;
document.getElementById('art').onclick=clickArt;
document.getElementById('merlin').onmouseover=merlinAppears;
document.getElementById('merlin').onmouseout=merlinDisappears;



function clickWood (){
   let x= document.getElementById('wood-info');
   if(x.style.display === "block"){
     x.style.display='none';
     document.getElementById('wood').innerHTML='show';
   }else {
     x.style.display='block';
     document.getElementById('wood').innerHTML='hide';
 }
} 

function clickMixed (){
    let x= document.getElementById('mixed-info');
    if(x.style.display === "block"){
      x.style.display='none';
      document.getElementById('mixed').innerHTML='show';
    }else {
      x.style.display='block';
      document.getElementById('mixed').innerHTML='hide';
   }
}

function clickArt(){
  let x= document.getElementById('art-info');
    if(x.style.display === "block"){
      x.style.display='none';
      document.getElementById('art').innerHTML='show';
    } else {
      x.style.display='block';
      document.getElementById('art').innerHTML='hide';
   }
}


function teaInfo () {
 let x= document.getElementById('tea-info');
   if(x.style.display === "block"){
     x.style.display='none';
     document.getElementById('tea').innerHTML='show';
   }else {
     x.style.display='block'
     document.getElementById('tea').innerHTML='hide';
}
 } 

 function merlinAppears (){
    document.getElementById('merlin').src="images/merls2.png";
   

 }
 function merlinDisappears (){
    document.getElementById('merlin').src="images/sand24.jpg";
 }
 
