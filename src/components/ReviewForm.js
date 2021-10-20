import { useState } from "react"
import ReviewDisplay from "./ReviewDisplay";

const ReviewForm = ( {user} ) => {
    const [reviewInfo, setReviewInfo] = useState({
        rating: '',
        thoughts: '',
        user: user.username,
        date: new Date().toLocaleDateString()
    });
    const [reviewArr, setReviewArr] = useState([])

    const handleChange = e => {
        setReviewInfo({...reviewInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        setReviewArr(arr => [...arr, reviewInfo]);
        e.preventDefault();
    }


    return (
        <form onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col items-center" action="submit">
            <label htmlFor="rating">Rate this Title (out of 10 stars)</label>
            <input className="border-2 border-teal-200 rounded-md" defaultValue={reviewInfo.rating} type="text" placeholder="rating" name="rating"/>
            <label htmlFor="review">Leave a Review:</label>
            <textarea name="thoughts" cols="30" rows="10" defaultValue={reviewInfo.thoughts} placeholder="Your review..."></textarea>
            <button className="p-2 bg-teal hover:bg-blue text-white rounded-sm" type="submit">Submit Review</button>
            <ReviewDisplay user={user} reviewArr={reviewArr} />
        </form>
    )
}

export default ReviewForm