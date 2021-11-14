import React from "react"

const ReviewDisplay = ({ anime, user }) => {
    
    console.log(anime.comments)

    return (
        <div className="mb-3">
            {anime.comments.length === 0 && <div className="opacity-60 text-secondary text-center">Nothing here yet! Let's go ahead and change that :)</div>}
            {anime && anime.comments.map(review => {
                return (
                    <React.Fragment key={review.id}>
                        <div className="text-primary p-4 text-lg">
                            <div className="p-4 bg-light-primary flex flex-col text-lg">
                                <p className="text-2xl text-secondary font-bangers">Rating: {review.rating} </p>
                                <p>Review: {review.comment}</p>
                                <p>Posted on: {review.date} by {review.author}</p>
                                {review.author === user.username && 
                                    <div className="flex self-end text-base gap-2">
                                        <button className="text-white bg-primary hover:bg-ternary p-1.5 rounded-md text-base">Edit</button>
                                        <button className="text-white bg-secondary hover:bg-ternary p-1.5 rounded-md text-base">Delete</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <hr className="bg-secondary mx-10 h-0.5 bg-opacity-40" />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ReviewDisplay