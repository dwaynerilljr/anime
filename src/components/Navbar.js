import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex text-white bg-teal py-3 px-3 fixed w-full items-center">
            <Link className="mr-10 ml-20 hover:text-dark-blue text-xl" to={'/'}><strong>RateThatAnime</strong></Link>
            <Link className="hover:text-dark-blue mr-10" to={'/anime'}>Anime</Link>
            <Link className="hover:text-dark-blue mr-10" to={'/write-review'}>Manga</Link>
            <Link className="hover:text-dark-blue">Light Novels</Link>
            <div className="ml-auto">
                <Link className="text-gentle-blue hover:bg-blue-100 py-2 px-10 mr-4 rounded-md bg-white" to={'/login'}>Log in</Link>
                <Link className="text-white hover:bg-dark-blue py-2 px-10 mr-10 rounded-md bg-gentle-blue" to={'/register'}>Register</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;