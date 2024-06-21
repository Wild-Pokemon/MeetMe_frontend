import styles from "@styles/MainPage.module.scss";
import mainLogo from "@assets/mainpage_logo.png";
import mainImg from "@assets/mainpage_image.svg";
import Button from "@components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  const handleLogin = () => {
    navigate("/users/login");
  };

  return (
    <>
      {user ? (
        <div className="dd">안녕</div>
      ) : (
        <div className={styles.main_wrapper}>
          <div className={styles.mainBlur}>
            <div className={styles.mainBox}>
              <img src={mainLogo} alt="MeetMe_Logo" />
              <img src={mainImg} alt="메인페이지 이미지아이콘" />
              <Button
                text="로그인하여 시작하기"
                size="large"
                className={styles.button}
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
