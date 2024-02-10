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

const LinkStyles = {
  _hover: {
    textDecoration: 'none',
    color: 'cyan.400',
    fontWeight: 'extrabold',
  },
  marginRight: '0.3em',
};

export { countSubmissions, solvedProblems, LinkStyles };
