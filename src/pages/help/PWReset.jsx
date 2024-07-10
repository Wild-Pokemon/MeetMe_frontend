import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/pages/help/PWReset.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PWReset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    navigate("/users/login");
  };

  return (
    <div className={styles.password_reset_wrapper}>
      <h1>비밀번호 재설정</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="password">새로운 비밀번호</label>
          <Input
            type="password"
            id="password"
            placeholder="영문 대/소문자, 숫자, 특수문자를 포함하여 8글자 이상 입력하세요."
            error={errors.password ? true : false}
            {...register("password", {
              required: "새로운 비밀번호를 입력해 주세요.",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
          {errors.password && <p>{errors.passwordConfirm.message}</p>}
        </div>
        <Button type="submit" text="비밀번호 변경하기" size="large" />
      </form>
    </div>
  );
}

export default PWReset;
