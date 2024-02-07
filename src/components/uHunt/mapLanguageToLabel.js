export const mapLanguageToLabel = (languageID) => {
  switch (languageID) {
    case 1:
      return 'C';
    case 2:
      return 'Java';
    case 3:
      return 'C++';
    case 4:
      return 'Pascal';
    case 5:
      return 'C++11';
    default:
      return 'Unknown language';
  }
};

export default mapLanguageToLabel;
