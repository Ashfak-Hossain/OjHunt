import { format } from 'date-fns';

const formatSubmissionTime = (submissionTimeInSeconds) => {
  const now = new Date();
  const submissionTime = new Date(submissionTimeInSeconds * 1000);
  const differenceInSeconds = Math.floor((now - submissionTime) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} second${differenceInSeconds === 1 ? '' : 's'} ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (differenceInSeconds < 2592000) {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else {
    return format(submissionTime, 'PPp');
  }
};

export default formatSubmissionTime;
