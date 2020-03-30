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
  //  const input = document.getElementById("input");
  const getInput = input.value;
  ("Paul");
  //  const output = document.getElementById("output");
  const characters = getInput.toLowerCase().split("");
  // characters = ["p", "a", "u", "l"]
  const morseCharacters = characters.map(char => alphabet[char]);
  // ["--", "..-"]...
  const morseString = morseCharacters.join(" ");
  // "-- ..-"...
  const finalString = morseString.replace("###", "SPACE ");
  output.innerHTML = finalString;
};

const changeToWords = morseLetter => {
  return Object.keys(alphabet).find(key => alphabet[key] === morseLetter);
};

const translateInput = () => {
  document.getElementById("output").innerHTML = "";
  //split input separated by spaces into an array
  const getInput = document
    .getElementById("input")
    .value.toLowerCase()
    .split(" ");
  // console.log(getInput);
  //check to see if input is morse. If so run function to translate
  if (getInput[0].includes(".") || getInput.includes("_")) {
    const convertedMorse = getInput.map(changeToWords);
    // const stringIncludingSpace = convertedMorse.replace("###", "SPACE ")
    document.getElementById("output").innerHTML = convertedMorse.join("");
  } else if (!getInput[0].includes(".") || !getInput[0].includes("-")) {
    const convertedEnglish = getInput.map(translateToMorse);
    document.getElementById("output"), (innerHTML = convertedEnglish);
  }
};
