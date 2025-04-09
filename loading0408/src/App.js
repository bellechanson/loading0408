//
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
// import LoadingPage from './components/LoadingPage';
// import SeatSelectionPage from './components/SeatSelectionPage';
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route path="/loading" element={<LoadingPage />} />
//                 <Route path="/reservation" element={<SeatSelectionPage />} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;

// 팝업전용구조
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import SelectSeat from "./components/SelectSeat";

function App() {
    return (
        <Router>
            <Routes>
                {/* 팝업으로만 띄우는 로딩 페이지 */}
                <Route path="/" element={<LoadingPage />} />
                {/* 팝업 내에서 이동할 좌석 확인 페이지 */}
                <Route path="/select:key" element={<SelectSeat />} />

            </Routes>
        </Router>
    );
}

export default App;