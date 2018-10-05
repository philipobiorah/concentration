
class BoardSquare{
  
  constructor(element, color) {
    this.element = element;
    this.color = color;
    this.isMatched = false;
    this.setColor(color);
  }


    //1
    setColor(color){
      // 2
      const faceUpElement = this.element.getElementsByClassName('faceup')[0];

      // 3
      this.color = color;
      // 4
      faceUpElement.classList.add(color);
    }


}
function generateHTMLForBoardSquares(){



const numberOfSquares = 16;
let squaresHTML = '';


//generate HTML for board squares
for( let i = 0; i < numberOfSquares; i++){
  squaresHTML += `<div class="col-3  board-square">
  <div class="face-container">
    <div class="facedown"></div>
    <div class="faceup"></div>
  </div>
  </div>`
}



const boardElement = document.getElementById('gameboard');
boardElement.innerHTML = squaresHTML;
}  

const colorPairs = [];

function generateColorPairs(){
  if (colorPairs.length > 0) {
    return colorPairs;
  } else {
    // generates matching pair for each color
    for (let i = 0; i < 8; i++){
      colorPairs.push('color-'+i);
      colorPairs.push('color-'+i);
    }

    return colorPairs;
  }
}


function shuffle(array){
  let currentIndex = array.length;
  let temporaryValue,  randomIndex;

  //While there remain element s to shuffle...
  while(0 !== currentIndex){
    // Pick a remining element....
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    // And swap it with the current elemet.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
  }

  return array;
}


function shuffle(){
  const colorPairs = generateColorPairs()
  return shuffle(colorPairs);
}


function gameSetup(){
  generateHTMLForBoardSquares();
  const randomColorPairs = shuffleColors();
  }
  setupGame();