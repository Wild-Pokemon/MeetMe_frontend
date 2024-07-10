import styles from "@styles/pages/friends/FriendMainPage.module.scss";
import FriendPageTitle from "./FriendPageTitle";
import FriendPageInput from "./FriendPageInput";
import FriendList from "./FriendList";

function FriendMainPage() {
  return (
    <div className={styles.layout}>
      <div>
        <FriendPageTitle />
        <FriendPageInput placeholder={"친구 찾기"} />
        <FriendList />
      </div>
    </div>
  );
}

export default FriendMainPage;
