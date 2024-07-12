import Button from "@components/Button";
import styles from "@styles/pages/mypage/MyPageMain.module.scss";
import useUserStore from "@zustand/user.mjs";
import { useNavigate } from "react-router-dom";

function MyPageMain() {
  const navigate = useNavigate();
  const { user } = useUserStore();

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
        <h3 className={styles.profile_name}>{user.name}</h3>
      </div>

      <div className={styles.info_container}>
        <div>
          <p className={styles.info_title}>이메일</p>
          <p className={styles.info_content}>{user.email}</p>
        </div>
        <div>
          <p className={styles.info_title}>생년월일</p>
          <p className={styles.info_content}>{user.birth}</p>
        </div>
        <div>
          <p className={styles.info_title}>전화번호</p>
          <p className={styles.info_content}>{user.phone}</p>
        </div>
      </div>

      <div className={styles.profile_edit_button}>
        <Button text="프로필 수정하기" size="large" onClick={handleClick} />
      </div>
    </div>
  );
}

export default MyPageMain;
