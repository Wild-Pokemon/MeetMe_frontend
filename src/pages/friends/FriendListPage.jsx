import styles from "@styles/components/FriendsListPage.module.scss";
import { Link } from "react-router-dom";
import searchIcon from "@assets/search.svg";

import addFriendsIcon from "@assets/addfriends.svg";
import notificationIcon from "@assets/notification.svg";
import MyFriendsPage from "./MyFriendPage";
import Button from "@components/Button";

function FriendListPage() {
  return (
    <div className={styles.friendListPage}>
      <div className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <h1>친구</h1>
        </div>
        <div className={styles.flexItem}>
          <Link to="/addfriend">
            <img src={addFriendsIcon} alt="addFriends" />
          </Link>
        </div>
        <div className={styles.flexItem}>
          <Link to="/mail">
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
        <Button size={"superSmall"} text="편집" color="#F2994A" />
      </div>
      <MyFriendsPage />
    </div>
  );
}

export default FriendListPage;
