// function play(){
//     // hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

//     //show the playground 
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function keyPress(event){
    const playerPressed = event.key;
    console.log('palyer pressed', playerPressed);

    // stop the game if presses 'Esc'
    if(playerPressed ==='Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('get a point')
     const currentScore =   getTextElementValueById('current-score');
     console.log(currentScore);
     const updatedScore = currentScore + 1;
     setTextElementValueById('current-score', updatedScore);



// update score 
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2.incease the score by 1 
        // const newScore = currentScore + 1;
        // // 3.show the update score 
        // currentScoreElement.innerText=newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('you missed. you lost a life')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // -------------------------
        // // step 1: get the current life number.
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // // step 2: reduce the life count
        // const newLife = currentLife - 1;
        // // step 3: display the updated life count.
        // currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press 
document.addEventListener("keyup", keyPress)

function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen(show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play(){
    // hide evrything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 2);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
        setTextElementValueById('last-score', lastScore)
        // clear the last selected alphabet highlight
        const currentAlphabet = getElementTextById('current-alphabet');
        // console.log(currentAlphabet)
        removeBackgroundColorById(currentAlphabet);
}