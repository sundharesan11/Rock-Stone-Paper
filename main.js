let choices=["rock","paper","scissors"];
let winners=[];
function startGame()
{
    let imgs=document.querySelectorAll("img"); 
    imgs.forEach((img) =>img.addEventListener("click",()=>{
        if(img.id)
        {
            playround(img.id);
        }
    }) 
        
    );
}
function restartgame()
{
    winners=[];
    document.querySelector(".playerscore").textContent="Your score: 0";
    document.querySelector(".computerscore").textContent="Computer score:0";
    document.querySelector(".tie").textContent="Tie:0";
    document.querySelector(".winner").textContent="";
    document.querySelector(".playerchoice").textContent="";
    document.querySelector(".computerchoice").textContent="";
    document.querySelector(".reset").style.display="none";
}
function  computerselection()// to return computer selction
{
    let choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choice}`).classList.add("active");
    setTimeout(()=>{document.querySelector(`.${choice}`).classList.remove("active");},700);
    return choice;
}

function playround(playerchoice)
{
    let wins=checkwins();
    if(wins>=5)
    {
        return;
    }
    let computerchoice=computerselection();
    let winner=checkwinner(playerchoice,computerchoice);
    winners.push(winner);
    tallywins();
    displayround(playerchoice,computerchoice,winner);
    wins=checkwins();
    if(wins==5)
    {
        displayend();
    }
    
}
function displayend()
{
    const pwins =winners.filter((item) =>item == "player").length;
    if(pwins==5)
    {
        document.querySelector('.winner').textContent=`Congrats! you won 5 times`;
    }
    else{
        document.querySelector('.winner').textContent=`Sorry! computer won 5 times`;
    }
    document.querySelector('.reset').style.display="flex";
}
function displayround(p,c,w)
{
    document.querySelector(".playerchoice").textContent=`You chose:${p.charAt(0).toUpperCase()+ p.slice(1)}`;
    document.querySelector(".computerchoice").textContent=`Computer chose:${c.charAt(0).toUpperCase() + c.slice(1)}`;
    roundresults(w);//to display round winners
}
function roundresults(winner)
{
    if(winner=="player")
    document.querySelector(".winner").textContent=`Round result:Player won`;
    else if(winner=="computer")
    document.querySelector(".winner").textContent=`Round result:Computer won`;
    else
    document.querySelector(".winner").textContent=`Round result:Tied`;

}
function tallywins()
{
    const pwins =winners.filter((item) =>item == "player").length;
    const cwins=winners.filter((item)=>item=="computer").length;
    const ties =winners.filter((item)=>item=="tie").length;
    document.querySelector(".playerscore").textContent=`Your score : ${pwins}`;
    document.querySelector(".computerscore").textContent=`Computer score : ${cwins}`;
    document.querySelector(".tie").textContent=`Rounds tied : ${ties}`;
}

function checkwins()
{
    const pwins =winners.filter((item) =>item == "player").length;
    const cwins=winners.filter((item)=>item=="computer").length;
    return Math.max(pwins,cwins)
}

function checkwinner(x,y) // to check the winner
{
    if((x=="rock"&&y=="scissors")||
    (x=="paper"&&y=="rock")||
    (x=="scissors"&&y=="paper"))
    {
        return "player";
    }
    else if(x==y)
    {
        return "tie";
    }
    else
    return "computer";
}

function setwins()
{
    const pwins =winners.filter((item) =>item == "player").length;
    const cwins=winners.filter((item)=>item=="computer").length;
    const ties =winners.filter((item)=>item=="tie").length;
}
startGame();