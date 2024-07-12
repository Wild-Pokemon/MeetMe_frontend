import Button from "@components/Button";
import Input from "@components/Input";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import styles from "@styles/pages/mypage/MyPageEdit.module.scss";
import useUserStore from "@zustand/user.mjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function MyPageEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [isActive, setIsActive] = useState(false);

  const onSubmit = async (formData) => {
    formData.email = user.email;

    if (!formData.password) {
      delete formData.password;
    }
    delete formData.passwordConfirm;

    if (!formData.phone) {
      formData.phone = user.phone;
    }

    try {
      const res = await axios.put("/auth/profile", formData);

      if (res.data.code) {
        setUser({
          ...user,
          phone: formData.phone,
        });
        navigate("/mypage");
      } else {
        throw new Error(res.data.message);
      }
    } catch (e) {
      console.log(e);
    }
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
          <h3 className={styles.profile_name}>{user.name}</h3>
        </div>
        <div className={styles.info_container}>
          <div>
            <p className={styles.info_title}>이메일</p>
            <p className={styles.info_content}>{user.email}</p>
          </div>
        </div>
        <div className={styles.password_option}>
          <p>비밀번호 변경</p>
          <input
            className={styles.checkbox}
            id="toggle"
            type="checkbox"
            value={isActive}
            onChange={() => setIsActive(!isActive)}
          />
          <label htmlFor="toggle"></label>
        </div>
        {isActive && (
          <>
            <div className={styles.input_container}>
              <label htmlFor="password">비밀번호</label>
              <Input
                type="password"
                id="password"
                placeholder="변경하실 비밀번호를 입력하세요."
                error={errors.password ? true : false}
                {...register("password", {
                  required: "변경하실 비밀번호를 입력하세요.",
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
                  required: "비밀번호를 한 번 더 입력하세요.",
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
          </>
        )}

        <div className={styles.info_container}>
          <div>
            <p className={styles.info_title}>생년월일</p>
            <p className={styles.info_content}>{user.birth}</p>
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
