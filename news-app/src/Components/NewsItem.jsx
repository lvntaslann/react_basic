const NewsItem = ({ title, description, src, url }) => {
    return (
        <div 
            className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-3 justify-content-center" 
            style={{ width: "345px", height: "450px" }}
        >
            <img src={src} style={{ height: "150px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p 
                    className="card-text" 
                    style={{ 
                        height: "auto",
                        overflow: "hidden", 
                        textOverflow: "ellipsis", 
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        lineClamp: 2,
                        whiteSpace: "normal"
                    }}
                >
                    {description ? description.slice(0, 90) : "News custom description"}
                </p>
                <a href={url} className="btn btn-primary">
                    Read more
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
