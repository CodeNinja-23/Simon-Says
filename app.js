let gameSeq=[];
let userSeq=[];

let btns = ["red","yellow","green","purple"];

let started=false;
let lvl= 0;


let h2 = document.querySelector("h2");

document.addEventListener("click", function()
{
    if(started==false)
        {
            console.log("STARTED");
            started = true;
            levelUp();
        }     
});


function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},350);
    }

    function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");},250)
    }

function levelUp( )
{
    userSeq =[];
    lvl++;
    h2.innerText = "Level" + " " + lvl;
    let randIdx = Math.floor(Math.random()*3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    console.log("Current Level",lvl);

    
    if(gameSeq[idx] === userSeq[idx])
        {
            if(userSeq.length === gameSeq.length){
                setTimeout(levelUp,1000);
            }
        }
        else{
            h2.innerHTML =`Game Over<br> <br> Your Score ${2*lvl} `;
            document.querySelector("body").style.color="red";
           
            
            
            
        }
}
function btnPress(){
    let btn =this;
    userFlash(btn);
     userColor = btn.getAttribute("id");
     userSeq.push(userColor)
     checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click", btnPress);
    }
       
