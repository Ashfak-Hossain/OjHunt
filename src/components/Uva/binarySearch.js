const binarySearch = (problem, id) => {
  let left = 0;
  let right = problem.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (problem[mid][0] === id) {
      return problem[mid][1];
    } else if (problem[mid][0] < id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

export default binarySearch;
