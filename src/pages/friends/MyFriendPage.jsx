import Friend from "./Friend";
import styles from "@styles/pages/friends/MyFriendsPage.module.scss";

function MyFriendsPage() {
  return (
    <>
      <div className={styles.myFriendsContainer}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend /> <Friend />
        <Friend /> <Friend />
        <Friend /> <Friend />
        <Friend /> <Friend />
        <Friend />
      </div>
    </>
  );
}

export default MyFriendsPage;
