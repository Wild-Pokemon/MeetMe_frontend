/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import basic_profile from "@assets/basic_profile.svg";
import trashcan from "@assets/trashcan.svg";
import styles from "@styles/pages/friends/FriendListItem.module.scss";
import Button from "@components/Button";
import useEditStore from "@zustand/edit.mjs";
import FriendModal from "./FriendModal";
import { useState } from "react";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import useUserStore from "@zustand/user.mjs";

// eslint-disable-next-line react/prop-types
function FriendsListItem({ friend, isAddFriendMode }) {
  const location = useLocation();
  const isFriendRequestPage = location.pathname === "/friends/request";
  const { isEditMode } = useEditStore();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const token = user.token.accessToken;

  /** 추가 하고 싶은 친구 id를 매개변수로 받아 추가를 보내는 함수 */
  const handleAddFriend = async (userId) => {
    try {
      const response = await axios.post(
        `/friends`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 서버의 응답 데이터 가져오기
      const { data, status } = response;

      console.log(`서버 응답 데이터:`, data);
      console.log(`응답 상태 코드:`, status);

      if (data.code === 200) {
        alert(`친구 신청을 보냈어요!`);
      } else if (data.code === 400) {
        alert(`서버에서 오류가 발생했습니다: ${data.message}`);
      }
    } catch (error) {
      console.error("친구 추가 요청 실패:", error);
      alert(
        `친구 추가 요청 실패: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <div className={`${styles.ListItemLayout} ${styles.fadeIn}`}>
      <div className={styles.ListProfile}>
        <img
          src={basic_profile}
          alt="프로필 이미지"
          className={styles.ProfileimgSize}
        />
        <div>
          <p className={styles.UserName}>{friend?.name ? friend.name : null}</p>
          <p className={styles.UserEmail}>
            {friend?.email ? friend.email : null}
          </p>
        </div>
      </div>

      <div>
        {isFriendRequestPage ? (
          <div className={styles.ButtonWrapper}>
            <Button text="수락" color="color1" size="superSmall" />
            <Button text="거절" color="color2" size="superSmall" />
          </div>
        ) : (
          <>
            {isAddFriendMode ? (
              <Button
                text="추가"
                color="color1"
                size="superSmall"
                onClick={() => {
                  handleAddFriend(friend.userId); // 친구 추가 함수 호출
                }}
              />
            ) : (
              isEditMode && (
                <>
                  <button onClick={openModal}>
                    <img
                      src={trashcan}
                      alt="휴지통"
                      className={styles.Trashcan}
                    />
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
          </>
        )}
      </div>
    </div>
  );
}

export default FriendsListItem;
