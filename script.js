let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#winner");
let msgcontainer=document.querySelector(".msg");
let turn1=true;
let count =0;
const arr1=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,1,0],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const boxDisabled=()=>{
   for(box of boxes){
      box.disabled=true;
   }
}
const enableboxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}

const resetGame=()=>{
   turn1=true;
   count=0;
   enableboxes();
   msgcontainer.classList.add("hide");
}
const showRs= (winner) => {
 msg.innerText=`Congrats, The winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 boxDisabled();

}
const checkWinner = ()=>{
   for(let pattern of arr1){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
     
   if(pos1 != ""  && pos2 != ""  && pos3 != "")
    {  if( pos1=== pos2 && pos2 === pos3)
       {
           console.log("winner",pos1);
           showRs(pos1);
       }
    
    }
   }
}
const gamedraw=()=>{
   msg.innerText=`game was a draw`;
   msgcontainer.classList.remove("hide");
   boxDisabled();
}
boxes.forEach((box) => {
  box.addEventListener("click", ()=>{
    console.log("box was clicked");
     if(turn1==true){
        box.innerText="O";
        turn1=false;
     }
     else{
        box.innerText="X";
        turn1=true;
     }
     box.disabled=true;
     count++;
     let isWinner=checkWinner();
     if(count===9 && !isWinner){
      gamedraw();
     }
  });

}
)
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);