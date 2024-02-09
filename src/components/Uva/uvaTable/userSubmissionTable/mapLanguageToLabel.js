const languageMap = {
  1: { name: 'ANSI C', color: 'darkorange' },
  2: { name: 'Java', color: 'red' },
  3: { name: 'C++', color: 'blue' },
  4: { name: 'Pascal', color: 'black' },
  5: { name: 'C++11', color: 'green' },
};

const mapLanguageToLabel = (languageID) => languageMap[languageID];

export default mapLanguageToLabel;
