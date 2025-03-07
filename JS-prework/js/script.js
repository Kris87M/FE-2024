const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


 // Depends on player choice return player move

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
   
   // Assign name to number
    
   function getMoveName(argMoveId) {
     console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
     if (argMoveId == 1) {
       return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }
    
    
    // Compares player vs computer moves and print result
    
   function displayResult(argPlayerMove, argComputerMove) {
     console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
     if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
       printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis');
      } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    
  let computerMove, playerMove, randomNumber;
  
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
