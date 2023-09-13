import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => { 
    const {title} = bookmark;

    return (
        <div className='bg-gray-100 p-4 m-4 rounded-md'>
            <h4 className='text-left text-sm md:text-lg lg:text-base font-semibold md:font-bold'>{title}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;