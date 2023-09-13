

const Blog = ({blog}) => {
    const {title, cover, reading_time, author, author_img, posted_date,
        hashtags} = blog
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-x-4">
                    <img className="w-14" src={author_img} alt="This is Author Image" />
                    <div>
                        <h4 className="text-base md:text-lg font-medium md:font-semibold">{author}</h4>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium md:font-semibold lg:font-bold">{title}</h2>
            <p> 
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;