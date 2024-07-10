import Button from "@components/Button";
import styles from "@styles/pages/help/EmailSearchResult.module.scss";
import { useNavigate } from "react-router-dom";

function EmailSearchResult() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users/login");
  };

  return (
    <div className={styles.search_result_wrapper}>
      <h1>이메일 찾기</h1>

      <div className={styles.search_result_container}>
        <p className={styles.search_result_name}>
          <span>홍길동</span> 님의 이메일은
        </p>
        <p className={styles.search_result_content}>
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
