const CardBlog = ({ article }) => {
    const { id, title, image, content } = article
    return (
        <div key={id} className="border-2 border-[var(--secondary)] w-[95%] mx-auto mt-4 mb-4 shadow-lg h-[92%]">
            <div className="">
                <img src={`http://localhost:3000/blog/image/${image}`} alt={`${image}`} className='object-cover py-2 px-2' />
            </div>
            <div className="py-6 px-4">
                <h2 className="py-1 font-extrabold">{title}</h2>
                <p className="text-sm font-bold">{content}</p>
            </div>
        </div>
    )
}

export default CardBlog;