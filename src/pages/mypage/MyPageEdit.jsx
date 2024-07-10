import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/pages/mypage/MyPageEdit.module.scss";
import { useForm } from "react-hook-form";

function MyPageEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    getValues,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.mypage_edit_wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.profile_container}>
          <img
            className={styles.profile_img}
            src="/src/assets/default-profile.png"
            alt="기본 프로필"
          />
          <h3 className={styles.profile_name}>홍길동</h3>
        </div>
        <div className={styles.info_container}>
          <div>
            <p className={styles.info_title}>이메일</p>
            <p className={styles.info_content}>meetme@naver.com</p>
          </div>
        </div>

        <div className={styles.input_container}>
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

        <div className={styles.input_container}>
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

        <div className={styles.info_container}>
          <div>
            <p className={styles.info_title}>생년월일</p>
            <p className={styles.info_content}>1999년 2월 25일</p>
          </div>
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

        <div className={styles.profile_edit_button}>
          <Button type="submit" text="프로필 수정하기" size="large" />
        </div>
      </form>
    </div>
  );
}

export default MyPageEdit;
