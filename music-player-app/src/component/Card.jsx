import React, { useState, useEffect } from 'react';

const Card = ({ track, onLike }) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likedTracks = JSON.parse(localStorage.getItem('likedTracks')) || [];
        setIsLiked(likedTracks.some((t) => t.id === track.id));
    }, [track.id]);

    const handleLike = () => {
        const updatedLikedState = !isLiked;
        setIsLiked(updatedLikedState);
        onLike(track, updatedLikedState);
    };

    return (
        <div className="col-lg-3 col-md-4 mb-4">
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={track.album.images[0].url} alt={track.name} />
        <div className="card-body">
            <h5 className="card-title">{track.album.name}</h5>
            <p className="card-text">Artist: {track.album.artists[0].name}</p>
            <p className="card-text">Release date: {track.album.release_date}</p>
            <audio src={track.preview_url} controls className="w-100"></audio>
            <div className="d-flex justify-content-center">
                <button
                    onClick={handleLike}
                    className={`btn ${isLiked ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
                >
                    {isLiked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </div>
    </div>
</div>

    );
};

export default Card;
