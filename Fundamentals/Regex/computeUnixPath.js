// <-- Compute Unix path -->

/*
  Your task is simple: combine input parts into a Unix style path.

  The parameters are represented by strings which may contain letters, dots, spaces, slashes and backslashes.

  Backslashes must be converted into slashes, spaces must be trimmed, empty parts must be removed and trailing slashes should be removed.

  An empty path should be transformed into a slash.
*/

// <-- Solution -->
function combinePathsUri(...paths) {
  return (
    "/" +
    paths
      .join("/")
      .replace(/\s/g, "") // remove spaces
      .replace(/\\/g, "/") // convert backslash into slashes
      .replace(/\/{2,}/g, "/") // remove duplicates
      .replace(/^\/|\/$/g, "") // remove trailing slashes
  );
}
