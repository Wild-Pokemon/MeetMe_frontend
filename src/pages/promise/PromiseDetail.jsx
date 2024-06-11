import "@styles/pages/promise/PromiseDetail.scss";
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
    <div className="detail-wrapper">
      <div className="deatil-header">
        <h1>모각코</h1>

        <div className="button-box type-mo">
          <button className="more-btn" type="button" onClick={handlMoreOpen}>
            <img src={moreIcon} alt="더보기" />
          </button>

          {more && (
            <div className="more-menu-box">
              <button type="button" className="menu-box-item">
                약속 변경하기
              </button>
              <button type="button" className="menu-box-item">
                약속 취소하기
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="detail-container">
        <p className="detail-category">#공부</p>
      </div>

      <div className="detail-container">
        <h2>누구와 만날까요?</h2>
        <div className="detail-result">
          <div className="detail-result-info">
            <img
              className="detail-result-src"
              src={profile}
              alt="기본프로필이미지"
            />
            <p className="detail-result-name">홍길동</p>
          </div>
          <div className="detail-result-info">
            <img
              className="detail-result-src"
              src={profile}
              alt="기본프로필이미지"
            />
            <p className="detail-result-name">박새로이</p>
          </div>
          <div className="detail-result-info">
            <img
              className="detail-result-src"
              src={profile}
              alt="기본프로필이미지"
            />
            <p className="detail-result-name">김도영</p>
          </div>
        </div>
      </div>

      <div className="detail-container">
        <h2>언제 만날까요?</h2>
        <div className="detail-result">
          <p className="detail-result-text">2024년 5월 28일 오전 11:30</p>
        </div>
      </div>

      <div className="detail-container">
        <h2>어디서 만날까요?</h2>
        <div className="detail-result">
          <p className="detail-result-text">강남 진해장</p>
        </div>

        <img className="map-src" src={map} alt="지도 이미지" />
        {/* 지도 Api 연결 후 삭제예정 */}
      </div>

      <div className="button-box type-pc">
        <Button text="약속 변경하기" size="large" />
        <Button
          text="약속 취소하기"
          size="large"
          color="#f2994a"
          onClick={handledelete}
        />
      </div>
    </div>
  );
}

export default PromiseDetail;
