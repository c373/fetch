import fetch from 'node-fetch';

const api_endpoint = 'https://dog-api.kinduff.com/api/facts?number=5';
const response = await fetch(api_endpoint);
const data = await response.json();
console.log(data);
