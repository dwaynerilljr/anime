const ReviewDisplay = ({ reviewArr, id, animes }) => {
    
    return (
        <div>
            {reviewArr.map(review => {
                return (
                    <div className="bg-gray-100 text-blue-400 p-2">
                        <p className={review.rating > 5 ? "text-green-500" : "text-red-500"}>Rating: {review.rating} </p>
                        <p>Review: {review.comment}</p>
                        <p>Posted on: {review.date} by {review.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ReviewDisplay