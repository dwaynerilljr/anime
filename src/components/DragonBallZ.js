import { useEffect, useState, useLayoutEffect, React } from 'react';
import { useFetch } from '../hooks/useFetch';
import ReviewForm from './ReviewForm'
import ReviewDisplay from './ReviewDisplay';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MdOutlineDoubleArrow } from 'react-icons/md'

const DragonBallZ = ({user, animes}) => {
    let { id } = useParams();
    const url = 'http://localhost:3000/animes/' + id
    const { data: anime, isPending, error } = useFetch(url)
    const [reviewArr, setReviewArr] = useState([]);
    const history = useHistory();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const addReview = (review) => {
        setReviewArr((prevReviewArr) => {
            return [...prevReviewArr, review]
        })
        anime.comments.push(review)
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/anime')
            }, 2000)
        }
    }, [error, history])

    // console.log(animes[Number(id)].comments)
    
    return (
        <div className="h-full grid grid-cols-10 pt-52">
            <div className='grid grid-cols-3 col-start-2 col-span-8 mb-20'>
                <div className="flex w-full justify-self-center items-center col-span-3 font-semibold bg-gray-100 h-60 p-4 text-primary text-lg">
                    <Link to="/" className='hover:text-secondary'>Home</Link>
                    <div className='mx-2'><MdOutlineDoubleArrow /></div>
                    <Link to="/anime" className='hover:text-secondary'>Anime</Link>
                    <span className='mx-2'><MdOutlineDoubleArrow /></span>
                    <span className='text-ternary font-light'>{anime && anime.name}</span>
                </div>
                <div className="col-span-4 text-center font-bangers text-7xl text-primary my-5">{anime && anime.name}</div>
                <section className="border grid-cols-4 divide-x divide-secondary col-span-4 grid border-secondary">
                    <div className='col-span-1 pt-4 flex'>
                        {error && <div>{error}</div>}
                        {anime && (
                            <div className="m-3" key={anime.id}>
                                <img src={anime.image} alt={anime.name} className="" />
                                <ul>
                                    <h1 className="text-center text-2xl">Info:</h1>
                                    <li>Name: {anime.name}</li>
                                    <li>Type: {anime.type}</li>
                                    <li>Demographic: {anime.demographic}</li>
                                    <li>Seasons: {anime.seasons}</li>
                                    <li>Average Score: {Math.round(reviewArr.reduce((a, { rating }) => a + rating / anime.comments.length, 0) * 100)/ 100}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {anime && (
                        <div className="flex flex-col col-span-3 p-4">
                            <header className="self-center text-4xl font-bangers text-secondary">Reviews</header>
                            <ReviewDisplay anime={anime} user={user} />
                            {user.loggedIn ? <ReviewForm anime={anime} user={user} addReview={addReview} /> : <Link to='/login' className="my-2 p-2 bg-primary hover:bg-secondary text-white rounded-sm self-center">Login to leave a Review!</Link>}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
 
export default DragonBallZ;