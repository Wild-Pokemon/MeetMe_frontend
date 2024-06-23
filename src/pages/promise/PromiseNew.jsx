import styles from "@styles/pages/promise/Promise.module.scss";
import dropdown from "@assets/down.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PromiseFriendModal from "@pages/promise/PromiseFriendModal";
import PromiseLocationModal from "@pages/promise/PromiseLocationModal";
import Dropdown from "@components/Dropdown";

function PromiseNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [friend, setFriend] = useState(false);
  const [category, setCategory] = useState("카테고리");
  const [location, setLocation] = useState(false);

  const handleDropClick = (selectedDomain) => {
    setCategory(selectedDomain);
  };

  const onSubmit = () => {};
  const handleSave = () => {};
  const handleFriend = () => {
    setFriend(!friend);
    return;
  };
  const handleDate = () => {};

  // 지도 설정 모달 오픈
  const handleLocation = () => {
    setLocation(!location);
    return;
  };

  const categoryList = [
    "개인",
    "친구",
    "데이트",
    "공부",
    "취미",
    "회식",
    "비즈니스",
  ];

  return (
    <div className={styles.promise_wrapper}>
      <h1>약속을 잡고 있어요!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputSection}>
          <label htmlFor="promise">어떤 약속인가요?</label>
          <div className={styles.inputLayout}>
            <Input
              type="text"
              id="promise"
              placeholder="약속 이름을 정해주세요."
              error={errors.email ? true : false}
              {...register("promise", {
                required: "약속이름을 입력해 주세요.",
              })}
            />
            <Dropdown
              selectedValue={category}
              options={categoryList}
              onSelect={handleDropClick}
            />
          </div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputLayout}>
            <label htmlFor="friends">누구와 만날까요?</label>
            <Button text={"친구선택"} size="small" onClick={handleFriend} />
          </div>

          {friend ? <PromiseFriendModal handleFriend={handleFriend} /> : ""}
          <div className={styles.inputResult}>친구를 추가해주세요.</div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputLayout}>
            <label htmlFor="date">언제 만날까요?</label>
            <Button text={"일정선택"} size="small" onClick={handleDate} />
          </div>
          <div className={styles.inputResult}>날짜를 선택해주세요.</div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputLayout}>
            <label htmlFor="location">어디서 만날까요?</label>
            <Button text={"장소선택"} size="small" onClick={handleLocation} />
          </div>

          {location ? (
            <PromiseLocationModal handleLocation={handleLocation} />
          ) : (
            ""
          )}
          <div className={styles.inputResult}>장소를 선택해주세요.</div>
        </div>

        <Button text={"약속저장"} size="large" onClick={handleSave} />
      </form>
    </div>
  );
}

export default PromiseNew;
