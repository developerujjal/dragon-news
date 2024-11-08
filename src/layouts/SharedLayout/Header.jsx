import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {

    return (
        <div className="text-center pt-8 pb-6 md:px-72">
            <div className='mb-3.5'>
                <img src={logo} alt="" className='mx-auto my-0' />
            </div>
            <div>
                <p className='text-[#DADADA] font-normal mb-1 text-base'><span>Journalism Without Fear or Favour</span></p>
                <p className='text-[#706F6F] text-[17px]'><span>{moment().format("dddd, MMMM D, YYYY")}</span></p>
            </div>
        </div>
    );
};

export default Header;

// text-[#403F3F]