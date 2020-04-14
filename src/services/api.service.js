import axios from 'axios'

// const apiKey = 'AIzaSyDrJAFJ_AB_e2L6ZqdrUXfZ0W20rGJExJ8';
const baseSearchUrl = 'https://www.googleapis.com/books/v1/volumes?';

const getBooks = (q,filter,type,start,end) => {
    return axios.get(`${baseSearchUrl}${q}${filter}${type}${start}${end}`);
}


export { getBooks }