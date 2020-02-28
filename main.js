const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "###",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----"
};

 const translateToMorse = () => {
   const input = document.getElementById("inputText");
   const inputValue = input.value;
   // "Paul"
   const output = document.getElementById("outputMorse");
   const characters = inputValue.toLowerCase().split("");
   // characters = ["p", "a", "u", "l"]
   const morseCharacters = characters.map(char => alphabet[char]);
   // ["--", "..-"]...
   const morseString = morseCharacters.join(" ");
   // "-- ..-"...

   output.innerHTML = morseString;
 };


const changeToWords = morseLetter => {
return Object.keys(alphabet).find(key => alphabet[key] === morseLetter);
}

const translateInput = () => {
// document.getElementById("output").innerHTML = "";
//split input separated by spaces into an array
const getInput = document.getElementById("input").value.toLowerCase().split(" ");
console.log(getInput);    
//check to see if input is morse. If so run function to translate
if (getInput[0].includes(".") || (getInput.includes("_"))) {
    const convertedMorse = getInput.map(changeToWords);
    document.getElementById("output").innerHTML = convertedMorse.join("");
}}
