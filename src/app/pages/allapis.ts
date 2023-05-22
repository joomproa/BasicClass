let MOVIE_API = "https://api.themoviedb.org/3/movie/"
let api_key = "?api_key=1ccd40fe0ae0d211412d191560a3e103&language=en-US"
let USER_API = "https://reqres.in/api/"

export let allapimovie = {
    movies: {
        getupcoming: MOVIE_API + 'upcoming' + api_key,
        getdetails: MOVIE_API + '/',
        api_key: api_key
    }
}

export let allapiuser = {
    user: {
        getalluser: USER_API + 'users'
    }
}