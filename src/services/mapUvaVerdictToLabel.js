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

export default mapVerdictToLabel;
