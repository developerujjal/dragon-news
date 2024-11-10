import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../layouts/SharedLayout/Header";
import RightSideNav from "../layouts/SharedLayout/RightSideNav";
import NavBar from "../layouts/SharedLayout/NavBar";


const NewsDetails = () => {
    const { id } = useParams();
    const datas = useLoaderData()
    const navigate = useNavigate()

    const getMatch = datas.find(item => item._id === id)
    console.log(getMatch)
    const {
        image_url,
        title,
        details,
    } = getMatch;

    const handleBack = () => {
        navigate('/')
    }


    return (
        <>
            <header>
                <div className="container px-3 mx-auto my-0">
                    <Header />
                    <NavBar />
                </div>
            </header>

            <main>
                <div className="container px-3 mx-auto my-0">
                    <div className="grid col-span-1 md:grid-cols-4">
                        <div className=" md:col-span-3 md:mr-10">
                            <div className="flex items-center gap-x-3 mb-5">
                                <svg
                                    onClick={handleBack}
                                    xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#706F6F" className="cursor-pointer"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                <h3 className="text-[21px] font-bold text-[#403F3F]">Dragon News</h3>
                            </div>
                            <div className="p-4 md:px-7 md:py-8 border">

                                <img src={image_url} alt="" className="object-cover object-center w-full h-52 md:h-2/4 rounded-md mb-8 dark:bg-gray-500" />
                                <h2 className="text-[#403F3F] font-bold text-xl md:text-2xl mb-5">{title}</h2>
                                <div className="mb-7">
                                    <p className="text-[#706F6F] text-base md:text-[17px] leading-7">{details}</p>

                                </div>
                                <div>
                                    <button type="button"
                                        className="px-5 py-2.5 flex items-center rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-[#D72050] hover:bg-transparent text-white hover:text-[#3F7DED] transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#403F3F" className="mr-2 hover:fill-[#D72050]"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>

                                        All news in this category</button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <RightSideNav />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NewsDetails;