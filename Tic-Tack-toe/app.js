let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const patterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    // msgContainer.classList.add("hide");
    msgContainer.classList.remove("show");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText="X";
            turnO =true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= " ";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `WOOHOOO , Winner is ${winner}`;
    // msgContainer.classList.remove("hide");
    msgContainer.classList.add("show");
    disabledBoxes();
};


const checkWinner = ()=>{
    for(let pattern of patterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" &&pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);