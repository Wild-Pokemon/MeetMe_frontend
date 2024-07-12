import styles from "@styles/pages/friends/FriendsListPage.module.scss";
import { Link } from "react-router-dom";
import "@styles/pages/friends/FriendModal.scss";
import searchIcon from "@assets/search.svg";
import addFriendsIcon from "@assets/addfriends.svg";
import notificationIcon from "@assets/notification.svg";
import MyFriendsPage from "@pages/friends/MyFriendPage";
import Button from "@components/Button";
import Modal from "react-modal";
import { useState } from "react";
import AddFriends from "./AddFriends";

Modal.setAppElement("#root");

function FriendListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const openEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log(isEditMode);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.friendListPage}>
      <div className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <h1>친구</h1>
        </div>
        <div className={styles.flexItem}>
          <button onClick={openModal}>
            <img src={addFriendsIcon} alt="addFriends" />
          </button>
        </div>
        <div className={styles.flexItem}>
          <Link to="/friends/mail">
            <img src={notificationIcon} alt="noti" />
          </Link>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.inputContent}
          id="search"
          placeholder="친구찾기"
        />
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </div>
      <div className={styles.edit}>
        <p>20명</p>
        <Button
          size={"superSmall"}
          text={isEditMode ? "완료" : "편집"}
          onClick={openEdit}
          color={isEditMode ? "color1" : "color2"}
        />
      </div>
      <MyFriendsPage isEditMode={isEditMode} />

      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <div className="buttonContainer">
          <button onClick={closeModal}>x</button>
        </div>
        <div className="searchContainer">
          <input
            type="text"
            className="inputContent"
            id="search"
            placeholder="친구찾기"
          />
          <img src={searchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="friend-container">
          <AddFriends />
        </div>
      </Modal>
    </div>
  );
}

export default FriendListPage;
