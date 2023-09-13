import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            <h3 className="text-base md:text-lg lg:text-xl font-medium md:font-semibold lg:font-bold">Bookmark Blog : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }    
        </div>
    );
};

export default Bookmarks;