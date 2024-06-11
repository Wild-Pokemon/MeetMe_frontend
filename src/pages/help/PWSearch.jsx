import Button from "@components/Button";
import Input from "@components/Input";
import "@styles/pages/help/Search.scss";
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
    <div className="search-wrapper">
      <h1>비밀번호 찾기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
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

        <div className="input-container">
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

        <Button type="submit" text="이메일 인증" size="large" />
      </form>
    </div>
  );
}

export default PWSearch;
