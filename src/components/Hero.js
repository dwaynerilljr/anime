import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-screen text-white flex flex-col items-center justify-center" id="hero">
            <h1 className="text-7xl font-bangers mb-2">Welcome to RateThatAnime!</h1>
            <Link className="p-2 bg-primary text-2xl hover:bg-secondary text-white rounded-md cursor-pointer m-2" to={'/anime'}>Browse Anime</Link>
        </div>
    );
}
 
export default Hero;