import FriendPageTitle from "./FriendPageTitle";
import styles from "@styles/pages/friends/FriendRequestPage.module.scss";

import basic_profile from "@assets/basic_profile.svg";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useEffect, useState } from "react";
import Button from "@components/Button";

function FriendRequestPage() {
  const axios = useCustomAxios();
  const [reciveRequest, setReciveRequest] = useState(null);

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

  console.log("x", reciveRequest?.data?.request);

  // const result = reciveRequest?.data?.request.map((item) => {
  //   return item;
  // });

  //필요한 데이터 email ,name
  // console.log("요청받은 친구", result);

  return (
    <div className={styles.FriendRequestPageLayout}>
      <FriendPageTitle />
      <div>
        <div className={styles.FriendRequestCount}>
          <p>{reciveRequest?.data?.request.length}개의 친구 요청이 있습니다.</p>
        </div>
        {reciveRequest?.data?.request?.map((item) => {
          return (
            <div key={item.userId} className={styles.container}>
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
                    </div>
                  </div>
                </div>
                <div className={styles.ButtonWrapper}>
                  <Button text="수락" color="color1" size="superSmall" />
                  <Button text="거절" color="color2" size="superSmall" />
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
