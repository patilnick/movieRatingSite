import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "3d474b6eb93930845ad8314f23acac0b";
                 
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQ3NGI2ZWI5MzkzMDg0NWFkODMxNGYyM2FjYWMwYiIsInN1YiI6IjY1MzAyZTgyMGI3NGU5MDBjNDdjMGI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iVxx3zlYaUDWyF2-1MkACxDBwEkPZU3N2Ai0aGy1sM";

// const headers = {
//     Authorization: "bearer " + API_TOKEN,
// };
export const fetchDataFromApi = async(url,params) => {
    try {
        const {data} = await axios.get(
            BASE_URL + url +"api_key="+ API_KEY
            )
        return data;    
    } catch (error) {
        console.log(error);
    }
}