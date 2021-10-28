import { useState } from 'react';
import ReviewForm from './ReviewForm'
import ReviewDisplay from './ReviewDisplay';
import { useParams, Link } from 'react-router-dom';
import { MdOutlineDoubleArrow } from 'react-icons/md'

const DragonBallZ = ({user, animes}) => {
    let {id} = useParams();
    const [reviewArr, setReviewArr] = useState(animes[Number(id)].comments);
    
    return (
        <div className="grid grid-cols-6 pt-52">
            <div className='grid grid-cols-3 col-start-2 col-span-4'>
                <div className="flex w-full justify-self-center font-medium items-center col-span-3 bg-gray-100 h-60 p-4 text-teal text-lg">
                    <Link to="/" className='hover:text-gentle-blue'>Home</Link>
                    <span className='mx-2'><MdOutlineDoubleArrow /></span>
                    <Link to="/anime" className='hover:text-gentle-blue'>Anime</Link>
                    <span className='mx-2'><MdOutlineDoubleArrow /></span>
                    <span className='text-dark-blue font-light'>{animes[Number(id)].name}</span>
                </div>
                <div className='flex col-span-1 mx-3 pt-4'>
                    {animes.map(anime => {
                        if (anime.id === Number(id)) {
                            return (
                                <div className="flex flex-col h-3/6">
                                    <img src={anime.image} alt={anime.name} className="w-full h-full" />
                                    <ul>
                                        <h1 className="text-center text-2xl">Info:</h1>
                                        <li>Name: {anime.name}</li>
                                        <li>Type: {anime.type}</li>
                                        <li>Demographic: {anime.demographic}</li>
                                        <li>Seasons: {anime.seasons}</li>
                                    </ul>
                                </div>
                            )
                        } return null
                    })}
                </div>
                <div className="grid grid-rows-2 col-span-2 p-4">
                    <ReviewDisplay id={id} animes={animes} user={user} reviewArr={reviewArr} />
                    <ReviewForm id={id} animes={animes} user={user} setReviewArr={setReviewArr} />
                </div>
            </div>
        </div>
    );
}
 
export default DragonBallZ;