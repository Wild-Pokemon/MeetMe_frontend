import Button from "@components/Button";
import "@styles/pages/mypage/MyPageMain.scss";
import { useNavigate } from "react-router-dom";

function MyPageMain() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("auth");
  };

  return (
    <div className="mypage-wrapper">
      <div className="profile-container">
        <img
          className="profile-img"
          src="/src/assets/default-profile.png"
          alt="기본 프로필"
        />
        <h3 className="profile-name">홍길동</h3>
      </div>

      <div className="info-container">
        <div>
          <p className="info-title">이메일</p>
          <p className="info-content">meetme@naver.com</p>
        </div>

        <div>
          <p className="info-title">생년월일</p>
          <p className="info-content">1999년 2월 25일</p>
        </div>

        <div>
          <p className="info-title">전화번호</p>
          <p className="info-content">010-1234-5678</p>
        </div>
      </div>

      <div className="profile-edit-button">
        <Button text="프로필 수정하기" size="large" onClick={handleClick} />
      </div>
    </div>
  );
}

export default MyPageMain;
