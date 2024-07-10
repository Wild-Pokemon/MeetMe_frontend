/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import basic_profile from "@assets/basic_profile.svg";
import trashcan from "@assets/trashcan.svg";
import styles from "@styles/pages/friends/FriendListItem.module.scss";
import Button from "@components/Button";
import useEditStore from "@zustand/edit.mjs";
import FriendModal from "./FriendModal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function FriendsListItem({ friend }) {
  const location = useLocation();
  const isFriendRequestPage = location.pathname === "/friends/request";
  const { isEditMode } = useEditStore();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.ListItemLayout}>
      <div className={styles.ListProfile}>
        <img
          src={basic_profile}
          alt="프로필 이미지"
          className={styles.ProfileimgSize}
        ></img>
        <div>
          <p className={styles.UserName}>{friend?.name}</p>
          <p className={styles.UserEmail}>{friend?.email}</p>
        </div>
      </div>

      <div>
        {isFriendRequestPage ? (
          <div className={styles.ButtonWrapper}>
            <Button text="수락" color="color1" size="superSmall" />
            <Button text="거절" color="color2" size="superSmall" />
          </div>
        ) : (
          isEditMode && (
            <>
              <button onClick={openModal}>
                <img src={trashcan} alt="휴지통" className={styles.Trashcan} />
              </button>
              <FriendModal show={modalOpen} onClose={closeModal}>
                <h2>삭제하시겠습니까?</h2>
                <Button
                  text="확인"
                  color="color1"
                  size="superSmall"
                  onClick={() => {
                    /* 삭제 로직 추가 */ closeModal();
                  }}
                />
                <Button
                  text="취소"
                  color="color2"
                  size="superSmall"
                  onClick={closeModal}
                />
              </FriendModal>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default FriendsListItem;
