// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
}


function getRandomNumber() {
  return Math.floor(Math.random() * (9 - 0) + 0);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*-+?><";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

