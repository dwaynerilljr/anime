import { Link } from "react-router-dom";

const AnimeSelection = ({ animes }) => {
    return (
        <div className="h-screen grid grid-cols-6">
            <div className="bg-gentle-blue flex flex-col items-center pt-20">
                <ul className="fixed">
                    <h1 className="text-2xl text-white"><strong>Animes</strong></h1>
                    {animes.map(anime => {
                        return <li className="text-lg hover:text-white cursor-pointer">{anime.name}</li>
                    })}
                </ul>
            </div>
            <div className="grid col-span-5 justify-items-center text-center grid-cols-4 grid-rows-3 px-10 py-20">
                {animes.map(anime => {
                    return (
                        <div className="my-7 h-h-half">
                            <h1 className="text-xl text-teal mb-1"><strong>{anime.name}</strong></h1>
                            <img src={anime.image} alt="" className="h-full w-full cursor-pointer" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AnimeSelection;