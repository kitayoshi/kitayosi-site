import cx from "classnames";

import styles from "./FrameBox.module.css";

type FrameBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

function FrameBox(props: FrameBoxProps) {
  const { className, children } = props;

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.innerContainer}>
        <div className={styles.childrenContainer}>{children}</div>
        <div className={styles.childrenCover}></div>
      </div>
    </div>
  );
}

export default FrameBox;
