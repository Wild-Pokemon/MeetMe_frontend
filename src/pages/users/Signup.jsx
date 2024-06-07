import Input from "@components/Input";
import "@styles/pages/users/Signup.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    getValues,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  // const handleSelect = () => {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="signup-wrapper">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="name">이름</label>
          <Input
            type="text"
            id="name"
            placeholder="이름을 입력하세요."
            {...register("name", {
              required: "이름을 입력해 주세요.",
            })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">이메일</label>
          <div className="email-container">
            <Input
              type="text"
              id="email"
              placeholder="이메일을 입력하세요."
              {...register("email", {
                required: "이메일을 입력해 주세요.",
              })}
            />
            <p>@</p>
            <div className="dropdown">
              <div
                className={`select ${isOpen ? "is-active" : ""}`}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
              >
                <p>-- 이메일 선택 --</p>
                <img src="/src/assets/down.svg" alt="메뉴 토글" />
              </div>
              {isOpen && <div className="options">Options</div>}
            </div>
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="password">비밀번호</label>
          <Input
            type="text"
            id="password"
            placeholder="영문 대/소문자, 숫자, 특수문자를 포함하여 8글자 이상 입력하세요."
            error={errors.password ? true : false}
            {...register("password", {
              required: "비밀번호를 입력하세요.",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "비밀번호 형식에 맞게 입력해 주세요.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="password-confirm">비밀번호 확인</label>
          <Input
            type="text"
            id="password-confirm"
            placeholder="비밀번호를 한 번 더 입력하세요."
            error={errors.passwordConfirm ? true : false}
            {...register("passwordConfirm", {
              required: "비밀번호를 한번 더 입력해 주세요.",
              validate: {
                check: (val) => {
                  if (getValues("password") !== val) {
                    return "입력하신 비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
          {errors.password && <p>{errors.passwordConfirm.message}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="phone">전화번호</label>
          <Input
            type="text"
            id="phone"
            placeholder="휴대폰 번호를 입력하세요"
            maxLength="11"
            error={errors.phone ? true : false}
            {...register("phone", {
              required: "휴대폰 번호를 입력하세요.",
              pattern: {
                value: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                message: "번호를 정확히 입력해 주세요.",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <button className="signup" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;
