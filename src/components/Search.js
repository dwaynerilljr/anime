import { useLocation } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import AnimeList from "./AnimeList"

export default function Search({ grid }) {
    const queryString = useLocation().search
    console.log(queryString)
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/animes?q=' + query
    const {error, isPending, data: anime} = useFetch(url)
    
    return (
        <div className="grid grid-cols-10 pt-52">
            <div className="grid col-start-2 col-span-8 text-center pb-10">
                <h1 className="text-3xl col-span-8 my-20 font-semibold text-ternary">Search Results for "{query}"</h1>
                {anime && <AnimeList anime={anime} grid={grid} />}
            </div>
        </div>
    )
}
