import axios from 'axios'


const local = axios.create({
    baseURL:'http://localhost:5000'
}) 

export async function Postada(nome) {
    const resposta = await local.post('/anime' , {
        nome:nome
    })
    return resposta;
}

export async function Getinho() {
    const resposta = await local.get('/animes')
    return resposta.data;
}

