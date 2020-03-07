console.log("abc");

const morseCode = {
  a: "._",
  b: "_...",
  c: "_._.",
  d: "_..",
  e: ".",
  f: ".._.",
  g: "__.",
  h: "....",
  i: "..",
  j: ".___",
  k: "_._",
  l: "._..",
  m: "__",
  n: "_.",
  o: "___",
  p: ".__.",
  q: "__._",
  r: "._.",
  s: "...",
  t: "_",
  u: ".._",
  v: "..._",
  w: ".__",
  x: "_.._",
  y: "_.__",
  z: "__..",
  0: "_____",
  1: ".____",
  2: "..___",
  3: "...__",
  4: "...._",
  5: ".....",
  6: "_....",
  7: "__...",
  8: "___..",
  9: "____."
};

const translateToMorse = () => {
  const getInput = document.getElementById("input");
  const input = getInput.value;
  const output = document.getElementById("output");
  const individualCharacters = input.toLowerCase().split("");
  //   console.log("individualCharacters");
  const morseCharacters = individualCharacters.map(index => morseCode[index]);
  const morseString = morseCharacters.join(" ");
  //   console.log(morseString);
  output.innerHTML = morseString;
};

// const changeToWords = morseLetter => {
//   return Object.keys(morseCode).find(key => [key] === morseLetter);
// };

const getLetters = morseLetter => {
  return Object.keys(morseCode).find(key => morseCode[key] === morseLetter);
};

const translateInput = () => {
  const input = document
    .getElementById("input")
    .value.toLowerCase()
    .split(" ");
  if (input[0].includes(".") || input.includes("-")) {
    const convertedMorse = input.map(getLetters);
    document.getElementById("output").innerHTML = convertedMorse.join("");
  } else if (!input[0].includes(".") || input.includes("-"));
  const convertedEnglish = input.map(translateToMorse);
  document.getElementById("output").innerHTML = convertedEnglish;
};
