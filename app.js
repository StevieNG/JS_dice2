var currentScore1 = document.getElementById("current-score-1")
const roll =document.getElementById("roll");
var Score =0;
var player1Total=0;
var player2Total=0;
var whoseTurn=1;
var player1Score= 0;
var player2Score=0;
const hold =document.getElementById("hold");
const score1= document.getElementById("score-1")  
const score2= document.getElementById("score-2")  
var currentScore2 =document.getElementById("current-score-2")
const image =document.getElementById("image")
const p1Area = document.getElementById("player1Area")
const p2Area = document.getElementById("player2Area")
const reset = document.getElementById("reset");
var gameStatus = document.getElementById("status");



roll.style.display="none";
hold.style.display="none";
// if (whoseTurn=1)

gameStatus.innerHTML = "Let's play a game";

function resetGame(){
    player1Area.classList.add("active");
    player2Area.classList.remove("active");
    gameStatus.innerHTML = "Press 'roll' to roll dice ";
    image.innerHTML = '<img src = "img/dice1.png" >' ;
    
    roll.style.display="inline";
hold.style.display="inline";
reset.style.display="none";
player1Total=0;
player2Total=0;
score1.innerHTML = player1Total;
score2.innerHTML = player2Total;
player1Score=0;
currentScore1.innerHTML = player1Score;
player2Score=0;
currentScore2.innerHTML = player2Score;
}


roll.addEventListener('click',()=>{
    Score= Math.ceil(Math.random()*6);

    if (Score >3) {gameStatus.innerHTML = "nice roll!!";}
    else {gameStatus.innerHTML = "it's ok";}
    
    image.innerHTML = '<img src = "img/dice'+ Score+ '.png" >' ;

    console.log("Score: "+Score)

    if (Score ==1){
        if (whoseTurn==1){
            Score=0;
            player1Score=0
            whoseTurn=2;
            currentScore1.innerHTML = player1Score;
            gameStatus.innerHTML = "Rolled 1,  Player 2's Turn";
            player1Area.classList.remove("active");
            player2Area.classList.add("active");
            console.log("whoseTurn:" +whoseTurn);
        }

        else if (whoseTurn==2){
            Score=0;
            player2Score=0;
            whoseTurn=1;
            console.log("whoseTurn:" +whoseTurn);
            currentScore2.innerHTML = player2Score;
            gameStatus.innerHTML = "Rolled 1,  Player 1's Turn";
            player1Area.classList.add("active");
            player2Area.classList.remove("active");
        }

    }



  

    if (whoseTurn ==1){
        player1Score +=Score;
        currentScore1.innerHTML = player1Score;

            if ( player1Score+player1Total>=20){
                gameStatus.innerHTML = `Player 1 reached ${player1Score+player1Total} points Player 1 Win!!!!`;
                roll.style.display="none";
                hold.style.display="none";
                reset.style.display="inline";


            }

        
}

    else if (whoseTurn ==2){
        player2Score +=Score;
        currentScore2.innerHTML = player2Score;
                 if ( player2Score+player2Total>=20){
                    gameStatus.innerHTML = `Player 2 reached ${player2Score+player2Total} points Player 2 Win!!!!`;
                    roll.style.display="none";
                    hold.style.display="none";
                    reset.style.display="inline";
        }
        
    }


    
})


function onHold() {
    if (whoseTurn==1){
        player1Area.classList.remove("active");
        player2Area.classList.add("active");
        gameStatus.innerHTML = `Player 1 banked ${player1Score} points Player 2's turn `;
        player1Total += player1Score; 
        score1.innerHTML = player1Total;
        player1Score=0;
        currentScore1.innerHTML = player1Score;

        whoseTurn=2;
        
        // console.log("whoseTurn:" +whoseTurn)
    }

    else if (whoseTurn==2){
        player1Area.classList.add("active");
        player2Area.classList.remove("active");
        gameStatus.innerHTML = `Player 2 banked ${player2Score} points Player 1's turn `;
        player2Total += player2Score; 
        score2.innerHTML = player2Total;
        player2Score=0;
        currentScore2.innerHTML = player2Score;
        whoseTurn=1;
    
        // console.log("whoseTurn:"+whoseTurn)
    }

}

hold.onclick = onHold;
reset.onclick = resetGame;

// hold.addEventListener('click',()=>{
//     // if (whoseTurn==1){
//     //     player1Score += runningTotal; 
//     //     score1.innerHTML = player1Score;
//     //     runningTotal=0;
//     //     whoseTurn=2;

//     //     console.log(whoseTurn)
//     // }

//     // else if (whoseTurn==2){
//     //     player2Score += runningTotal; 
//     //     score2.innerHTML = player2Score;
//     //     runningTotal=0;
//     //     whoseTurn=1;
//     //     console.log(whoseTurn)
//     // }


// } )

