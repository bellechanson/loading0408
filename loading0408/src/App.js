import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import SeatSelectionPage from './components/SeatSelectionPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/loading" />} />
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/reservation" element={<SeatSelectionPage />} />
            </Routes>
        </Router>
    );
}

export default App;
