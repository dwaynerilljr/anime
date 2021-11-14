import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import SingleAnimeDisplay from "./SingleAnimeDisplay"

export default function PlayWithData({ handleSelection, animeSelection, handleClick }) {

    // const [animes, setAnimes] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/animes')
    const { data, isPending, error } = useFetch(url)

    return (
        <div className="h-full grid grid-cols-4 align-items-center justify-center pt-52">
            <h2 className="col-span-4">Animes</h2>
            {isPending && <div>Loading animes...</div>}
            {error && <div>{error}</div>}
            <select onChange={(e) => setUrl(`http://localhost:3000/animes?${e.target.value}`)} className="col-span-4">Select:
                <option value={null}>All</option>
                <option value="demographic=Shounen">Shounen</option>
                <option value="demographic=Seinen">Seinen</option>
            </select>
            {data && data.map(anime => (
                <div className="flex flex-col w-3/6">
                    <SingleAnimeDisplay key={anime.id} anime={anime} handleSelection={handleClick} />
                </div>
            ))}
            
            {animeSelection && <p>{animeSelection.name}</p>}
        </div>
    )
}
