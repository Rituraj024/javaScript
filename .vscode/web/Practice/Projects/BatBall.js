
function computerSelection(){
  let computerChoice;
  console.log("Nitin");
  let randomNum = Math.random()*3;
    if(randomNum > 0 && randomNum <= 1){
       computerChoice = 'Bat';
    }
    else if(randomNum > 1 && randomNum <=2){
         computerChoice = 'Ball';
    }
    else{
      computerChoice = 'Stump';
    }

    return computerChoice;
}

