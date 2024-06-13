import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/pages/help/Search.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function EmailSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    navigate("/users/help/emailResult");
  };

  return (
    <div className={styles.search_wrapper}>
      <h1>이메일 찾기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="name">이름</label>
          <Input
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            error={errors.name ? true : false}
            {...register("name", {
              required: "이름을 입력해 주세요.",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
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

        <Button type="submit" size="large" text="이메일 찾기" />
      </form>
    </div>
  );
}

export default EmailSearch;
