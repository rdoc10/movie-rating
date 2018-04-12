const getMovies = () => fetch('http://www.mocky.io/v2/5acf35693100007f004ea7dd?mocky-delay=3000ms', {
  method: 'GET',
});

export {
  getMovies,
}
