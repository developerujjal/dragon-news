import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsRightNav from "./newsRightNav";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    const [newsSports, setNewsSports] = useState([])

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('./rightNavNews.json')
            .then(res => res.json())
            .then(data => setNewsSports(data))
    }, [])


    return (
        <>
            <div className="mb-5">
                <h3 className="text-[21px] font-bold text-[#403F3F]">All Category</h3>
            </div>
            <div className="flex flex-col justify-start ml-9 ">
                {
                    categories.map(category => <NavLink key={category.id} className={`font-medium text-[#403F3F] px-4 py-3 pl-10 rounded-md mb-2 hover:bg-[#E7E7E7]`}>{category.name}</NavLink>)
                }

            </div>
            <div className="mt-4">
                {
                    newsSports.map(news => <NewsRightNav leftSideNews={news} key={news.id}></NewsRightNav>)
                }
            </div>
        </>
    );
};

export default LeftSideNav;

// bg-[#E7E7E7]