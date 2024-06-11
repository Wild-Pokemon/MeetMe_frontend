import profileImg from "@assets/profile.svg";
import styles from "@styles/pages/friends/Friend.module.scss";
import PropTypes from "prop-types";
import Button from "@components/Button";

/** 친구  */
function AddFriends({ btnCount = 1 }) {
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
        <div className={styles.btn}>
          <Button
            size={"superSmall"}
            text={"확인"}
            className={styles.btn}
            color="color1"
          />
          {btnCount === 2 && (
            <Button
              size="superSmall"
              text="거절"
              className={styles.btn}
              color="color2"
            />
          )}
        </div>
      </div>
    </div>
  );
}

AddFriends.propTypes = {
  btnCount: PropTypes.number,
};

export default AddFriends;
