import Input from "@components/Input";
import styles from "@styles/pages/users/Login.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const [isChecked, setIsChecked] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCheck();
    }
  };

  return (
    <div className={styles.login_wrapper}>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            error={errors.email ? true : false}
            {...register("email", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식이 아닙니다.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={styles.input_container}>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            error={errors.password ? true : false}
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="keepLogin"
            checked={isChecked}
            onChange={handleCheck}
            {...register("keeplogin")}
          />
          <label htmlFor="keepLogin" tabIndex={0} onKeyDown={handleKeyDown}>
            로그인 상태 유지
          </label>
        </div>

        <button type="submit">로그인</button>
      </form>

      <Link className={styles.signup} to="/users/signup">
        회원가입
      </Link>

      <div className={styles.help}>
        <Link className={styles.help_link} to="/users/help/emailSearch">
          이메일 찾기
        </Link>
        <Link className={styles.help_link} to="/users/help/pwSearch">
          비밀번호 찾기
        </Link>
      </div>

      <div className={styles.social}>
        <button type="button">
          <i className="ir">구글 계정으로 로그인</i>
          <img src="/src/assets/google.svg" alt="구글 로그인" />
        </button>
        <button type="button">
          <i className="ir">카카오 계정으로 로그인</i>
          <img src="/src/assets/kakao.svg" alt="카카오 로그인" />
        </button>
        <button type="button">
          <i className="ir">네이버 계정으로 로그인</i>
          <img src="/src/assets/naver.svg" alt="네이버 로그인" />
        </button>
      </div>
    </div>
  );
}

export default Login;
