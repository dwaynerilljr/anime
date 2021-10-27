import { Link } from "react-router-dom";

const TopAnime = ({ animes }) => {
    return (
        <div className="grid px-5">
            <h1 className="text-5xl justify-self-center text-teal py-3">Featured Anime</h1>
            <div className="grid grid-cols-5 justify-items-center gap-5 my-10">
                {animes.map(anime => {
                    if (anime.featured) {
                        return (
                            <div className="flex flex-col items-center">
                                <p className="text-xl mb-2">{anime.name}</p>
                                <Link to={`/anime/show/${anime.id}`}><img src={anime.image} className="h-h-half hover:opacity-60" alt="" /></Link>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    );
}
 
export default TopAnime;