import styles from "@styles/pages/promise/PromiseDetail.module.scss";
import profile from "@assets/basic_profile.svg";
import moreIcon from "@assets/more_vertical.svg";
import map from "@assets/map_img.png";
import Button from "@components/Button";
import { useState } from "react";

function PromiseDetail() {
  const [more, setMore] = useState(false);
  const handlMoreOpen = () => {
    setMore(!more);
  };

  const handledelete = () => {};

  return (
    <div className={styles.detail_wrapper}>
      <div className={styles.deatil_header}>
        <h1>모각코</h1>

        <div className={styles.MoreMeun_Mo}>
          <button type="button" onClick={handlMoreOpen}>
            <img src={moreIcon} alt="더보기" />
          </button>

          {more && (
            <div className={styles.MoreMeunBox}>
              <button type="button" className={styles.MoreMeunBtn}>
                약속 변경하기
              </button>
              <button type="button" className={styles.MoreMeunBtn}>
                약속 취소하기
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.detail_container}>
        <div className={styles.category}>#공부</div>

        <div className={styles.detailSection}>
          <h2>누구와 만날까요?</h2>
          <div className={styles.detailResult}>
            <div className={styles.detailResultInfo}>
              <img src={profile} alt="기본프로필이미지" />
              <p>홍길동</p>
            </div>
          </div>
        </div>

        <div className={styles.detailSection}>
          <h2>언제 만날까요?</h2>
          <div className={styles.detailResult}>2024년 5월 28일 오전 11:30</div>
        </div>

        <div className={styles.detailSection}>
          <h2>어디서 만날까요?</h2>
          <div className={styles.detailResult}>강남 진해장</div>

          <img className="map-src" src={map} alt="지도 이미지" />
          {/* 지도 Api 연결 후 삭제예정 */}
        </div>

        <div className={styles.MoreMeun_Pc}>
          <Button text="약속 변경하기" size="large" />
          <Button
            text="약속 취소하기"
            size="large"
            color="color2"
            onClick={handledelete}
          />
        </div>
      </div>
    </div>
  );
}

export default PromiseDetail;
