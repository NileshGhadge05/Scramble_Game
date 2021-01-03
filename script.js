const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let ranWords = "";
let Words = ['spine','finger','painter','ghost','artist','solid','building','argentina','magnificent','parrot','prosthetic','youtube'];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random()*Words.length);
  //console.log(ranNum);
  let newTempWords = Words[ranNum];
  return newTempWords;
}

const scrambleWords = (arr) => {
  for(let i = arr.length-1; i>0; i--){
    let temp = arr[i];
    let j = Math.floor(Math.random()*(i+1));

    arr[i] = arr[j];
    arr[j] = temp;

  }
  return arr;
}

btn.addEventListener('click', function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    ranWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = `Guess the word(case sensitive): ${ranWords}`;
  }else {
    let tempWords = guess.value;
    if(tempWords === newWords){
      play = false;
      msg.innerHTML = `Good Job, it's correct. It is ${newWords}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle('hidden');
      guess.value = "";
    }else {
      msg.innerHTML = `Sorry, it is incorrect. Please try again ${ranWords}`;
      btn.innerHTML = "Click here to try again";
      guess.classList.toggle('hidden');
    }
  }
})