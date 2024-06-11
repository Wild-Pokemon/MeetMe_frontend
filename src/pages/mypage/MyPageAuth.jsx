import Input from "@components/Input";
import { useForm } from "react-hook-form";
import "@styles/pages/mypage/MyPageAuth.scss";
import Button from "@components/Button";

function MyPageAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="mypage-auth-wrapper">
      <h1>비밀번호 인증</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
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
          {errors.password ? (
            <p className="error-message">{errors.password.message}</p>
          ) : (
            <p className="message">
              본인 확인을 위해 비밀번호를 입력해 주세요.
            </p>
          )}
        </div>

        <div className="auth-button">
          <Button type="submit" text="비밀번호 인증" size="large" />
        </div>
      </form>
    </div>
  );
}

export default MyPageAuth;
