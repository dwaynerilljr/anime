import { Link } from "react-router-dom"

export default function AnimeList({ grid, sorted, anime }) {

    if (anime.length === 0) {
        return <div>No results found...</div>
    }

    return (
        <div className={grid ? "grid grid-cols-4 grid-rows-3 w-full col-span-4 col-start-1 gap-x-10" : "my-7 flex flex-col w-full col-span-8"}>
            {anime.map(show => (
                grid ? 
                    <div className="my-7 h-h-half" key={show.id}>
                        <h1 className="text-xl text-primary mb-1 font-semibold font-bangers">{show.name}</h1>
                        <Link to={`/anime/show/${show.id}`}><img src={show.image} alt="" className="h-full w-full hover:opacity-60" /></Link>
                    </div>
                    : <div className="flex w-full my-2 text-primary border border-secondary" key={show.id}>
                        <img src={show.image} alt="" className="w-32 p-1" />
                        <div className="flex items-center w-full justify-center text-center">
                            <div className="flex flex-col">
                                <Link to={`/anime/show/${show.id}`} className="text-5xl mb-1 font-semibold font-bangers hover:text-ternary">{show.name}</Link>
                                <div className="text-secondary">
                                    <p><strong>Demographic:</strong> {show.demographic}</p>
                                   <p><strong>Seasons:</strong> {show.seasons}</p>
                                    <p><strong>Average Score:</strong> {show.comments.reduce((a, { rating }) => a + rating / show.comments.length, 0)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
         </div>
    )
}
