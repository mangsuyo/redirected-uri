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
        const appDeepLink = `hikikomori://oauth?code=${code}`;
        setTimeout(() => {
          window.location.href = appDeepLink;
        }, 1000);
      } else {
        console.error("Authorization code not found.");
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
