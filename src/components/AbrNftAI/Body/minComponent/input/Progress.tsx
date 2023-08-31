import { useState, useEffect } from "react";
import { ProgressSlide } from "./style";

const Progress = ({ value, min, max, changeVal }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {}, [value]);

  return (
    <ProgressSlide>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          changeVal(e);
        }}
      />
    </ProgressSlide>
  );
};

export default Progress;
