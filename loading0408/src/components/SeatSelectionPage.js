import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function SeatSelectionPage() {
    const [searchParams] = useSearchParams();
    const rId = searchParams.get("rId");
    const [reservation, setReservation] = useState(null);
    useEffect(() => {
        // 로딩 페이지에서 localStorage로 저장해둔 데이터 불러오기
        const storedData = localStorage.getItem("reservationData");
        if (storedData) {
            setReservation(JSON.parse(storedData));
        } else {
            // 혹시 로딩페이지 없이 직접 들어온 경우를 대비한 fetch
            fetch(`http://localhost:8787/reservations?rId=${rId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) setReservation(data[0]);
                });
        }
    }, [rId]);
    if (!reservation) return <div>로딩 중...</div>;
    return (
        <div style={{ padding: "30px" }}>
            <h2>좌석 선택 페이지</h2>
            <p>예매자: {reservation.uName}</p>
            <p>공연명: {reservation.pTitle}</p>
            <p>장소: {reservation.pPlace}</p>
            <p>날짜: {reservation.pDate}</p>
            <p>가격: {reservation.pPrice}원</p>
            <p>rId: {reservation.rId}</p>
        </div>
    );
}
export default SeatSelectionPage;
