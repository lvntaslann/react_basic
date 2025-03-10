import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const MyNavBar = () => {
    const [tracks, setTracks] = useState([]);
    const [likedTracks, setLikedTracks] = useState([]);
    const [keyword, setKeyword] = useState("second");
    const [isLoading, setIsLoading] = useState(false);

    const getTracks = async () => {
        setIsLoading(true);
        try {
            let data = await fetch(`https://v1.nocodeapi.com/leventaslan/spotify/ofhmHlEUAnEOwFSJ/search?q=${keyword}&type=track`);
            let convertedData = await data.json();
            setTracks(convertedData.tracks.items);
        } catch (error) {
            console.error('Error fetching tracks:', error);
        }
        setIsLoading(false);
    };

    const handleLike = (track, isLiked) => {
        setLikedTracks((prevLikedTracks) => {
            const updatedLikedTracks = isLiked
                ? [...prevLikedTracks, track]
                : prevLikedTracks.filter(t => t.id !== track.id);

            // Save to local storage
            localStorage.setItem('likedTracks', JSON.stringify(updatedLikedTracks));
            return updatedLikedTracks;
        });
    };

    useEffect(() => {
        const storedLikedTracks = JSON.parse(localStorage.getItem('likedTracks')) || [];
        setLikedTracks(storedLikedTracks);
    }, []);

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand">LEV-music</a>
                    <div
                        className="collapse navbar-collapse d-flex justify-content-center"
                        id="navbarSupportedContent"
                    >
                        <input
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                            className="form-control me-2 w-75"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            onClick={getTracks}
                            className="btn btn-outline-success"
                        >
                            Search
                        </button>
                        <Link to="/liked-music" className="btn btn-outline-info ms-2">
                            Liked Music
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="container">
                {isLoading ? (
                    <div className="row">
                        <div className='col-12 py-5 text-center'>
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {tracks.map((track) => (
                            <Card key={track.id} track={track} onLike={handleLike} likedTracks={likedTracks} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MyNavBar;
