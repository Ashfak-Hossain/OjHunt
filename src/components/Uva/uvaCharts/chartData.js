import { mapVerdictToLabel } from '../uvaTable/userSubmissionTable/mapUvaVerdict';

const mapVerdicts = (submissionProblems) => {
  const verdictCounts = new Map();

  submissionProblems.forEach((problem) => {
    const verdict = mapVerdictToLabel(problem[2]);
    if (verdictCounts.has(verdict)) {
      verdictCounts.set(verdict, verdictCounts.get(verdict) + 1);
    } else {
      verdictCounts.set(verdict, 1);
    }
  });

  return verdictCounts;
};

const calculateVerdictData = (submissionProblems) => {
  return {
    labels: [...mapVerdicts(submissionProblems).keys()],
    datasets: [
      {
        label: '# of Votes',
        data: [...mapVerdicts(submissionProblems).values()],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 5,
      },
    ],
  };
};

// const options = {
//   layout: {
//     padding: {
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//     },
//   },
//   plugins: {
//     legend: {
//       display: true,
//       position: 'right',
//       labels: {
//         padding: 20,
//         marginX: 10,
//         generateLabels: function (chart) {
//           const data = chart.data;
//           if (data.labels.length && data.datasets.length) {
//             return data.labels.map(function (label, i) {
//               const value = data.datasets[0].data[i];
//               const total = data.datasets[0].data.reduce(
//                 (acc, val) => acc + val,
//                 0
//               );
//               const percentage = ((value / total) * 100).toFixed(0) + '%';
//               return {
//                 text: `${label} ${value} (${percentage})`,
//                 fillStyle: data.datasets[0].backgroundColor[i],
//                 hidden:
//                   isNaN(data.datasets[0].data[i]) ||
//                   data.datasets[0].data[i] <= 0,
//                 index: i,
//               };
//             });
//           }
//           return [];
//         },
//       },
//     },
//   },
// };

export { calculateVerdictData, mapVerdicts };
