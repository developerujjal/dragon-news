import { Link, NavLink } from "react-router-dom";
import UserImg from '../../assets/user.png'
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";

const NavBar = ({ signUpMargin }) => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                console.log("Sign-out successful.")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <nav className={`relative flex items-center justify-between flex-col gap-y-6 sm:h-10 md:justify-center py-6 px-4 mt-4 mb-8 ${signUpMargin ? 'md:mb-8' : 'mb-16'}`}>
            <div className=" flex gap-6 md:gap-0 md:space-x-10 text-[#706F6F]">
                <NavLink
                    to={'/'}
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
                    {
                        user ?
                            <button
                                onClick={handleLogOut}
                                type="button"
                                className="block items-center w-[110px] py-1.5 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#403F3F] hover:bg-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
                            >Log Out</button> :
                            <Link
                                to={'/login'}
                                className="inline-flex items-center px-7 py-1.5 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#403F3F] hover:bg-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
                                Login
                            </Link>
                    }

                </div>
            </div>
        </nav>
    );
};
NavBar.propTypes = {
    signUpMargin: PropTypes.bool
}


export default NavBar;