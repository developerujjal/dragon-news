import { Link } from "react-router-dom";
import NavBar from "../layouts/SharedLayout/NavBar";

const SignUpForm = () => {
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
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
                                    <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
                                    <p className="mt-2 text-gray-500">Sign Up below to Create a new account</p>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={handleSignUp}>
                                        <div className="relative mt-6">
                                            <input type="text" name="name" id="name" placeholder="Full Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                            <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Your Name</label>
                                        </div>
                                        <div className="relative mt-6">
                                            <input type="text" name="photo" id="photo" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                            <label htmlFor="photo" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Photo URL</label>
                                        </div>
                                        <div className="relative mt-6">
                                            <input type="email" name="email" required id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                            <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                        </div>

                                        <div className="relative mt-6">
                                            <input type="password" name="password" required id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                            <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                        </div>
                                        <div className="flex items-center mt-6">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="text-[#706F6F] ml-3 block text-sm">
                                                <span className="font-medium">Accept</span> <Link className="font-semibold hover:underline ml-1 cursor-pointer">Terms and Conditions</Link>
                                            </label>
                                        </div>
                                        <div className="my-6">
                                            <button type="submit" className="w-full rounded-md bg-[#403F3F] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign Up</button>
                                        </div>
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

export default SignUpForm;