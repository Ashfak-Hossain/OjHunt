const problemPdfLink = (problemNumber) => {
  const id = Math.floor(problemNumber / 100);
  return `https://onlinejudge.org/external/${id}/${problemNumber}.pdf`;
};

const problemUvaLink = (problemId) => {
  return `https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=${problemId}`;
};

export { problemPdfLink, problemUvaLink };
