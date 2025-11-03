// <-- Extract portion of file name -->

/*
  You have to extract a portion of the file name as follows:

  Assume it will start with date represented as long number
  Followed by an underscore
  You'll have then a filename with an extension
  it will always have an extra extension at the end

  Inputs:
  1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION
  1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34
  1231231223123131_myFile.tar.gz2

  Outputs
  FILE_NAME.EXTENSION
  This_is_an_otherExample.mpg
  myFile.tar

  Acceptable characters for random tests:
  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789
*/

// <-- My Solution -->
function extractFileName(fileName) {
  const numSlice = fileName.indexOf("_");
  const extSlice = fileName.lastIndexOf(".");

  fileName = fileName.slice(numSlice + 1, extSlice);

  return fileName;
}

// <-- Best Solution -->
const extractFileName = (dirty) => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];
