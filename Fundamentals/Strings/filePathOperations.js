// <-- File Path Operations -->

/*
  This kata requires you to write an object that receives a file path and does operations on it

  const fm = new FileMaster('/Users/person1/Pictures/house.png');
  fm.extension(); // output: 'png'
  fm.filename(); // output: 'house'
  fm.dirpath(); // output: '/Users/person1/Pictures/'
*/

// <-- My Solution -->
class FileMaster {
  constructor(filepath) {
    this.path = filepath;
  }

  extension() {
    return this.path.split("/").slice(-1)[0].split(".")[1];
  }

  filename() {
    return this.path.split("/").slice(-1)[0].split(".")[0];
  }

  dirpath() {
    return this.path.split("/").slice(0, -1).join("/") + "/";
  }
}

// <-- Best Solution -->
class FileMaster {
  constructor(filepath) {
    this.info = filepath.match(/^(.*\/)([^.]+)\.(.*)$/);
  }

  extension() {
    return this.info[3];
  }

  filename() {
    return this.info[2];
  }

  dirpath() {
    return this.info[1];
  }
}
