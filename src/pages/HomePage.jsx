import Header from "../layouts/SharedLayout/Header";
import NavBar from "../layouts/SharedLayout/NavBar";

const HomePage = () => {
    return (
        <>
            <header>
                <div className="container px-3 mx-auto my-0">
                    <Header />
                    <div className="bg-[#F3F3F3]">
                        <div className="flex md:items-center gap-4 px-4 py-3">
                            <button className="bg-[#D72050] text-white px-4 py-1.5 font-medium">Latest</button>
                            <p className="font-semibold text-[#403F3F] text-[15px]"><span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span></p>
                        </div>
                    </div>
                    <NavBar />
                </div>
            </header>
        </>
    );
};

export default HomePage;