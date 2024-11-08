import { Link, NavLink } from "react-router-dom";
import UserImg from '../../assets/user.png'

const NavBar = () => {
    return (
        <nav className="relative flex items-center justify-between flex-col gap-y-6 sm:h-10 md:justify-center py-6 px-4 mt-4">
            <div className=" flex gap-6 md:gap-0 md:space-x-10 text-[#706F6F]">
                <NavLink
                    className="font-medium hover:text-gray-900 transition duration-150 ease-in-out">Home</NavLink>
                <NavLink
                    className="font-medium hover:text-gray-900 transition duration-150 ease-in-out">About</NavLink>
                <NavLink
                    className="font-medium hover:text-gray-900 transition duration-150 ease-in-out">Career</NavLink>

            </div>
            <div className=" md:absolute flex gap-x-1.5 md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="w-full">
                    <img src={UserImg} alt="" className="cursor-pointer w-[85%]" />
                </div>

                <div className="rounded-md shadow">
                    <Link className="inline-flex items-center px-7 py-1.5 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#403F3F] hover:bg-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;