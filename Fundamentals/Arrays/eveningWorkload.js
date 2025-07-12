// <-- Evening up a workload -->

/*
  We have a big list of jobs to do, and all of the jobs have been assigned a difficulty rating. Difficulties will be an integer, and they may be positive, negative or zero.

  Jim and Bob have the job of doing all the jobs, but we need to find the position in the container where we can make a cut so that Jim and Bob have the most even workload to perform.

  Kata
  Your task is to write a function that identifies the place to split the workload for Jim and Bob, it will be supplied with a container of difficulty ratings, and you must return a tuple/array with (the optimum location of the split, the difference between the two total workloads).

  If no workload is provided, then return (None, None)/[null, null].

  Worked Example
  The workload we are give to split is as follows:

  [1, 6, 2, 3, 5, 4, 1]
*/

// <-- My Solution -->
function splitWorkload(workload) {
  if (workload.length == 0) {
    return [null, null];
  }

  const sum = (x) => x.reduce((t, v) => t + v);

  let res = [0, Math.abs(sum(workload))];
  let min = res[1];

  for (let i = 1; i < workload.length; i++) {
    let [x, y] = [workload.slice(0, i), workload.slice(i)];
    let dif = Math.abs(sum(x) - sum(y));

    if (dif < min) {
      min = dif;
      res[0] = i;
      res[1] = dif;
    }
  }

  return res;
}

// <-- Best Solution -->
const splitWorkloadBest = (w) =>
  !w.length
    ? [null, null]
    : w
        .map((_, i) => [
          i,
          Math.abs(
            w.slice(0, i).reduce((a, b) => a + b, 0) -
              w.slice(i).reduce((a, b) => a + b, 0),
          ),
        ])
        .reduce((best, cur) => (cur[1] < best[1] ? cur : best));
