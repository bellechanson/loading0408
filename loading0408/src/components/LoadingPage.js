import { useEffect } from 'react';

function LoadingPage() {
    useEffect(() => {
        const sendReservationAndNavigate = async () => {
            try {
                const dummyReservation = {
                    uName: "홍길동",
                    pTitle: "오페라의 유령",
                    pPlace: "예술의전당",
                    pDate: "2025-04-12",
                    pPrice: 120000
                };
                /* 실제 사용 입력값으로 교체!!!!
                const reservation = {
                    uName: userInput.name,
                    pTitle: selectedShow.title,
                    pPlace: selectedShow.place,
                    pDate: selectedDate,
                    pPrice: selectedPrice
                };
                */

                const response = await fetch("http://localhost:8787/select", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dummyReservation)
                });

                const key = await response.text();

                // 예약 페이지로 key 포함해서 이동
                setTimeout(() => {
                    window.location.href = `/reservation?key=${key}`;
                }, 2000);
            } catch (error) {
                console.error("예약 요청 실패:", error);
            }
        };

        sendReservationAndNavigate();
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h2>로딩 중입니다...</h2>
            <p>예매 정보를 전송하고 있습니다</p>
        </div>
    );
}

export default LoadingPage;
