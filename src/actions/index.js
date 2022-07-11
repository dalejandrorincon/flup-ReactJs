const GET_MOVIES = "GET_MOVIES";

const getMovies = () => {
    return function(dispatch){
        return fetch('http://www.omdbapi.com/?apikey=8d70db48')
    }
}