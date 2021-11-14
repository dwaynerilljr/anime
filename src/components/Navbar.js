import { useState } from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import Searchbar from './Searchbar';

const Navbar = ({user, setUser}) => {
    const [navbar, setNavbar] = useState(false)
    const history = useHistory();
    
    const changeBackgroundOnScroll = () => {
        if (window.scrollY >= 1) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackgroundOnScroll)

    const logUserOut = () => {
        setUser({...user, loggedIn: false, username: '', password: ''});
        history.push('/login')
        console.log(user)
    }

    return (
        <nav className={navbar ?
            'flex text-white ease-in duration-300 bg-primary text-lg py-3 px-3 fixed w-full font-bold items-center z-50'
            : "flex text-secondary ease-in duration-300 text-lg border-b-2 border-secondary py-3 px-3 fixed w-full font-bold items-center z-50"
        }>
            <NavLink className="mr-10 ml-20 hover:text-ternary text-2xl font-bangers" exact to={'/'}><strong>RateThatAnime</strong></NavLink>
            <NavLink activeClassName="text-ternary" className="hover:text-ternary mr-10" to={'/anime'}>
                Anime
            </NavLink>
            <NavLink activeClassName="text-ternary" className="hover:text-ternary mr-10" to={'/write-review'}>Manga</NavLink>
            <NavLink activeClassName="text-ternary" className="hover:text-ternary" to={'/play'}>Light Novels</NavLink>
            <div className="ml-auto flex items-center text-base">
                <Searchbar />
                {user.loggedIn ? <button onClick={logUserOut} className="text-white hover:bg-ternary p-2 mr-10 rounded-md bg-secondary">Sign Out</button> : <NavLink className="text-white hover:bg-ternary py-2 px-4 mr-2 rounded-md bg-secondary" to={'/register'}>Register</NavLink>}
                {user.loggedIn ? <NavLink className="flex items-center hover:text-ternary text-lg mr-2" to={'/admin/upload'}><FaUserCircle size={26} className="mr-1" /> {user.username}</NavLink> : <NavLink className="flex text-secondary border border-secondary items-center hover:bg-ternary py-2 px-3 rounded-md bg-white hover:text-white" to={'/login'}><MdOutlineLogin size={20} className="mr-1" />Log In</NavLink>}
            </div>
        </nav>
    );
}
 
export default Navbar;