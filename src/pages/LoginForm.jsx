import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../layouts/SharedLayout/NavBar";
import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";

const LoginForm = () => {

    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signInUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <>
            <header>
                <div className="container px-3 mx-auto my-0">
                    <NavBar signUpMargin={true} />
                </div>
            </header>

            <main>
                <section>
                    <div className="container px-3 mx-auto my-0">
                        <div
                            className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                            <div className="w-full">
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                                    <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={handleSignIn}>
                                        <div className="relative mt-6">
                                            <input type="email" name="email" id="email" required placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                            <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                        </div>
                                        <div className="relative mt-6">
                                            <input type="password" name="password" required id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                            <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                        </div>
                                        <div className="my-6">
                                            <button type="submit" className="w-full rounded-md bg-[#403F3F] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                                        </div>
                                        <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                            <Link to={'/sign-up'}
                                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"> Sign
                                                up
                                            </Link>.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default LoginForm;