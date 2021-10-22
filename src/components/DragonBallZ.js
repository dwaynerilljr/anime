import { useState } from 'react';
import ReviewForm from './ReviewForm'
import ReviewDisplay from './ReviewDisplay';

const DragonBallZ = ({user, animes}) => {
    const [reviewArr, setReviewArr] = useState([])
    
    return (
        <div className="h-screen grid grid-cols-6 pt-20">
            <div className='col-span-2 flex justify-end'>
                {animes.map(anime => {
                    if (anime.id === 0) {
                        return (
                            <div className="flex flex-col">
                                <img src={anime.image} alt={anime.name} />
                                <ul>
                                    <h1 className="text-center text-2xl">Info:</h1>
                                    <li>Name: {anime.name}</li>
                                    <li>Type: {anime.type}</li>
                                    <li>Demographic: {anime.demographic}</li>
                                </ul>
                            </div>
                        )
                    } return null
                })}
            </div>
            <div className="grid grid-rows-2 col-span-3 px-10">
                <ReviewDisplay user={user} reviewArr={reviewArr} />
                <ReviewForm user={user} setReviewArr={setReviewArr} />
            </div>
        </div>
    );
}
 
export default DragonBallZ;