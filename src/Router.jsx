import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

 function RouterPage() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*id parametresi ekleyerek datadaki id ye göre path oluşturma yaptık */}
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </Router>
    </>
  );
};
export default RouterPage