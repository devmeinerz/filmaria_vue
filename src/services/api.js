import axios from 'axios';

//https://sujeitoprogramador.com/r-api/
//?api=filmes   (rota da api)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api'
});

export default api;