import Button from "@components/Button";
import "@styles/pages/help/EmailSearchResult.scss";
import { useNavigate } from "react-router-dom";

function EmailSearchResult() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users/login");
  };

  return (
    <div className="search-result-wrapper">
      <h1>이메일 찾기</h1>

      <div className="search-result-container">
        <p className="search-result-name">
          <span>홍길동</span> 님의 이메일은
        </p>
        <p className="search-result-content">
          <span>meetme@naver.com</span> 입니다.
        </p>
      </div>

      <Button
        type="button"
        text="이메일로 로그인하기"
        size="large"
        onClick={handleClick}
      />
    </div>
  );
}

export default EmailSearchResult;
