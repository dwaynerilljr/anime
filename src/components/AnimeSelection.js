import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from 'react-icons/md'

const AnimeSelection = ({ animes }) => {
    return (
        <>
            <div className="grid grid-cols-6 pt-52">
                <div className="grid col-start-2 col-span-4 justify-items-center text-center pb-10">
                    <div className="flex col-span-4 w-full justify-self-center p-4 items-center text-lg text-teal bg-gray-100 font-semibold">
                        <Link to="/" className='hover:text-gentle-blue'>Home</Link>
                        <span className='mx-2'><MdOutlineDoubleArrow /></span>
                        <span className='font-light text-dark-blue'>Anime</span>
                    </div>
                    <header className="col-span-4 text-5xl py-2 text-gentle-blue">
                        Anime
                    </header>
                    <label htmlFor="sort">Sort By:</label>
                    <select name="sort" id="" className="border-teal rounded-md border-2 ml-1">
                        <option value="recentlyAdded">Recently Added</option>
                        <option value="alphabetically">Alphabetically (A-Z)</option>
                    </select>
                    <div className="grid grid-cols-4 grid-rows-3 px-6 col-span-4 col-start-1">
                        {animes.map(anime => {
                            return (
                                <div className="my-7 h-h-half mx-2">
                                    <h1 className="text-lg text-teal mb-1">{anime.name}</h1>
                                    <Link to={`/anime/show/${anime.id}`}><img src={anime.image} alt="" className="h-full w-full hover:opacity-60" /></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AnimeSelection;