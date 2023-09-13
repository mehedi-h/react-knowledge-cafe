import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center y-3 md:py-6 lg:py-10 md:max-w-5xl lg:max-w-6xl mx-auto border-b-2'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-medium md:font-semibold lg:font-bold'>Knowledge Cafeteria</h1>
            <img src={profile} alt="Profile Photo" />
        </header>
    );
};

export default Header;