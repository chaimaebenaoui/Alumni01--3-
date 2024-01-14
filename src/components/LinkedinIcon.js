import * as React from "react";
import { useMemo } from "react";
import * as styles from "./LinkedinIcon.module.css";

const LinkedinIcon = ({
  linkedin,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const linkedinIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <img
      className={styles.linkedinIcon}
      alt=""
      src={linkedin}
      style={linkedinIconStyle}
    />
  );
};

export default LinkedinIcon;
