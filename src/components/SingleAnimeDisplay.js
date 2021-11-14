const SingleAnimeDisplay = ({ anime, handleClick }) => {
    

    return (
        <div>
            <p>{anime.name}</p>
            <img src={anime.image} alt="" />
            {/* <Link to={`/play/${anime.id}`} onClick={handleClick}>Select this anime</Link> */}
            <button onClick={handleClick}>Select this anime</button>
        </div>
    )
}

export default SingleAnimeDisplay