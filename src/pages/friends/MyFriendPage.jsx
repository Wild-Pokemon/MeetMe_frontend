import Friend from "./Friend";
import styles from "@styles/pages/friends/MyFriendsPage.module.scss";
import PropTypes from "prop-types";

function MyFriendsPage({ isEditMode }) {
  return (
    <>
      <div className={styles.myFriendsContainer}>
        <Friend isEditMode={isEditMode} />
        <Friend isEditMode={isEditMode} />
        <Friend isEditMode={isEditMode} />
      </div>
    </>
  );
}

MyFriendsPage.propTypes = {
  isEditMode: PropTypes.bool,
};
export default MyFriendsPage;
