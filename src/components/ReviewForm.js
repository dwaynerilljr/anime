import { useState } from "react"

const ReviewForm = ( {user, setReviewArr, animes, id} ) => {
    const [reviewInfo, setReviewInfo] = useState({
        id: animes[Number(id)].comments.length,
        author: user.username,
        rating: '',
        date: new Date().toLocaleDateString(),
        comment: '',
    });

    console.log(animes[Number(id)])

    const handleChange = e => {
        setReviewInfo({...reviewInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        setReviewArr(arr => [...arr, reviewInfo]);
        animes[Number(id)].comments.push(reviewInfo)
        e.preventDefault();
        setReviewInfo({})
    }


    return (
        <div className="flex w-full justify-center">
            <form onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col items-center w-full" action="submit">
                <label htmlFor="rating">Rate this Title (out of 10 stars)</label>
                <input className="border-2 border-teal-200 rounded-md" value={reviewInfo.rating} type="text" placeholder="rating" name="rating"/>
                <label htmlFor="review">Leave a Review:</label>
                <textarea name="comment" className="w-full border-2 border-teal rounded-md" cols="30" rows="10" value={reviewInfo.comment} placeholder="Your review..."></textarea>
                <button className="p-2 bg-teal hover:bg-blue text-white rounded-sm" type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm