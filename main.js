  
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
    " ": " ",
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
  
  const translate = () => {
    const input = document.getElementById("textInput");
    const inputValue = input.value;
    // "Matt"
    const output = document.getElementById("output");
  
    const characters = inputValue.toLowerCase().split("");
    // characters = ["m", "a", "t", "t"]
    const morseCharacters = characters.map(char => alphabet[char]);
    // ["--", "..-"]
    const morseString = morseCharacters.join(" ");
    // "-- ..-"
  
    output.innerHTML = morseString;
  };
  
  document.getElementById("translate").addEventListener("click", translate);

  // const translate = () => {
  //   const input = document.getElementById("morseInput");
  //   const inputValue = input.value;
  //   // "Matt"
  //   const output = document.getElementById("output");
  
  //   const characters = inputValue.toLowerCase().split("");
  //   // characters = ["m", "a", "t", "t"]
  //   const morseCharacters = characters.map(char => alphabet[char]);
  //   // ["--", "..-"]
  //   const morseString = morseCharacters.join(" ");
  //   // "-- ..-"
  
  //   output.innerHTML = morseString;
  // };
  
  // document.getElementById("translate").addEventListener("click", translate);