import { useState } from "react"

const ReviewForm = ( {user, addReview, anime} ) => {
    // const [reviewInfo, setReviewInfo] = useState({
    //     id: animes[Number(id)].comments.length,
    //     author: user.username,
    //     rating: '',
    //     date: new Date().toLocaleDateString(),
    //     comment: '',
    // });

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    const resetForm = () => {
        setComment('');
        setRating('');
    }

    const handleSubmit = e => {
        e.preventDefault()

        const review = {
            id: anime.comments.length,
            author: user.username,
            rating: rating,
            date: new Date().toLocaleDateString(),
            comment: comment
        }
        addReview(review);
        console.log(review)
        console.log(anime.comments)
        resetForm();
    }


    return (
        <div className="flex w-full justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full" action="submit">
                <label htmlFor="rating">Rate this Title (out of 10)</label>
                <select className="border-2 border-primary rounded-md p-1 w-1/5" required value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value='' disabled>Choose Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
                <label htmlFor="review" className="w-full flex flex-col text-center my-3">Leave a Review:
                    <textarea 
                        name="comment" 
                        className="w-full border-2 border-primary rounded-md p-1" 
                        cols="30" 
                        rows="10" 
                        onChange={(e) => setComment(e.target.value)} 
                        value={comment} 
                        placeholder="Your review..."
                        required
                    >

                    </textarea>
                </label>
                <button className="p-2 bg-primary hover:bg-secondary text-white rounded-sm" type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm