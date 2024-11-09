
const BlogsCard = () => {
    return (
        <div className="rounded-md shadow-md w-full">
            <div className="flex items-center justify-between p-3.5 bg-[#F3F3F3]">
                <div className="flex items-center justify-center space-x-2">
                    <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-9 h-9 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none mb-1">Awlad Hossain</h2>
                        <span className="inline-block text-sm leading-none text-[#706F6F]">2022-08-21</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#706F6F" className="cursor-pointer"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#706F6F" className="ml-2 cursor-pointer"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" /></svg>
                </div>
            </div>
            <div className="p-4">
                <img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full h-72 rounded-md dark:bg-gray-500" />
            </div>
        </div>
    );
};

export default BlogsCard;