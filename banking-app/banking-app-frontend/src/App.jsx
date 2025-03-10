import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAccount from './component/AddAccount';
import Deposit from './component/Deposit';
import GetAllAccount from './component/GetAllAccount';
import NavigationBar from './component/NavigationBar';
import './index.css';
import HomePage from './screen/HomePage';
import WithDraw from './component/WithDraw';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Anasayfa */}
          <Route path="/get-all-accounts" element={<GetAllAccount />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/deposit/:id" element={<Deposit />} />
          <Route path="/withdraw/:id" element={<WithDraw />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
