import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex bg-blue text-white text-lg py-2 px-3">
            <Link className="pr-2" to={'/'}>Home</Link>
            <Link to={'/write-review'}>Write Review</Link>
            <div className="ml-auto">
                <Link to={'/login'}>Login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;