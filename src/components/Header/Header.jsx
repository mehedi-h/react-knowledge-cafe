import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-3 md:py-6 lg:py-10 md:max-w-5xl lg:max-w-6xl mx-4 md:mx-14 lg:mx-36 border-b-2'>
            <h1 className='text-lg md:text-2xl lg:text-4xl font-semibold md:font-bold'>Knowledge Cafeteria</h1>
            <img className='w-8 md:w-12 lg:w-16' src={profile} alt="Profile Photo" />
        </header>
    );
};

export default Header;