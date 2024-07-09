import styles from "@styles/pages/promise/Promise.module.scss";
import profile from "@assets/basic_profile.svg";
import dropdown from "@assets/down.svg";
import deleteIcon from "@assets/delete_icon.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Dropdown from "@components/Dropdown";

function PromiseEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      promise: "모각코",
    },
  });
  const [category, setCategory] = useState("카테고리");

  const handleDropClick = (selectedDomain) => {
    setCategory(selectedDomain);
  };

  const onSubmit = () => {};
  const handleSave = () => {};
  const handleFriend = () => {};

  const handleDate = () => {};
  const handleLocation = () => {};

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
      <h1>약속을 변경 중이에요!</h1>

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

          <div className={styles.inputResult}>
            <div className={styles.inputResult_Item}>
              <img
                className={styles.inputResult_src}
                src={profile}
                alt="기본프로필이미지"
              />
              <p>홍길동</p>

              <button type="button">
                <img src={deleteIcon} alt="삭제하기" />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputLayout}>
            <label htmlFor="date">언제 만날까요?</label>
            <Button text={"일정선택"} size="small" onClick={handleDate} />
          </div>
          <div className={styles.inputResult}>2024년 5월 28일 오전 11:30</div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputLayout}>
            <label htmlFor="location">어디서 만날까요?</label>
            <Button text={"장소선택"} size="small" onClick={handleLocation} />
          </div>
          <div className={styles.inputResult}>강남 진해장</div>
        </div>

        <Button text={"약속변경"} size="large" onClick={handleSave} />
      </form>
    </div>
  );
}

export default PromiseEdit;
