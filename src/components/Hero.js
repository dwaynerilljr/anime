import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-screen bg-teal text-white flex flex-col items-center justify-center" id="hero">
            <h1 className="text-6xl">Welcome to RateThatAnime!</h1>
            <Link className="p-2 bg-teal text-2xl hover:bg-gentle-blue text-white rounded-sm cursor-pointer m-2" to={'/anime'}>Browse Anime</Link>
        </div>
    );
}
 
export default Hero;