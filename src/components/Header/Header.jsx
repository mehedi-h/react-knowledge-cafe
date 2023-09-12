import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center lg:p-7 lg:mx-16 border-b-2'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-medium md:font-semibold lg:font-bold'>Knowledge Cafeteria</h1>
            <img src={profile} alt="Profile Photo" />
        </header>
    );
};

export default Header;