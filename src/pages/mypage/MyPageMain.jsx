import Button from "@components/Button";
import styles from "@styles/pages/mypage/MyPageMain.module.scss";
import { useNavigate } from "react-router-dom";

function MyPageMain() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("auth");
  };

  return (
    <div className={styles.mypage_wrapper}>
      <div className={styles.profile_container}>
        <img
          className={styles.profile_img}
          src="/src/assets/default-profile.png"
          alt="기본 프로필"
        />
        <h3 className={styles.profile_name}>홍길동</h3>
      </div>

      <div className={styles.info_container}>
        <div>
          <p className={styles.info_title}>이메일</p>
          <p className={styles.info_content}>meetme@naver.com</p>
        </div>

        <div>
          <p className={styles.info_title}>생년월일</p>
          <p className={styles.info_content}>1999년 2월 25일</p>
        </div>

        <div>
          <p className={styles.info_title}>전화번호</p>
          <p className={styles.info_content}>010-1234-5678</p>
        </div>
      </div>

      <div className={styles.profile_edit_button}>
        <Button text="프로필 수정하기" size="large" onClick={handleClick} />
      </div>
    </div>
  );
}

export default MyPageMain;
