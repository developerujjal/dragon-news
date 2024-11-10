import { Link } from "react-router-dom";
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import bgImg from '../../assets/bg.png'
import { useContext } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";

const RightSideNav = () => {
    const { userLoginWithGoogle } = useContext(AuthContext)

    const handleGoogleLogIn = () => {
        userLoginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <>
            <div className="mb-5">
                <h3 className="text-[21px] font-bold text-[#403F3F]">Login With</h3>
            </div>
            <div className="mb-14">
                <button
                    onClick={handleGoogleLogIn}
                    type="button"
                    className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm mb-2 tracking-wide text-gray-800 border-2 border-[#403F3F] rounded-md bg-gray-50 hover:bg-gray-100 font-medium hover:border-[#3F7DED] hover:text-[#3F7DED] focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                        <path fill="#fbbd00"
                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                            data-original="#fbbd00" />
                        <path fill="#0f9d58"
                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                            data-original="#0f9d58" />
                        <path fill="#31aa52"
                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                            data-original="#31aa52" />
                        <path fill="#3c79e6"
                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                            data-original="#3c79e6" />
                        <path fill="#cf2d48"
                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                            data-original="#cf2d48" />
                        <path fill="#eb4132"
                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                            data-original="#eb4132" />
                    </svg>
                    Continue with Google
                </button>
                <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border-2 border-[#403F3F] rounded-md bg-gray-50 font-medium hover:bg-gray-100 hover:border-[#3F7DED] hover:text-[#3F7DED] focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    Continue with GitHub
                </button>
            </div>
            <div className="mb-6">
                <h3 className="text-[21px] font-bold text-[#403F3F] mb-5">Find Us On</h3>
                <Link className="flex  items-center text-[#706F6F] px-4 py-3 border rounded-t font-medium">
                    <img className="px-3 py-2 rounded-[60%] bg-[#F3F3F3] mr-3" src={fb} alt="" />
                    Facebook
                </Link>
                <Link className="flex  items-center text-[#706F6F] px-4 py-3 border-x font-medium">
                    <img className="px-[9px] py-[10px] rounded-[60%] bg-[#F3F3F3] mr-3" src={twitter} alt="" />
                    Twitter
                </Link>
                <Link className="flex  items-center text-[#706F6F] px-4 py-3 border rounded-b font-medium">
                    <img className="px-[9px] py-[10px] rounded-[70%] bg-[#F3F3F3] mr-3" src={instagram} alt="" />
                    Instagram
                </Link>
            </div>
            <div className="bg-[#F3F3F3] mb-6">
                <div className="px-3 py-5">
                    <h3 className="text-[21px] font-bold text-[#403F3F] mb-5">Q-Zone</h3>
                    <div>
                        <img className="mb-8 mx-auto" src={swimming} alt="" />
                        <img className="mb-8 mx-auto" src={classImg} alt="" />
                        <img className="mx-auto" src={playGround} alt="" />

                    </div>
                </div>
            </div>
            <div className="w-full">
                <img className="w-full" src={bgImg} alt="" />
            </div>

        </>
    );
};

export default RightSideNav;