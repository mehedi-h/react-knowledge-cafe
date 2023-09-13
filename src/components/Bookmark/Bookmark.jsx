import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => { 
    const {title} = bookmark;

    return (
        <div>
            <h3 className='text-base md:text-lg lg:text-xl font-medium md:font-semibold lg:font-bold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;