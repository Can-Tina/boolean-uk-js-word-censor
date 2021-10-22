const text = prompt("What is your sentence?")
const censorWord = prompt("What words would you like to censor? Don't put commas.")
/*"Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";*/

const censored = censorWord.split(' ');
let wordArray = []

function censor(input) {
  wordArray = input.split(' ');
  for (let i = 0; i < (wordArray.length); i++) {
    if (wordArray[i] === censored[0] || wordArray[i] === censored[1] || wordArray[i] === censored[2]){
      wordArray[i] = "****"
    };
  };
  console.log(wordArray);
};

let censorCount = 0

function countCensor(){
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == "****") {
      censorCount++
    };
  };
};


censor(text);
countCensor()
console.log (censorCount)