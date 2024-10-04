// <-- Give me data -->

/*
  Your task is to write a function which will determine whether the user has or does not have the permission to download certain data.

  Data: movies, games, books.
  Info about user's permissions is stored in a database with the following form: "movies_allow", "games_deny" ..

  When user wants to download a game and the db contains "games_deny", your function should return False.

  The user can also have everything allowed or denied: "*_allow", "*_deny".

  You can also have everything denied and some data allowed: "*_deny", "movies_allow".

  Count on incorrectness of permissions: user can have same data allowed and denied e.g.: "books_allow", "books_deny" - which results in "books_deny".

  hint: specific data has a higher priority than "*", so watch out for cases like: "*_allow", "books_deny" - in this case, the user can download everything apart from books.

  Example:

  { "books_allow", "movies_deny" }, "movies"  =>  False
  { "books_allow", "movies_deny" }, "books"  =>  True
  { "*_allow", "books_allow", "movies_deny" }, "games"  =>  True
  { "*_allow", "*_deny" }, "movies"  =>  False
*/

// <-- My Solution -->
function hasPermission(db, cat) {
  let allowed = { movies: false, books: false, games: false };

  if (db.includes("*_allow")) {
    for (let key in allowed) allowed[key] = true;
  }

  if (db.includes("*_deny")) {
    for (let key in allowed) allowed[key] = false;
  }

  db.sort().forEach((p) => {
    let c = p.split("_");
    allowed[c[0]] = c[1] === "allow";
  });

  return allowed[cat];
}

// <-- Best Solution -->
function hasPermission(db, cat) {
  if (db.includes(`${cat}_deny`)) return false;
  if (db.includes(`${cat}_allow`)) return true;
  
  return db.includes("*_allow") && !db.includes("*_deny");
}