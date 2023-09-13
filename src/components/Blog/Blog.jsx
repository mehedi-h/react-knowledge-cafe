import { BsBookmarkStar } from 'react-icons/bs';

const Blog = ({blog, handleAddBookmarks}) => {
    const {title, cover, reading_time, author, author_img, posted_date,
        hashtags} = blog
    return (
        <div className="mb-5 md:mb-10 lg:mb-14">
            <img className="w-full rounded-md" src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between items-center my-2 md:my-4 lg:my-6">
                <div className="flex justify-between items-center gap-x-4">
                    <img className="w-14" src={author_img} alt="This is Author Image" />
                    <div>
                        <h4 className="text-base md:text-lg font-medium md:font-semibold">{author}</h4>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span className='mx-2'>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmarks(blog)}><BsBookmarkStar></BsBookmarkStar></button>
                </div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium md:font-semibold lg:font-bold my-1 md:my-2">{title}</h2>
            <p> 
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;