import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Png } from "shared";

interface AvatarProps {
  srcImage: string;
}

export const Avatar: FC<AvatarProps> = ({ srcImage }) => {
  const [loading, setLoading] = useState(true);
  const showImage = () => {
    setLoading(false);
  };

  return (
    <div className={styles.avatar}>
      <img
        src={srcImage}
        alt="avatar"
        className={styles.mainForm__photo}
        onLoad={showImage}
      />
      {loading && (
        <Png name="avatar" alt="avatar" classes={styles.mainForm__icon} />
      )}
      <input type="file" className={styles.mainForm__input} />
    </div>
  );
};
