import profileImg from "@assets/profile.svg";
import styles from "@styles/components/Friend.module.scss";

function Friend() {
  return (
    <div className={styles.container}>
      <div>
        <img src={profileImg} alt="" />
      </div>
      <div>
        <h1>윤우중</h1>
        <p>ywj981231@naver.com</p>
      </div>
    </div>
  );
}

export default Friend;
