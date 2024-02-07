import axios from 'axios';

const uhunt = 'https://uhunt.onlinejudge.org/api';

const uHuntClient = axios.create({
  baseURL: uhunt,
});

export { uHuntClient };
