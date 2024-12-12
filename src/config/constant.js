let BASE_URL = '';
if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:5000/api/v1';
}else{
  BASE_URL = 'https://api.simrandev.com/api/v1';
}
export { BASE_URL };
