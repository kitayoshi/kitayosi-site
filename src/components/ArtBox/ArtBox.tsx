import cx from "classnames";

import styles from "./ArtBox.module.css";

type ArtBoxProps = {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
};

function ArtBox(props: ArtBoxProps) {
  const { className, children, title, description } = props;

  return (
    <div className={cx(styles.container, className)}>
      {children}
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default ArtBox;
