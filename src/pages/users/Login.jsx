import Input from "@components/Input";
import "@styles/pages/users/Login.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const [isChecked, setIsChecked] = useState();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setError,
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="login_wrapper">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          placeholder="이메일을 입력하세요"
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "이메일 형식이 아닙니다.",
            },
          })}
        >
          이메일
        </Input>

        <Input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
          })}
        >
          비밀번호
        </Input>

        <div className="checkbox">
          <input
            type="checkbox"
            id="keepLogin"
            checked={isChecked}
            onChange={handleCheck}
          />
          <label htmlFor="keepLogin">로그인 상태 유지</label>
        </div>

        <button type="submit">로그인</button>
      </form>

      <Link className="signup" to="/users/signup">
        회원가입
      </Link>

      <div className="help">
        <Link to="/users/help/emailInq">이메일 찾기</Link>
        <Link to="/users/help/pwInq">비밀번호 찾기</Link>
      </div>

      <div className="social">
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
