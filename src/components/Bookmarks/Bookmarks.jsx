import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center mb-5 md:ml-5">
            <div className="text-violet-600 bg-gray-200 text-center py-3 md:py-4 md:mb-5 rounded-lg text-base md:text-lg lg:text-xl font-semibold md:font-bold">
                <h3 className="">Reading Time : {readingTime} Min</h3>
            </div>
            <div className="bg-gray-200 rounded-lg py-2 md:py-5 my-4">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold md:font-bold">Bookmark Blog : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}>
                    </Bookmark>)
                }
            </div>    
        </div>
    );
};

export default Bookmarks;