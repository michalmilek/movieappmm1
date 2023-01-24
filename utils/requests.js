const API_KEY = process.env.NEXT_PUBLIC_API_KEY


export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/movie/week?api_key=${API_KEY}`
    },
        fetchTopRated: {
        title: 'Top Rated',
        url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    },
        fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
        fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
        fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
        fetchSciFi: {
        title: 'Science Fiction',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
        fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
            fetchAnimated: {
        title: 'Animated',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
            fetchTV: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }

}