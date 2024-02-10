import { mapVerdictToLabel } from '../uvaTable/userSubmissionTable/mapUvaVerdict';

const calculateVerdictData = (submissionProblems) => {
  const verdictCounts = new Map();

  submissionProblems.forEach((problem) => {
    const verdict = mapVerdictToLabel(problem[2]);
    verdictCounts.set(verdict, (verdictCounts.get(verdict) || 0) + 1);
  });

  const labels = [...verdictCounts.keys()];
  const data = [...verdictCounts.values()];

  const { backgroundColors, borderColors } = getColorsForVerdicts(labels);

  labels.reverse();
  data.reverse();
  backgroundColors.reverse();
  borderColors.reverse();

  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        hoverOffset: 5,
      },
    ],
  };
};

const getColorsForVerdicts = (verdicts) => {
  const backgroundColors = [];
  const borderColors = [];

  verdicts.forEach((verdict) => {
    const color = getColorForVerdict(verdict);
    backgroundColors.push(color);
    borderColors.push(getDeeperColor(color));
  });

  return { backgroundColors, borderColors };
};

const getColorForVerdict = (verdict) => {
  switch (verdict) {
    case '- In queue -':
    case 'SubmissionErr':
    case "Can't be judged":
      return 'rgba(0, 0, 0, 0.3)';
    case 'Compile error':
      return 'rgba(170, 170, 0, 0.3)';
    case 'Runtime error':
      return 'rgba(0, 170, 170, 0.3)';
    case 'Output limit':
      return 'rgba(0, 0, 102, 0.3)';
    case 'Time limit':
      return 'rgba(54, 162, 235, 0.2)';
    case 'Memory limit':
      return 'rgba(153, 102, 255, 0.2)';
    case 'Wrong answer':
      return 'rgba(255, 99, 132, 0.2)';
    case 'PresentationE':
      return 'rgba(102, 102, 0, 0.3)';
    case 'Accepted':
      return 'rgba(75, 192, 192, 0.2)';
    default:
      return 'rgba(0, 0, 0, 0.3)';
  }
};

const getDeeperColor = (color) => {
  const rgbaArray = color.replace(/[^\d,]/g, '').split(',');
  const alpha = Math.min(parseFloat(rgbaArray[3]) + 0.8, 1.0);
  return `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${alpha})`;
};

export { calculateVerdictData };
