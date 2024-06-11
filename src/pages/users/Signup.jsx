import Button from "@components/Button";
import Input from "@components/Input";
import "@styles/pages/users/Signup.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    getValues,
    setValue,
    setFocus,
  } = useForm();
  const [domain, setDomain] = useState("이메일 선택");
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [day, setDay] = useState(currentDate.getDate());
  const [isDayOpen, setIsDayOpen] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      setFocus("domain");
    }
  }, [isDisabled, setFocus]);

  const onSubmit = (formData) => {
    formData.birth = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;
    formData.email = formData.email + "@" + formData.domain;
    delete formData.domain;
    console.log(formData);
  };

  const handleCheck = () => {
    console.log("이메일 중복확인");
  };

  // Dropdown 컴포넌트화 하기
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

  const handleYearClick = () => {
    setIsYearOpen(!isYearOpen);
  };

  const yearList = Array.from(
    { length: currentDate.getFullYear() - 1900 + 1 },
    (_, i) => 1900 + i
  ).reverse();

  const handleSelectYear = (e) => {
    setYear(e.target.value);
    setIsYearOpen(false);
  };

  const yearOptions = yearList.map((item, index) => (
    <li key={index}>
      <button type="button" onClick={handleSelectYear} value={item}>
        {item}
      </button>
    </li>
  ));

  const handleMonthClick = () => {
    setIsMonthOpen(!isMonthOpen);
  };

  const monthList = Array.from({ length: 12 }, (_, i) => 1 + i);

  const handleSelectMonth = (e) => {
    setMonth(e.target.value);
    setIsMonthOpen(false);
  };

  const monthOptions = monthList.map((item, index) => (
    <li key={index}>
      <button type="button" onClick={handleSelectMonth} value={item}>
        {item}
      </button>
    </li>
  ));

  const handleDayClick = () => {
    setIsDayOpen(!isDayOpen);
  };

  // 월에 따라 다르게
  const dayList = Array.from({ length: 31 }, (_, i) => 1 + i);

  const handleSelectDay = (e) => {
    setDay(e.target.value);
    setIsDayOpen(false);
  };

  const dayOptions = dayList.map((item, index) => (
    <li key={index}>
      <button type="button" onClick={handleSelectDay} value={item}>
        {item}
      </button>
    </li>
  ));

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
            error={errors.name ? true : false}
            {...register("name", {
              required: "이름을 입력해 주세요.",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="email">이메일</label>
          <div className="email-container">
            <Button
              className="check-button"
              text="중복확인"
              size="extraSmall"
              onClick={handleCheck}
            />
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
          {(errors.email || errors.domain) && (
            <p>이메일을 정확히 입력해 주세요.</p>
          )}
        </div>

        <div className="input-container">
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            placeholder="영문 대/소문자, 숫자, 특수문자를 포함하여 8글자 이상 입력하세요."
            error={errors.password ? true : false}
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
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
            type="password"
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
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
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
              required: "휴대폰 번호를 입력해 주세요.",
              pattern: {
                value: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                message: "번호를 정확히 입력해 주세요.",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="phone">생년월일</label>
          <div className="select-container">
            <div className="select-item">
              <div className="dropdown">
                <button
                  type="button"
                  className="select-box"
                  onClick={handleYearClick}
                >
                  <span>{year}</span>
                  <img
                    className={isYearOpen ? "opened" : ""}
                    src="/src/assets/down.svg"
                    alt="메뉴 열기/닫기"
                  />
                </button>
                {isYearOpen && (
                  <ul className="select-options">{yearOptions}</ul>
                )}
              </div>
              <p>년</p>
            </div>

            <div className="select-item">
              <div className="dropdown">
                <button
                  type="button"
                  className="select-box"
                  onClick={handleMonthClick}
                >
                  <span>{month}</span>
                  <img
                    className={isMonthOpen ? "opened" : ""}
                    src="/src/assets/down.svg"
                    alt="메뉴 열기/닫기"
                  />
                </button>
                {isMonthOpen && (
                  <ul className="select-options">{monthOptions}</ul>
                )}
              </div>
              <p>월</p>
            </div>

            <div className="select-item">
              <div className="dropdown">
                <button
                  type="button"
                  className="select-box"
                  onClick={handleDayClick}
                >
                  <span>{day}</span>
                  <img
                    className={isDayOpen ? "opened" : ""}
                    src="/src/assets/down.svg"
                    alt="메뉴 열기/닫기"
                  />
                </button>
                {isDayOpen && <ul className="select-options">{dayOptions}</ul>}
              </div>
              <p>일</p>
            </div>
          </div>
        </div>

        <Button type="submit" size="large" text="회원가입" />
      </form>
    </div>
  );
}

export default Signup;
