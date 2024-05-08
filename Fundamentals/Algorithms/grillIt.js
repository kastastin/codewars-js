// <-- Grill it! -->

/*
  A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers.

  Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
  The code is a nonnegative integer and it decrypts in binary the message.

  message : abcdef
  code    : 000101
  ----------------
  result  : df
*/

// <-- My Solution -->
function grille(message, code) {
  let binary = code.toString(2);
  
	binary =
    binary.length > message.length ? binary.slice(-message.length) : binary;
  
  const editedMessage = message.slice(-binary.length).split("");
  
	const newMessage = editedMessage
		.filter((letter, idx) => {
			return binary[idx] === "1" && letter;
		}, "")
    .join("");
  
	return newMessage;
}

// <-- Best Solution -->
function grilleBest(message, code) {
	const mask = ("0".repeat(message.length) + code.toString(2)).slice(
		-message.length
  );
  
	return [...message].filter((c, i) => +mask[i]).join("");
}
