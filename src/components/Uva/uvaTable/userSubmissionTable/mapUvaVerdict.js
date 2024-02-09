const verdictMap = {
  0: { name: '- In queue -', short_name: 'QU', color: '#000000' }, // OT
  10: { name: 'SubmissionErr', short_name: 'SE', color: '#000000' }, // OT
  15: { name: "Can't be judged", short_name: 'CJ', color: '#000000' }, // OT
  20: { name: '- In queue -', short_name: 'QU', color: '#000000' }, // OT
  30: { name: 'Compile error', short_name: 'CE', color: '#AAAA00' },
  35: { name: 'Restricted function', short_name: 'RF', color: '#000000' }, // OT
  40: { name: 'Runtime error', short_name: 'RE', color: '#00AAAA' },
  45: { name: 'Output limit', short_name: 'OL', color: '#000066' },
  50: { name: 'Time limit', short_name: 'TL', color: '#0000FF' },
  60: { name: 'Memory limit', short_name: 'ML', color: '#0000AA' },
  70: { name: 'Wrong answer', short_name: 'WA', color: '#FF0000' },
  80: { name: 'PresentationE', short_name: 'PE', color: '#666600' },
  90: { name: 'Accepted', short_name: 'AC', color: '#00AA00' },
};

const mapVerdictToLabel = (verdictId) => {
  return verdictMap[verdictId].name;
};

const mapVerdictIDtoColor = (verdictId) => {
  return verdictMap[verdictId].color;
};

export { mapVerdictToLabel, mapVerdictIDtoColor };
