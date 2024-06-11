import "@styles/pages/promise/PromiseEdit.scss";
import profile from "@assets/basic_profile.svg";
import deleteIcon from "@assets/delete_icon.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import { useForm } from "react-hook-form";

function PromiseEdit() {
  const { register, handleSubmit } = useForm({
    values: {
      promise: "모각코",
    },
  });

  const onSubmit = () => {};
  const handleSave = () => {};

  const handleDate = () => {};
  const handleLocation = () => {};

  return (
    <div className="promise-wrapper">
      <h1>약속을 변경 중이에요!</h1>
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
            <Button text={"친구선택"} size="small" />
          </div>
          <div className="input-result">
            <div className="input-result-info">
              <img
                className="input-result-src"
                src={profile}
                alt="기본프로필이미지"
              />
              <p className="input-result-name">홍길동</p>
            </div>

            <button type="button">
              <img src={deleteIcon} alt="삭제하기" />
            </button>
          </div>
        </div>

        <div className="input-container">
          <div className="input-cotainer-layout">
            <label htmlFor="date">언제 만날까요?</label>
            <Button text={"일정선택"} size="small" onClick={handleDate} />
          </div>
          <div className="input-result type-null">
            2024년 5월 28일 오전 11:30
          </div>
        </div>

        <div className="input-container">
          <div className="input-cotainer-layout">
            <label htmlFor="location">어디서 만날까요?</label>
            <Button text={"장소선택"} size="small" onClick={handleLocation} />
          </div>
          <div className="input-result type-null">강남진해장</div>
        </div>

        <Button text={"약속 변경"} size="large" onClick={handleSave} />
      </form>
    </div>
  );
}

export default PromiseEdit;
