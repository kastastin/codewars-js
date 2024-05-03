// <-- Memesorting -->

/*
  You will be given a meme (string), and your task is to identify its category, and send it to the right receiver: IT - 'Roma', chemistry - 'Maxim', design - 'Danik', or other - 'Vlad'.

  IT meme has letters b, u, g.
  Chemistry meme has letters b, o, o, m.
  Design meme has letters e, d, i, t, s.

  If there is more than one possible answer, the earliest match (the one that completes first) should be chosen.

  Note: letters are case-insensetive and should come in the order specified above.

  Examples:
  (Matching letters are surrounded by curly braces for readability.)

  this is programmer meme {b}ecause it has b{ug}
  this is also program{bu}r meme {g}ecause it has needed key word
  this is {ed}s{i}gner meme cause i{t} ha{s} key word

  this could {b}e chemistry meme b{u}t our{g}Gey word 'boom' is too late
      instead of
  this could {b}e chemistry meme but {o}ur gey w{o}rd 'boo{m}' is too <late></late>
*/

// <-- My Solution -->
function memesorting(meme) {
	const regex = /((?<=.*b.*u.*)g)|((?<=.*b.*o.*o.*)m)|((?<=.*e.*d.*i.*t.*)s)/i;

	if (!regex.test(meme)) return "Vlad";
	else {
		let match = meme.toLowerCase().match(regex)[0];

		return match === "m" ? "Maxim" : match === "s" ? "Danik" : "Roma";
	}
}

// <-- Best Solution -->
function memesortingBest(meme) {
	switch (
		[...meme]
			.reverse()
			.join("")
			.match(/.*(g.*u.*b|m.*o.*o.*b|s.*t.*i.*d.*e|^)/i)[1]
			.charAt(0)
			.toLowerCase()
	) {
		case "s":
			return "Danik";
		case "g":
			return "Roma";
		case "m":
			return "Maxim";
		default:
			return "Vlad";
	}
}
