// prettier-ignore
const alphabet = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n",
 "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

let encodeFlag = true; // Variable to track encode/decode state

// Called when the Encode/Decode button is pressed
function toggleEncodeDecode() {
    encodeFlag = !encodeFlag; // Toggle the encodeFlag between true and false
    enDeCode(); // Call the enDeCode function to update the input
}

// Encodes or decodes the user message based on the current encodeFlag value
function enDeCode() {
    let userString = document.getElementById("userMessage");
    let userKey1 = document.getElementById("userKey1").value;
    let userKey2 = document.getElementById("userKey2").value;
    let cleanString = userString.value.trim().toLowerCase();
    let outputMessage = [];

    for (let i = 0; i < cleanString.length; i++) {
        outputMessage.push(codeLetter(cleanString[i], userKey1, userKey2, i));
    }

    userString.value = outputMessage.join("");
}

// Converts an index to a letter from the alphabet array
function convertIndexToLetter(index) {
    let letter = alphabet[index];
    return letter;
}

// Converts a letter to its corresponding index in the alphabet array
function convertLetterToIndex(letter) {
    let index = alphabet.indexOf(letter);
    return index;
}

// Calculates the new index of a letter based on the userKey1, userKey2, and encode flag
function calculateNewIndex(letter, userKey1, userKey2, encode, currentIndex) {
    let index = Number(convertLetterToIndex(letter));
    let totalShift = Number(userKey1) + Number(userKey2) * currentIndex;
    encode ? (index = index + totalShift) : (index = index - totalShift);
    index = index > 25 ? index - 26 : index < 0 ? index + 26 : index;
    return index;
}


// Encodes or decodes a letter based on the userKey1, userKey2, and encode flag
function codeLetter(letter, userKey1, userKey2, currentIndex) {
    let letterRegEx = /[^a-z]/;
    return letterRegEx.test(letter)
        ? letter
        : convertIndexToLetter(calculateNewIndex(letter, userKey1, userKey2, encodeFlag, currentIndex));
}
