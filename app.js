let gamSeq=[];
let userSeq=[];

let started=false;
let lvl= 0;

let h2 = document.querySelector("h2");
document.addEventListener("click", function()
{
    if(started==false)
        {
            console.log("STARTED");
            started = true;
        }
       
        levelUp();
})

function levelUp( )
{
    lvl++;
    h2.innerText = "Level" + " " + lvl;

}

       
    

    