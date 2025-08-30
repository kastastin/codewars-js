// <-- File Finder -->

/*
  Sometimes some annoying students decide to mess around by creating horrible amalgamations of nested folders in shared directories. Sometimes they'll even stick a file in there as a sort of tedious file explorer "treasure hunt". In this kata, you'll have to search through a virtual filesystem of sorts to find a file, then return the path to the file. For example:

  const files = {
    'New folder': {
      'New folder': {}
    },
    'New folder (1)': {
      'New folder': {
        'funnyjoke.txt': 'lol i pranked you!!!'
      }
    },
    'New folder (2)': {}
  };
  console.log(search(files)); // New folder (1)/New folder/funnyjoke.txt

  Sometimes there might not be a file in the filesystem. In that case, just throw an error. You're always guaranteed to receive a filesystem with either one or zero files.
*/

// <-- My Solution -->
function search(fs, inner) {
  for (const k in fs) {
    const v = fs[k];

    if (typeof v === "string") return k;

    if (v && typeof v === "object") {
      const p = search(v, 1);

      if (p) return k + "/" + p;
    }
  }

  if (inner) return;

  throw new Error("No files!");
}

// <-- Best Solution -->
function search(files, path = "") {
  if (typeof files === "string") return path.slice(1);

  for (let folder in files)
    try {
      return search(files[folder], path + "/" + folder);
    } catch (e) {
      // Noop
    }

  throw new Error("No files!");
}
