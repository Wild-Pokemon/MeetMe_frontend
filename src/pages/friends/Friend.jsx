import profileImg from "@assets/profile.svg";
import styles from "@styles/pages/friends/Friend.module.scss";
import notificationIcon from "@assets/notification.svg";
import PropTypes from "prop-types";

/** 친구 정보를 담고 있는 컴포넌트  */
function Friend({ isEditMode }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={profileImg} alt="pimg" />
      </div>
      <div className={styles.container}>
        <div>
          <h1>윤우중</h1>
          <p>ywj981231@naver.com</p>
        </div>
        {isEditMode ? (
          <img
            src={notificationIcon}
            className={styles.containerimg}
            alt="delete"
          />
        ) : null}
      </div>
    </div>
  );
}

Friend.propTypes = {
  isEditMode: PropTypes.bool,
};

export default Friend;
