const API_KEY = '693a98372904da845200857be19fa3e1'


const requests = {
    fetchTrending: `/trending/movies/week?api_key=${API_KEY}&language=en-IN`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchActionMovies: `/discover/tv?api_key${API_KEY}&with_genres=28`
}

export default requests;