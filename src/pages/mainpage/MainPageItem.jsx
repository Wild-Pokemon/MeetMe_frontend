import styles from "@styles/pages/mainpage/MainPageItem.module.scss";
import profile from "@assets/profile.svg";

function MainPageItem() {
  return (
    <div className={styles.contentsItem}>
      <p className={styles.date}>D-3</p>
      <p className={styles.title}>송별회</p>
      <ul>
        <li>
          <p className={styles.infoTit}>장소 |</p>
          <p className={styles.infoContent}>광화문역 1번 출구</p>
        </li>
        <li>
          <p className={styles.infoTit}>시간 |</p>
          <p className={styles.infoContent}>2024년 5월 27일 18:00</p>
        </li>
        <li>
          <p className={styles.infoTit}>참가자 |</p>
          <div className={styles.infoContent}>
            <p>3명</p>
            <div className={styles.imgBox}>
              <img src={profile} alt="프로필 이미지" />
              <img src={profile} alt="프로필 이미지" />
              <img src={profile} alt="프로필 이미지" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainPageItem;
