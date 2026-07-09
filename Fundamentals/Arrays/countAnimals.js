// <-- Count animals -->

/*
  Give you some chars, and they can combine many animal names.

  Return the maximum number of animal names that can be combined by chars.

  Animal names have been preload by variable names

  One char cannot use twice, for example:

      chars="goatcode"
      When you got a "dog" first time, chars left "atcoe", 
      second time you can got a "cat".
      result=2
      
      When you got a "goat" first time, chars left "code", 
      no animals will be found at next time.
      result=1
      
      So we should return the maximum number, sc("goatcode")=2

  Examples:
      names=["dog","cat","bat","cock","cow","pig","fox",
            "ant","bird","lion","wolf","deer","bear","frog",
            "hen","mole","duck","goat"]
      
      sc("dogcat")=2("dog" and "cat")    
      sc("bcaatt")=2("bat" and "cat")    
      sc("dogdog")=2("dog" and "dog")    
      sc("dopig")=1(only contains one of "dog" or "pig")
      
      some corner case:
      
      sc("goatcode")=2  should return 2("dog","cat"), not 1("goat")    
      sc("cockdogwdufrbir")=4 
      should return 4("cow","duck","frog","bird") not 2("cock" and "dog")
*/

// <-- Solution -->
function sc(chars, k = 0) {
  let matches = [];
  const without = (s) => (c) => s.replace(c, "");
  const minus = (chars) => (name) =>
    name ? (chars.includes(name[0]) ? minus(without(chars)(name[0]))(name.slice(1)) : null) : chars;

  for (let i = k; i in names; i++) {
    const t = minus(chars)(names[i]);

    if (t !== null) {
      matches.push([t, i]);
    }
  }

  return matches.length && 1 + Math.max(...matches.map((v) => sc(...v)));
}
