import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
    className="loader-container"
      style={{opacity:`${started ? "0" : "1"}`}}
      
    >
      <div className="loader-title">
        <div
          className="loader-inner"
          style={{
            width: `${progress}%`,
          }}
        >
         안녕하세요.
        </div>
        <div className="loader-progress">안녕하세요.</div>
      </div>
    </div>
  );
};