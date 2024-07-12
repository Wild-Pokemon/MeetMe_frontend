import styles from "@styles/pages/friends/FriendMainPage.module.scss";
import FriendPageTitle from "./FriendPageTitle";
import FriendPageInput from "./FriendPageInput";
import FriendList from "./FriendList";
import useUserStore from "@zustand/user.mjs";
import { useEffect, useState } from "react";
import useCustomAxios from "@hooks/useCustomAxios.mjs";

function FriendMainPage() {
  const axios = useCustomAxios();
  const [friendData, setFriend] = useState(null);
  const { user } = useUserStore();
  const token = user.token.accessToken;

  useEffect(() => {
    // 현재 나와 친구 인 사람 불러오기
    const getFriendsList = async () => {
      try {
        const res = await axios.get("/friends?pageNo=1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFriend(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getFriendsList();
  }, []);

  return (
    <div className={styles.layout}>
      <div>
        <FriendPageTitle />
        <FriendPageInput placeholder={"친구 찾기"} />
        <FriendList friendData={friendData} />
      </div>
    </div>
  );
}

export default FriendMainPage;
