import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-55be2.firebaseio.com/',
});

export default instance;
