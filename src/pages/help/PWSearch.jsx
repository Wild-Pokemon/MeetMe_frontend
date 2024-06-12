import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/pages/help/Search.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PWSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    navigate("/users/help/emailAuth");
  };

  return (
    <div className={styles.search_wrapper}>
      <h1>비밀번호 찾기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            placeholder="인증코드를 수신할 이메일을 입력하세요"
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

        <Button type="submit" text="이메일 인증" size="large" />
      </form>
    </div>
  );
}

export default PWSearch;
