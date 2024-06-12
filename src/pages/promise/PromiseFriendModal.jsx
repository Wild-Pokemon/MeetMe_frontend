import styles from "@styles/pages/promise/PromiseFriendModal.module.scss";
import profile from "@assets/basic_profile.svg";
import selectIcon from "@assets/select_friend.svg";
import checked from "@assets/checked_friend.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import PropTypes from "prop-types";

function PromiseFriendModal({ handleFriend }) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.promise_modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeader_item}>
            <img src={profile} alt="기본프로필이미지" />
            <p>고재형</p>
          </div>

          <div className={styles.modalHeader_item}>
            <img src={profile} alt="기본프로필이미지" />
            <p>박새로이</p>
          </div>
        </div>

        <div className={styles.modalContent}>
          <Input
            size="small"
            type="text"
            id="promise"
            placeholder="함께할 친구를 찾아보세요."
          />

          <div className={styles.modalList}>
            <h3>친구 목록</h3>
            <div className={styles.modalList_Box}>
              <div className={styles.modalItem}>
                <img
                  className={styles.modalItem_src}
                  src={profile}
                  alt="기본프로필이미지"
                />
                <p>고재형</p>

                <button type="button">
                  <img src={checked} alt="체크아이콘" />
                </button>
              </div>

              <div className={styles.modalItem}>
                <img
                  className={styles.modalItem_src}
                  src={profile}
                  alt="기본프로필이미지"
                />
                <p>이경민</p>

                <button type="button">
                  <img src={selectIcon} alt="선택아이콘" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Button text={"완료"} size={"small"} onClick={handleFriend} />
      </div>
    </div>
  );
}

PromiseFriendModal.propTypes = {
  handleFriend: PropTypes.func.isRequired,
};

export default PromiseFriendModal;
