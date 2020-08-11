import axios from 'axios';



 export default  axios.create({
    baseURL:'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID d347TePlTWOc6kUoz-gT2-l62SBnt_agmL4MfM54ef4'
    }
})