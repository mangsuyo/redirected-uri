import React, { useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const redirectToApp = () => {
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams.get("code");
      if (code) {
        window.location.href = `exp://127.0.0.1:8081?code=${code}`;
      }
    };

    redirectToApp();
  }, [location.search]);

  return (
    <div>
      <div>사용 중이던 서비스로 이동하여</div>
      <div>로그인을 완료해 주세요.</div>
    </div>
  );
}
