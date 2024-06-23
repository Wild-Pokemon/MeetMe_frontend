import styles from "@styles/pages/error/ErrorPage.module.scss";
import errorIcon from "@assets/error_icon.svg";

function ErrorPage() {
  return (
    <div className={styles.error_wrapper}>
      <div className={styles.error_contents}>
        <div className={styles.errorText}>
          <h1>
            404 <br />
            ERROR
          </h1>
          <p>Page Not Found</p>
        </div>
        <img src={errorIcon} alt="애러이미지" />
      </div>
    </div>
  );
}

export default ErrorPage;
