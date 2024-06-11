import "@styles/pages/promise/PromiseNew.scss";
import Input from "@components/Input";
import Button from "@components/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PromiseFriendModal from "@pages/promise/PromiseFriendModal";

function PromiseNew() {
  const { register, handleSubmit } = useForm();

  const [friend, setFriend] = useState(false);

  const onSubmit = () => {};
  const handleSave = () => {};
  const handleFriend = () => {
    setFriend(!friend);
    return;
  };
  const handleDate = () => {};
  const handleLocation = () => {};

  return (
    <div className="promise-wrapper">
      <h1>약속을 잡고 있어요!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="promise">어떤 약속인가요?</label>
          <div className="promise-container">
            <Input
              type="text"
              id="promise"
              placeholder="약속 이름을 정해주세요."
              {...register("promise", {
                required: "약속이름을 입력해 주세요.",
              })}
            />
            <div className="dropdown">
              <div className={"select"} tabIndex={0}>
                <p>-- 카테고리 --</p>
                <img src="/src/assets/down.svg" alt="메뉴 토글" />
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="input-cotainer-layout">
            <label htmlFor="friends">누구와 만날까요?</label>
            <Button text={"친구선택"} size="small" onClick={handleFriend} />
          </div>
          {friend ? <PromiseFriendModal handleFriend={handleFriend} /> : ""}
          <div className="input-result type-null">친구를 추가해주세요.</div>
        </div>

        <div className="input-container">
          <div className="input-cotainer-layout">
            <label htmlFor="date">언제 만날까요?</label>
            <Button text={"일정선택"} size="small" onClick={handleDate} />
          </div>
          <div className="input-result type-null">날짜를 선택해주세요.</div>
        </div>

        <div className="input-container">
          <div className="input-cotainer-layout">
            <label htmlFor="location">어디서 만날까요?</label>
            <Button text={"장소선택"} size="small" onClick={handleLocation} />
          </div>
          <div className="input-result type-null">장소를 선택해주세요.</div>
        </div>

        <Button text={"약속저장"} size="large" onClick={handleSave} />
      </form>
    </div>
  );
}

export default PromiseNew;
