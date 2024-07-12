import FriendPageTitle from "./FriendPageTitle";
import styles from "@styles/pages/friends/FriendRequestPage.module.scss";

import basic_profile from "@assets/basic_profile.svg";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useEffect, useState } from "react";
import Button from "@components/Button";

function FriendRequestPage() {
  const axios = useCustomAxios();
  const [reciveRequest, setReciveRequest] = useState(null);
  const [statusType] = useState({
    accept: "Y", // 수락 상태
    reject: "N", // 거절 상태
  });

  useEffect(() => {
    /** 친구요청 후 내 아이디로 전송된 친구요청 */
    const getRequestNewFriends = async () => {
      try {
        const res = await axios.get("/friends/push");
        console.log(res.data);
        setReciveRequest(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRequestNewFriends();
  }, []);

  /** 친구 수락 또는 거절 */
  const handleRequestReception = async (seqId, action) => {
    try {
      const type = statusType[action]; // action을 통해 type을 결정
      const res = await axios.put(
        `/friends/push?seqId=${seqId}&statusType=${type}`
      );
      console.log(res.data);

      // 요청 수락 또는 거절 후 상태 갱신 로직 추가
      setReciveRequest((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          data: {
            request: prev.data.request.filter(
              (request) => request.seqId !== seqId
            ),
          },
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.FriendRequestPageLayout}>
      <FriendPageTitle />
      <div>
        <div className={styles.FriendRequestCount}>
          <p>{reciveRequest?.data?.request.length}개의 친구 요청이 있습니다.</p>
        </div>
        {reciveRequest?.data?.request?.map((item) => {
          return (
            <div key={item.seqId} className={styles.container}>
              <div className={styles.ListItemLayout}>
                <div>
                  <div className={styles.ListProfile}>
                    <img
                      src={basic_profile}
                      alt="프로필 이미지"
                      className={styles.ProfileimgSize}
                    />
                    <div>
                      <p className={styles.UserName}>{item.name}</p>
                      <p className={styles.UserEmail}>{item.email}</p>
                      {/* <p className={styles.UserEmail}>{item.seqId}</p> */}
                    </div>
                  </div>
                </div>
                <div className={styles.ButtonWrapper}>
                  <Button
                    onClick={() => handleRequestReception(item.seqId, "accept")}
                    text="수락"
                    color="color1"
                    size="superSmall"
                  />
                  <Button
                    text="거절"
                    color="color2"
                    size="superSmall"
                    onClick={() => handleRequestReception(item.seqId, "reject")}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FriendRequestPage;
