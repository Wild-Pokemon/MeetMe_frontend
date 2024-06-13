import styles from "@styles/components/Loading.module.scss";
import Lottie from "lottie-react";
import LoadingIcon from "@components/loading/loading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.loading_box}>
      <div className={styles.loading}>
        <Lottie options={defaultOptions} height={80} width={80} />
      </div>
    </div>
  );
}

export default Loading;
