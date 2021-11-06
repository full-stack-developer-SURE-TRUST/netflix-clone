const API_KEY = "7e57c0a3adee3014968f5ac04752c2bd"

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_network=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_network=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_network=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_network=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_network=99`,
   
}


export default request;