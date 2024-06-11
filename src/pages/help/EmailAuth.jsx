import Button from "@components/Button";
import Input from "@components/Input";
import "@styles/pages/help/EmailAuth.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function EmailAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const authCode = Object.values(formData).join("");
    console.log(authCode);
    navigate("/users/help/pwReset");
  };

  return (
    <div className="email-auth-wrapper">
      <h1>인증코드 입력하기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="authCode1">인증코드</label>
          <div className="code-container">
            <Input
              type="text"
              id="authCode1"
              size="number"
              {...register("authCode1", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
            <Input
              type="text"
              id="authCode2"
              size="number"
              {...register("authCode2", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
            <Input
              type="text"
              id="authCode3"
              size="number"
              {...register("authCode3", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
            <Input
              type="text"
              id="authCode4"
              size="number"
              {...register("authCode4", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
            <Input
              type="text"
              id="authCode5"
              size="number"
              {...register("authCode5", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
            <Input
              type="text"
              id="authCode6"
              size="number"
              {...register("authCode6", {
                required: "인증코드를 정확히 입력해 주세요.",
              })}
            />
          </div>
          {errors.authCode1 ? (
            <p className="error-message">{errors.authCode1.message}</p>
          ) : (
            <p className="message">
              이메일로 발송된 인증코드 6자리를 입력해주세요.
            </p>
          )}
        </div>
        <Button type="submit" size="large" text="인증 완료" />
      </form>
    </div>
  );
}

export default EmailAuth;
