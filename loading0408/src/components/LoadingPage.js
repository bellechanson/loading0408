import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            try {
                // 1. 백엔드에서 최신 예약 정보 fetch
                const response = await fetch('http://localhost:8787/api/reservation/latest');
                const data = await response.json();
                // 2. 받은 데이터를 localStorage에 저장 (선택)
                localStorage.setItem("reservationData", JSON.stringify(data));
                // 3. 받아온 rId로 페이지 이동
                const rId = data.rId;

                setTimeout(() => {
                    navigate(`/reservation?rId=${rId}`);
                }, 2000); // 로딩 애니메이션 시간
            } catch (error) {
                console.error("데이터 로딩 실패:", error);
            }
        };
        fetchData();
    }, [navigate]);
    return (
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h2>로딩 중입니다...</h2>
            <p>예매 정보를 불러오는 중입니다</p>
        </div>
    );
}
export default LoadingPage;



/*
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // 더미 데이터 생성 (백엔드 없이 테스트용)
        const dummyData = {
            rId: "12345",
            uName: "홍길동",
            pTitle: "뮤지컬 <레미제라블>",
            pPlace: "예술의전당",
            pDate: "2025-05-10",
            pPrice: 90000
        };

        // 1. localStorage에 저장
        localStorage.setItem("reservationData", JSON.stringify(dummyData));

        // 2. 페이지 이동
        setTimeout(() => {
            navigate(`/reservation?rId=${dummyData.rId}`);
        }, 2000); // 로딩 애니메이션 시간
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h2>로딩 중입니다...</h2>
            <p>예매 정보를 불러오는 중입니다</p>
        </div>
    );
}

export default LoadingPage;
 */
