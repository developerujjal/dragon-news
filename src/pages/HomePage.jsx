import { useLoaderData } from "react-router-dom";
import BlogsCard from "../layouts/BlogsCard";
import LeftSideNav from "../layouts/LeftSideNav";
import Header from "../layouts/SharedLayout/Header";
import NavBar from "../layouts/SharedLayout/NavBar";
import RightSideNav from "../layouts/SharedLayout/RightSideNav";
import Marquee from "react-fast-marquee";

const HomePage = () => {

    const newsData = useLoaderData();

    return (
        <>
            <header>
                <div className="container px-3 mx-auto my-0">
                    <Header />
                    <div className="bg-[#F3F3F3]">
                        <div className="flex md:items-center gap-4 px-4 py-3">
                            <button className="bg-[#D72050] text-white px-4 py-1.5 font-medium">Latest</button>
                            <Marquee pauseOnHover={true}>
                                <p className="font-semibold text-[#403F3F] cursor-pointer text-[15px]"><span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span></p>
                            </Marquee>

                        </div>
                    </div>
                    <NavBar />
                </div>
            </header>
            <main>
                <section>
                    <div className="container px-3 mx-auto my-0">
                        <div className="grid col-span-1 md:grid-cols-4 gap-x-6">
                            <div>
                                <LeftSideNav />
                            </div>
                            <div className="col-span-2 ">
                                <div className="mb-5">
                                    <h3 className="text-[21px] font-bold text-[#403F3F]">Dragon News Home</h3>
                                </div>
                                <div>
                                    {
                                        newsData.map((newsItem) => <BlogsCard newsItem={newsItem} key={newsItem._id} />)
                                    }
                                </div>
                            </div>
                            <div>
                                <RightSideNav />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;