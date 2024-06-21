import styles from "@styles/MainPage.module.scss";
import profile from "@assets/profile.svg";
//API 연결시 삭제
import mainLogo from "@assets/meetme_logo.svg";
import mainLogoText from "@assets/meetme_logo_text.svg";
import mainImg from "@assets/mainpage_image.svg";
import promiseNew from "@assets/promise_new.svg";
import Button from "@components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  const handleLogin = () => {
    navigate("/users/login");
  };
  const handlePromise = () => {
    navigate("/promise");
  };

  return (
    <>
      {user ? (
        <div className={styles.main_banner}>
          <div className={styles.mainBlur}>
            <div className={styles.bannerBox}>
              <div className={styles.bannerItem}>
                <p>나만의 약속 관리 메이트</p>
                <img
                  className={styles.logoText}
                  src={mainLogoText}
                  alt="MeetMe_Logo"
                />
                <Button
                  text="약속 만들기"
                  size="normal"
                  color="color2"
                  className={styles.button_pc}
                  onClick={handlePromise}
                />
              </div>
              <img
                className={styles.bannerIcon_pc}
                src={mainImg}
                alt="메인페이지 이미지아이콘"
              />
              <img
                className={styles.bannerIcon_mo}
                src={profile}
                //API 연결시 경로 수정
                alt="메인페이지 이미지아이콘"
              />
            </div>
          </div>

          <button
            className={styles.button_mo}
            type="button"
            onClick={handlePromise}
          >
            <img src={promiseNew} alt="약속만들기 아이콘" />
          </button>
        </div>
      ) : (
        <div className={styles.main_background}>
          <div className={styles.mainBlur}>
            <div className={styles.backgroundBox}>
              <img className={styles.logo} src={mainLogo} alt="MeetMe_Logo" />
              <img src={mainImg} alt="메인페이지 이미지아이콘" />
              <Button
                className={styles.button}
                text="로그인하여 시작하기"
                size="large"
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
