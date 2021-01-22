import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-a699f-default-rtdb.firebaseio.com/',
});

export default instance;
