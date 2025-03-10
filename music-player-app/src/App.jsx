import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavBar from './component/MyNavBar';  // Updated path
import LikedMusic from './component/LikedMusic';  // Update this path if necessary
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MyNavBar />} />
                <Route path="/liked-music" element={<LikedMusic />} />
            </Routes>
        </Router>
    );
}

export default App;
