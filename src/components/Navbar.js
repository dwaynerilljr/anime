import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <nav className="flex text-white bg-teal py-3 px-3 fixed w-full items-center z-50">
            <Link className="mr-10 ml-20 hover:text-dark-blue text-xl" to={'/'}><strong>RateThatAnime</strong></Link>
            <Link className="hover:text-dark-blue mr-10" to={'/anime'} onMouseOver={showDropdown}>
                Anime
                {/* {dropdown ? 
                <ul className="absolute bg-teal text-white p-3">
                    <li>Anime</li>
                    <li>Top Anime</li>
                    <li>Best Anime</li>
                </ul> 
                : null} */}
            </Link>
            <Link className="hover:text-dark-blue mr-10" to={'/write-review'}>Manga</Link>
            <Link className="hover:text-dark-blue">Light Novels</Link>
            <div className="ml-auto flex">
                <Link className="flex text-gentle-blue items-center hover:bg-blue-100 py-2 px-10 mr-4 rounded-md bg-white" to={'/login'}><MdOutlineLogin size={20} className="mr-1" />Log In</Link>
                <Link className="text-white hover:bg-dark-blue py-2 px-10 mr-10 rounded-md bg-gentle-blue" to={'/register'}>Register</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;