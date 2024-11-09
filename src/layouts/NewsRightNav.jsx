import PropTypes from 'prop-types';

const NewsRightNav = ({ leftSideNews }) => {

    const { img, title, category, date } = leftSideNews

    return (
        <div className="w-full mb-2">
            <div className="w-full">
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="py-4">
                <h3 className="text-[17px] font-medium mb-2 text-[#403F3F]">{title}</h3>
                <div className="flex items-center gap-4">
                    <span className="font-medium text-[#403F3F]">{category}</span>
                    <div className="flex items-center justify-center gap-1 text-[#9F9F9F]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#9F9F9F"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        <p className="text-[15px] font-normal">
                            <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

NewsRightNav.propTypes = {
    leftSideNews: PropTypes.object
}

export default NewsRightNav;