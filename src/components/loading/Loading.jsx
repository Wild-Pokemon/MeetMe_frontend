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
    <div className="loading-box">
      <div className="loading">
        <Lottie options={defaultOptions} height={80} width={80} />
      </div>
    </div>
  );
}

export default Loading;
