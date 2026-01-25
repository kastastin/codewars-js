// <-- Most improved -->

/*
  Your task is to complete the function to return an array sorted by most improved as percentages.

  Input
  The input you will receive will be an array of students, students will be objects containing a name and an array of marks (in order of acheived). The marks will be out of 100, a student can however have a mark of null if the test was not attempted (treat this as 0).

  Example of student Object: {name:'Henry, Johns',marks:[25,50]}

  Output
  The output expected will be an array of objects similar to the student object, containing the name and total improvement percentage out of the first and last mark given to calculate the overall improvement percentage. The output array must be sorted by most improved (Round the calculated improvement). If there is a tie in improvements, then order by name (capitals before lowercase).

  Example of return Object: {name:'Henry, Johns',improvement:100}

  Preloaded
  The Student class has been preloaded with the constructor accepting two parameters:

  name - string
  marks - an array of numbers.
*/

// <-- Solution -->
function calculateImproved(students) {
  const improvements = students
    .map((student) => ({
      name: student.name,
      marks: student.marks.map((mark) => (mark === null ? 0 : mark)),
    }))
    .map((student) => ({
      name: student.name,
      improvement:
        student.marks[0] === 0
          ? 0
          : Math.round((100 * (student.marks[student.marks.length - 1] - student.marks[0])) / student.marks[0]),
    }));

  return improvements.sort((a, b) => {
    if (a.improvement > b.improvement) return -1;
    if (a.improvement < b.improvement) return 1;
    
    return a.name > b.name ? 1 : -1;
  });
}
