const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");
const newGameBtn = document.getElementById("new-btn");
const msgcontainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click" , ()=> {
        if(turnO){
            //player0
            box.innerText = "O";
            turnO=false;
        }
        else{
            //playerx
            box.innerText = "X";
            turnO = true;
           

        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner:", pos1);
            showWinner(pos1);
            return; 
        }
         if([...boxes].every(box => box.innerText !== "")){
            showDraw()
          }
    }
};
const showDraw=()=> {
    msgcontainer.classList.remove("hide")
    msg.innerText=`Match Draw , Play Again`
}
const showWinner=(winner)=>{
    msgcontainer.classList.remove("hide")
    msg.innerText=`congratulations,Winner is ${winner}`
    disableBoxes()
}

const disableBoxes = ()=>{
    for(box of boxes){
        box.style.pointerEvents = "none"
    }
}

const resetGame =()=>{
    msgcontainer.classList.add("hide")
    enableBoxes()
    turnO=true
}


const enableBoxes = ()=>{
    for(box of boxes){
        box.innerText=""
        box.disabled=false
         box.style.pointerEvents ="auto"
    }
}
newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)

