// src/components/FriendPageTitle.js
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import plusFriend from "@assets/addfriends.svg";
import notification from "@assets/notification.svg";
import styles from "@styles/pages/friends/FriendPageTitle.module.scss";
import FriendPageInput from "./FriendPageInput";
import FriendAddNew from "./FriendAddNew";
import FriendsListItem from "./FriendsListItem";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import useUserStore from "@zustand/user.mjs";

function FriendPageTitle() {
  const location = useLocation();
  const isFriendRequestPage = location.pathname === "/friends/request";
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const token = user.token.accessToken;
  const [inputElement] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getSearchInfo = async () => {
      try {
        const res = await axios.get(`users/list?search=${inputElement}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        setSearchResult(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchInfo();
  }, []);

  console.table("test", searchResult.data);
  const allusers = searchResult?.data?.map((item, index) => {
    return <FriendsListItem key={index} friend={item} />;
  });

  return (
    <div className={styles.titlePageLayout}>
      <div className={styles.titlePageWrapper}>
        <h1 className={styles.titlePageHeader}>
          {user?.name} 님의 {isFriendRequestPage ? "친구 요청" : "친구"}
        </h1>
        {!isFriendRequestPage && (
          <div className={styles.titleImageWrapper}>
            <div onClick={openModal}>
              <img src={plusFriend} alt="친구추가" />
            </div>
            <div
              onClick={() => {
                navigate("/friends/request");
              }}
            >
              <img src={notification} alt="알람" />
            </div>
          </div>
        )}
      </div>
      <FriendAddNew show={modalOpen} onClose={closeModal}>
        <h2>친구 추가</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            /* 친구 추가 로직 추가 */ closeModal();
          }}
        >
          <FriendPageInput
            placeholder={"찾고 싶은 친구의 이메일을 입력하세요."}
          />
          <div className={styles.gapgap}>{allusers ? allusers : null}</div>
        </form>
      </FriendAddNew>
    </div>
  );
}

export default FriendPageTitle;
