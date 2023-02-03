let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// cyv 


const generateTarget = () => {

    return Math.floor(Math.random() * 10);


}


const compareGuesses = (humaG, computerG, targetG) => {
    const human = Math.abs(humaG - targetG);
    const computer = Math.abs(computerG - targetG);
    return human <= computer;

}



const updateScore = (winnerA) => {
   
if(winnerA ==='human'){
    humanScore +=1;

}else if (winnerA ==="computer"){
    computerScore +=1 

}
   

     
}

const advanceRound = () => {
   currentRoundNumber +=1;
}

//console.log(generateTarget()); testing my method 

//ycv 
