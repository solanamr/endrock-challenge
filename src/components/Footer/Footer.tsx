import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="border-t border-lightGrey mt-20 opacity-80">
            <div className="flex justify-center">
                <p className="mr-5 pt-2">Develop by SR - All Rights Reserved Ⓒ </p>
                <a href="https://www.facebook.com" target="_blank" className="py-2 mr-5">
                    <BsFacebook size={24} color="blue"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="py-2">
                    <BsInstagram size={24} color="maroon"/>
                </a>
            </div>
        </footer>
    );
}
 
export default Footer;