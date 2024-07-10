import FriendPageTitle from "./FriendPageTitle";
import styles from "@styles/pages/friends/FriendRequestPage.module.scss";
import FriendsListItem from "./FriendsListItem";

function FriendRequestPage() {
  return (
    <div className={styles.FriendRequestPageLayout}>
      <FriendPageTitle />
      <div>
        <div className={styles.FriendRequestCount}>
          <p>n개의 친구 요청이 있습니다.</p>
        </div>
        <FriendsListItem />
      </div>
    </div>
  );
}

export default FriendRequestPage;
