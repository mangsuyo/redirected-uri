import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const codeParams = queryParams.toString();
        console.log(codeParams);
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify(codeParams));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);

        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ error: error.message })
          );
        }
      }
    };

    fetchUserData();
  }, [location.search]);

  return (
    <>
      <div>
        <div>사용 중이던 서비스로 이동하여</div>
        <div>로그인을 완료해 주세요.</div>
      </div>
    </>
  );
}
