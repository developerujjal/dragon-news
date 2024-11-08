import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="text-center pt-8 pb-6 md:px-72">
            <div className='mb-3.5'>
                <img src={logo} alt="" className='mx-auto my-0' />
            </div>
            <div>
                <p className='text-[#DADADA] font-normal mb-1 text-base'><span>Journalism Without Fear or Favour</span></p>
                <p className='text-[#706F6F] text-[17px]'><span><span className='text-[#403F3F]'>Sunday,</span> November 27, 2025</span></p>
            </div>
        </div>
    );
};

export default Header;