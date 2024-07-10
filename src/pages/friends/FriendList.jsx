import Button from "@components/Button";
import styles from "@styles/pages/friends/FriendList.module.scss";
import FriendsListItem from "./FriendsListItem";
import useEditStore from "@zustand/edit.mjs";

/* eslint-disable */
function FriendList({ friendData }) {
  const { isEditMode, setIsEditMode } = useEditStore();
  console.log(isEditMode);

  const list = friendData?.data?.friendList?.map((item) => {
    return <FriendsListItem key={item.userId} friend={item} />;
  });

  return (
    <div className={styles.FriendListLayout}>
      <div className={styles.FriendListTitle}>
        <span>{friendData?.data?.friendList.length}명</span>
        <Button
          text={isEditMode ? "편집" : "완료"}
          color={isEditMode ? "color2" : "color1"}
          size="superSmall"
          onClick={setIsEditMode}
        />
      </div>
      <div className={styles.ItemsWrapper}>{list ? list : null}</div>
    </div>
  );
}

export default FriendList;
