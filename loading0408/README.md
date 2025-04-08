# LoadingPage.js 안쪽 벡엔드 연동 정보

1. 백엔드에서 최신 예약 정보 fetch
const response = await fetch('http://localhost:8787/api/reservation/latest');
const data = await response.json();

2. 받은 데이터를 localStorage에 저장 (선택)
localStorage.setItem("reservationData", JSON.stringify(data));

3. 받아온 rId로 페이지 이동
const rId = data.rId;
