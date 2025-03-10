import React, { useState, useEffect } from 'react';
import Card from './Card';

const LikedMusic = () => {
    const [likedTracks, setLikedTracks] = useState([]);

    useEffect(() => {
        const storedLikedTracks = JSON.parse(localStorage.getItem('likedTracks')) || [];
        setLikedTracks(storedLikedTracks);
    }, []);

    const handleLike = (track, isLiked) => {
        const updatedLikedTracks = isLiked
            ? [...likedTracks, track]
            : likedTracks.filter(t => t.id !== track.id);

        // Güncellenmiş listeyi localStorage'e kaydedin
        localStorage.setItem('likedTracks', JSON.stringify(updatedLikedTracks));
        setLikedTracks(updatedLikedTracks);
    };

    return (
        <div className="container">
            <h1 className="my-4">Liked Music</h1>
            <div className="row">
                {likedTracks.length > 0 ? (
                    likedTracks.map((track) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={track.id}>
                            <Card track={track} onLike={handleLike} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No liked music found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikedMusic;
