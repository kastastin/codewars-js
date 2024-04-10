// <-- Parse HTML/CSS Colors -->

/*
  Implement a function which takes a color as a string and returns the parsed color as a map.

  6-digit hexadecimal - "#RRGGBB"
    e.g. "#012345", "#789abc", "#FFA077"
    Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

  3-digit hexadecimal - "#RGB"
  e.g. "#012", "#aaa", "#F5A"
    Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

  Preset color name
    e.g. "red", "BLUE", "LimeGreen"
    You have to use the predefined map PRESET_COLORS. The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").
*/

// <-- My Solution -->
function parseColor(color) {
	color = color[0] === "#" ? color : PRESET_COLORS[color.toLowerCase()];

	if (color.length === 4) {
		return {
			r: parseInt(color[1] + color[1], 16),
			g: parseInt(color[2] + color[2], 16),
			b: parseInt(color[3] + color[3], 16),
		};
	} else {
		return {
			r: parseInt(color.slice(1, 3), 16),
			g: parseInt(color.slice(3, 5), 16),
			b: parseInt(color.slice(5, 7), 16),
		};
	}
}

// <-- Best Solution -->
function parseColorBest(color) {
	const obj = (a) => ({ r: a[0], g: a[1], b: a[2] });
	const chunk = (s) => s.match(/.{2}/g).map((v) => parseInt(v, 16));
	const norm = (s) =>
		s.length === 4 ? s[1] + s[1] + s[2] + s[2] + s[3] + s[3] : s.slice(1);

	return obj(chunk(norm(PRESET_COLORS[color.toLowerCase()] || color)));
}
