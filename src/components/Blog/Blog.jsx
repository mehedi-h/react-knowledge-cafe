import { BsBookmarkStar } from 'react-icons/bs';

const Blog = ({blog, handleAddBookmarks, handleMarkRead}) => {
    const {id, title, cover, reading_time, author, author_img, posted_date,
        hashtags} = blog
    return (
        <div className="mb-5 md:mb-10 lg:mb-14">
            <img className="w-full rounded-md" src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between items-center my-2 md:my-3 lg:my-4">
                <div className="flex justify-between items-center gap-x-4">
                    <img className="w-8 md:w-14" src={author_img} alt="This is Author Image" />
                    <div>
                        <h4 className="text-base md:text-lg font-semibold md:font-bold">{author}</h4>
                        <p><small className='text-xs md:text-sm lg:text-base'>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span className='mx-2 text-sm md:text-base lg:text-lg'>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmarks(blog)}><BsBookmarkStar></BsBookmarkStar></button>
                </div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium md:font-semibold lg:font-bold my-1 md:my-2">{title}</h2>
            <p> 
                {
                    hashtags.map((hash, idx) => <span className='text-sm md:text-base lg:text-lg' key={idx}><a href="#">#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkRead(reading_time, id)} className='text-violet-700 underline text-sm  md:text-base'>Mark As Read</button>
        </div>
    );
};

export default Blog;