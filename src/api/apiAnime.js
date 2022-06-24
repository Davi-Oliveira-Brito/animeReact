import axios from 'axios'


export async function Postada(nome) {
    const resposta = await axios.post('http://localhost:5000/anime' , {
        nome:nome
    })
    return resposta;
}

export async function Getinho() {
    const resposta = await axios.get('http://localhost:5000/animes')
    return resposta.data;
}

