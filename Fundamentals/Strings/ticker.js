// <-- Ticker -->

/*
  While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

  Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

  At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

  For example

  ticker('Hello world!', 10, 4)   // '      Hell'
*/

// <-- My Solution -->
const ticker = (text, width, tick) => {
  let padded_text = text.padStart(text.length + width);
  let modded_tick = tick % padded_text.length;

  return padded_text.slice(modded_tick, modded_tick + width).padEnd(width);
};

// <-- Best Solution -->
const tickerBest = (s, w, t) => {
  s = " ".repeat(w) + s + " ".repeat(w);
  t = t % (s.length - w);

  return s.slice(t, t + w);
};
