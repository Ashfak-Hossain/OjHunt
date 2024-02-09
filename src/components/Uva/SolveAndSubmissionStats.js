const solvedProblems = (problems) => {
  const uniqueProblems = [
    ...new Set(
      problems
        .filter((problem) => problem[2] === 90)
        .map((problem) => problem[1])
    ),
  ];

  return uniqueProblems;
};

const countSubmissions = (problems) => {
  return problems.length;
};

export { countSubmissions, solvedProblems };
