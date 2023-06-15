import { Link } from "react-router-dom";
import { SiDatadog } from "react-icons/si";

const NavBar = () => {
    return (
        <nav className="flex justify-between pt-5 pb-10">
            <Link to="/" className="ml-5">
                <SiDatadog size={40}/>
            </Link>
            <Link to="/" className="hover:text-white hover:border hover:border-maroon hover:bg-maroon transition duration-300 border border-black rounded px-2 py-2">Home</Link>
            <Link to="/products" className="border border-black rounded bg-black text-white px-2 py-2 mr-10">Products</Link>
        </nav>
    );
}
 
export default NavBar;