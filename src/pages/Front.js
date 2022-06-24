import { useState } from "react";
import { Postada, Getinho } from "../api/apiAnime";

export default function Front() {
    const [nome, setNome] = useState('');
    const [resultado, setResultado] = useState([]);

    async function Post() {
        const resposta = await Postada(nome);
    }

    async function Get() {
        const resp = await Getinho(resultado);
        setResultado(resp)
    }

    return (
        <main>
            <div className="Postt">
                <p>Adcione um Anime: </p>
                <input type="text" placeholder='ex: Naruto' nome='nm_anime' value={nome} onChange={(e) => setNome(e.target.value)} />
                <button onClick={Post}> Adcionar </button>
            </div>
            <div className="Gett">

                <div> <p>Consultar Animes:</p>
                    <button onClick={Get}> Colsultar </button>
                </div>

                <div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Animes:</th>
                        </tr>
                        <tr>
                                <td>
                                    {resultado.map((item) => {
                                        return (
                                            <div>{item.nm_anime}</div>
                                        )
                                    })}
                                </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}