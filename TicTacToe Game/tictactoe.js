let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgHide = document.querySelectorAll(".msg-hide");
let newBtn = document.querySelector("#new");
let turn0 = true;
let count = 0;
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if (box.innerText !== "") return;
        if (turn0 && box.innerText === "") {
           box.innerText = "0";
           turn0 = false;
        } else if (!turn0 && box.innerText === "") {
            box.innerText = "X";
            turn0 = true;
       }
       count++; 
       if (checkWinner()) return;  

        if (count === 9) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
  msg.innerText = `Game was Draw.`;
    msgHide.forEach((el) => {
        el.classList.remove("msg-hide");
    });
  boxes.forEach((box) =>{
      box.disabled = true;
  });
};
const showWinner = (winner) => {
     console.log("Congratulation", winner ,"is Winner");
      msgHide.forEach((el) => {
        el.classList.remove("msg-hide");
    });
    boxes.forEach((box) =>{
        box.disabled = true;
    });
}
const checkWinner = () =>{
    for(let i=0;i<winningCombos.length;i++){
        const [a,b,c] = winningCombos[i];
        let posVal1 = boxes[a].innerText;
        let posVal2 = boxes[b].innerText;
        let posVal3 = boxes[c].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != "" && posVal1===posVal2 && posVal2===posVal3){
            showWinner(posVal1);
            return true;
        }
    }
    return false;
};
resetBtn.addEventListener("click",() =>{
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    count = 0;
    msgHide.forEach((el) => {
        el.classList.add("msg-hide");
    });
});
newBtn.addEventListener("click",() =>{
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });
    count = 0;
    turn0 = true;
    msgHide.forEach((el) => {
        el.classList.add("msg-hide");
    });
});