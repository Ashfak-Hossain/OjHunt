const mapVerdictToLabel = (verdictId) => {
  switch (verdictId) {
    case 10:
      return 'Submission error';
    case 15:
      return "Can't be judged";
    case 20:
      return 'In queue';
    case 30:
      return 'Compile error';
    case 35:
      return 'Restricted function';
    case 40:
      return 'Runtime error';
    case 45:
      return 'Output limit';
    case 50:
      return 'Time limit';
    case 60:
      return 'Memory limit';
    case 70:
      return 'Wrong answer';
    case 80:
      return 'Presentation error';
    case 90:
      return 'Accepted';
    default:
      return 'Unknown verdict';
  }
};

// 10 : Submission error
// 15 : Can't be judged
// 20 : In queue
// 30 : Compile error
// 35 : Restricted function
// 40 : Runtime error
// 45 : Output limit
// 50 : Time limit
// 60 : Memory limit
// 70 : Wrong answer
// 80 : PresentationE
// 90 : Accepted

const mapVerdictIDtoColor = (verdictId) => {
  switch (verdictId) {
    case 10:
      return 'red';
    case 15:
      return 'red';
    case 20:
      return 'black';
    case 30:
      return 'red';
    case 35:
      return 'red';
    case 40:
      return 'cyan';
    case 45:
      return 'red';
    case 50:
      return 'blue';
    case 60:
      return 'yellow';
    case 70:
      return 'red';
    case 80:
      return 'orange';
    case 90:
      return 'green';
    default:
      return 'black';
  }
};

export { mapVerdictToLabel, mapVerdictIDtoColor };
