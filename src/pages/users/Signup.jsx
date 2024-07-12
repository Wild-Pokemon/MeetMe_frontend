import Button from "@components/Button";
import Dropdown from "@components/Dropdown";
import Input from "@components/Input";
import Loading from "@components/loading/Loading";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import styles from "@styles/pages/users/Signup.module.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [day, setDay] = useState(currentDate.getDate());
  const axios = useCustomAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDisabled) {
      setFocus("domain");
    }
  }, [isDisabled, setFocus]);

  const onSubmit = async (formData) => {
    formData.birth = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    formData.email = formData.email + "@" + formData.domain;
    delete formData.passwordConfirm;
    delete formData.domain;

    try {
      setIsLoading(true);

      const res = await axios.post("/signs/signup", formData);

      if (res.data.code !== 200) throw new Error(res.data.message[0]);

      navigate("/users/login");
    } catch (e) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheck = () => {
    console.log("이메일 중복확인");
  };

  // Dropdown 컴포넌트화 하기
  const handleSelectDomain = (selectedDomain) => {
    setDomain(selectedDomain);
    if (selectedDomain === "직접 입력") {
      setIsDisabled(false);
      setValue("domain", "");
      setFocus("domain");
    } else {
      setIsDisabled(true);
      setValue("domain", selectedDomain);
    }
  };

  const emailList = [
    "naver.com",
    "hanmail.net",
    "kakao.com",
    "google.com",
    "nate.com",
    "직접 입력",
  ];

  const yearList = Array.from(
    { length: currentDate.getFullYear() - 1900 + 1 },
    (_, i) => 1900 + i
  ).reverse();

  const handleSelectYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const monthList = Array.from({ length: 12 }, (_, i) => 1 + i);

  const handleSelectMonth = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  // 월에 따라 다르게
  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const dayList = month31.includes(month)
    ? Array.from({ length: 31 }, (_, i) => 1 + i)
    : month === 2
    ? Array.from({ length: 29 }, (_, i) => 1 + i)
    : Array.from({ length: 30 }, (_, i) => 1 + i);

  const handleSelectDay = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.signup_wrapper}>
          <h1>회원가입</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_container}>
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
            <div className={styles.input_container}>
              <label htmlFor="email">이메일</label>
              <div className={styles.email_container}>
                <Button
                  className={styles.check_button}
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
                <Dropdown
                  selectedValue={domain}
                  options={emailList}
                  onSelect={handleSelectDomain}
                />
              </div>
              {(errors.email || errors.domain) && (
                <p>이메일을 정확히 입력해 주세요.</p>
              )}
            </div>

            <div className={styles.input_container}>
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
                      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "비밀번호 형식에 맞게 입력해 주세요.",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className={styles.input_container}>
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
              {errors.passwordConfirm && (
                <p>{errors.passwordConfirm.message}</p>
              )}
            </div>

            <div className={styles.input_container}>
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

            <div className={styles.input_container}>
              <label htmlFor="phone">생년월일</label>
              <div className={styles.select_container}>
                <div className={styles.select_item}>
                  <Dropdown
                    selectedValue={year}
                    options={yearList}
                    onSelect={handleSelectYear}
                  />
                  <p>년</p>
                </div>

                <div className={styles.select_item}>
                  <Dropdown
                    selectedValue={month}
                    options={monthList}
                    onSelect={handleSelectMonth}
                  />
                  <p>월</p>
                </div>

                <div className={styles.select_item}>
                  <Dropdown
                    selectedValue={day}
                    options={dayList}
                    onSelect={handleSelectDay}
                  />
                  <p>일</p>
                </div>
              </div>
            </div>

            <Button type="submit" size="large" text="회원가입" />
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;
