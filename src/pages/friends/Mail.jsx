import styles from "@styles/pages/friends/Mail.module.scss";
import AddFriends from "./AddFriends";
import { useState } from "react";

function Mail() {
  const [mailCount, setMailCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1>친구 요청</h1>

      <div className={styles.wrapper}>
        <p>{mailCount}개의 친구 요청이 있습니다.</p>
        <AddFriends btnCount={2} />
      </div>
    </div>
  );
}

export default Mail;
