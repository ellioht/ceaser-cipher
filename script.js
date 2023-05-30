// prettier-ignore
const alphabet = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n",
 "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

let encodeFlag = true; // Variable to track encode/decode state

// Called when button pressed
function toggleEncodeDecode() {
    encodeFlag = !encodeFlag; // Toggle the encodeFlag between true and false
    enDeCode(); // Call the enDeCode function to update the input
}

// Print message
function enDeCode() {
    let userString = document.getElementById("userMessage");
    let userKey = document.getElementById("userKey").value;
    let cleanString = userString.value.trim().toLowerCase();
    let outputMessage = [];

    for (let i = 0; i < cleanString.length; i++) {
        outputMessage.push(codeLetter(cleanString[i], userKey));
    }

    userString.value = outputMessage.join("");
}

function convertIndexToLetter(index) {
    let letter = alphabet[index];
    return letter;
}

function convertLetterToIndex(letter) {
    let index = alphabet.indexOf(letter);
    return index;
}

function calculateNewIndex(letter, userKey, encode) {
    let index = Number(convertLetterToIndex(letter));
    encode ? (index = index + Number(userKey)) : (index = index - Number(userKey));
    index = index > 25 ? index - 26 : index < 0 ? index + 26 : index;
    return index;
}

// Check if non letter
function codeLetter(letter, userKey) {
    let letterRegEx = /[^a-z]/;
    return letterRegEx.test(letter) ? letter : convertIndexToLetter(calculateNewIndex(letter, userKey, encodeFlag));
}
