import { useState } from "react";
import profileImg from "@assets/profile.svg";
import styles from "@styles/pages/friends/Friend.module.scss";
import trashcan from "@assets/trashcan.svg";
import PropTypes from "prop-types";
import Modal from "@components/Modal";

/** 친구 정보를 담고 있는 컴포넌트  */
function Friend({ isEditMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <div className={styles.editwrapper}>
            <button onClick={openModal}>
              <img
                src={trashcan}
                className={styles.containerimg}
                alt="delete"
              />
            </button>
          </div>
        ) : null}
      </div>
      {isModalOpen && (
        <Modal onRequestClose={closeModal}>
          <h2>정말 삭제하시겠습니까?</h2>
          <button onClick={closeModal}>취소</button>
          <button
            onClick={() => {
              //삭제로직
              closeModal();
            }}
          >
            삭제
          </button>
        </Modal>
      )}
    </div>
  );
}

Friend.propTypes = {
  isEditMode: PropTypes.bool,
};

export default Friend;
