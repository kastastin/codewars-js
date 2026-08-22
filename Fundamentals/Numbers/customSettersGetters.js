// <-- Custom Setters and Getters -->

/*
  Let's take a look at an interesting feature of JS: custom Getters and Setters for objects.

  Skimming over this may help you prepare for this kata.

  The object of this exercise will be to provide a class Archiver that creates a "self-archiving" object with respect to its temperature property, but otherwise looks and acts just like a normal JS object. Each time the temperature property is assigned, the object should add a log entry to an array (the "archive") that it returns via a getArchive method. The log entry should be formed as such:

  {
  date: // the time when the "temperature" property was assigned (Date object),
  val:  // the value that was written to the "temperature" property.
  }

  Example
  //new Date() == '2013-09-24...Z'
  const archive = new Archiver();
  archive.temperature = 33;
  archive.temperature = 28;
  archive.temperature = 21;
  archive.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]
*/

// <-- Solution -->
class Archiver {
  constructor() {
    this.archive = [];
  }

  set temperature(temp) {
    this.temp = temp;
    this.archive.push({ date: new Date(), val: temp });
  }

  get temperature() {
    return this.temp;
  }

  getArchive() {
    return this.archive;
  }
}
