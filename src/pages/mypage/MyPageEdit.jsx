import Button from "@components/Button";
import Input from "@components/Input";
import "@styles/pages/mypage/MyPageEdit.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function MyPageEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    getValues,
    setFocus,
    setValue,
  } = useForm();

  const [domain, setDomain] = useState("이메일 선택");
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!isDisabled) {
      setFocus("domain");
    }
  }, [isDisabled, setFocus]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectDomain = (e) => {
    const selectedDomain = e.target.value;
    setDomain(selectedDomain);
    if (selectedDomain === "직접 입력") {
      setIsDisabled(false);
      setValue("domain", "");
      setFocus("domain");
    } else {
      setIsDisabled(true);
      setValue("domain", selectedDomain);
    }
    setIsOpen(false);
  };

  const emailList = [
    "naver.com",
    "hanmail.net",
    "kakao.com",
    "google.com",
    "nate.com",
    "직접 입력",
  ];

  const options = emailList.map((item, index) => (
    <li key={index}>
      <button type="button" onClick={handleSelectDomain} value={item}>
        {item}
      </button>
    </li>
  ));

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="mypage-edit-wrapper">
      <div className="profile-container">
        <img
          className="profile-img"
          src="/src/assets/default-profile.png"
          alt="기본 프로필"
        />
        <h3 className="profile-name">홍길동</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="email">이메일</label>
          <div className="email-container">
            <Input
              type="text"
              id="email"
              placeholder="이메일을 입력하세요."
              error={errors.email ? true : false}
              {...register("email", {
                required: "이메일을 정확히 입력해 주세요.",
              })}
            />
            <p>@</p>
            <Input
              type="text"
              id="domain"
              {...register("domain", {
                required: "이메일을 정확히 입력해 주세요.",
              })}
              disabled={isDisabled}
            />
            <div className="dropdown">
              <button
                type="button"
                className="select-box"
                onClick={handleClick}
              >
                <span>{domain}</span>
                <img
                  className={isOpen ? "opened" : ""}
                  src="/src/assets/down.svg"
                  alt="메뉴 열기/닫기"
                />
              </button>
              {isOpen && <ul className="select-options">{options}</ul>}
            </div>
          </div>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="password">비밀번호</label>
          <Input
            type="text"
            id="password"
            placeholder="변경하실 비밀번호를 입력하세요."
            error={errors.password ? true : false}
            {...register("password", {
              required: "변경하실 비밀번호를 입력해 주세요.",
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
              required: "비밀번호를 한 번 더 입력해 주세요.",
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

        <div className="info-container">
          <div>
            <p className="info-title">생년월일</p>
            <p className="info-content">1999년 2월 25일</p>
          </div>

          <div>
            <p className="info-title">전화번호</p>
            <p className="info-content">010-1234-5678</p>
          </div>
        </div>

        <div className="profile-edit-button">
          <Button type="submit" text="프로필 수정하기" size="large" />
        </div>
      </form>
    </div>
  );
}

export default MyPageEdit;
