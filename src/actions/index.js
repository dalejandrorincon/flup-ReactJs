export const GET_MOVIES = "GET_MOVIES";

export const getMovies = (titulo) => {
    return async function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=8d70db48&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
    }; 
};


