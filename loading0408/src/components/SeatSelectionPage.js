import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SeatSelectionPage() {
    const [searchParams] = useSearchParams();
    const key = searchParams.get("key"); // ✅ key 파라미터 받기

    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        if (!key) return;

        // ✅ key로 서버에서 예약 정보 조회
        fetch(`http://localhost:8787/reservation?key=${key}`)
            .then(res => res.json())
            .then(data => setReservation(data))
            .catch(err =>
                console.error("예약 정보 불러오기 실패", err));
                alert("예약 정보를 불러오는 데 실패했습니다. 다시 시도해주세요.");
    }, [key]);

    if (!reservation) return <div>로딩 중...</div>;

    return (
        <div style={{ padding: "30px" }}>
            <h2>좌석 선택 페이지</h2>
            <p>예매자: {reservation.uName}</p>
            <p>공연명: {reservation.pTitle}</p>
            <p>장소: {reservation.pPlace}</p>
            <p>날짜: {reservation.pDate}</p>
            <p>가격: {reservation.pPrice}원</p>
        </div>
    );
}

export default SeatSelectionPage;
