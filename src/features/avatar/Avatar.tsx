import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon, Png } from "shared";

interface AvatarProps {
  srcImage: string;
}

export const Avatar: FC<AvatarProps> = ({ srcImage }) => {
  const [loading, setLoading] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const showImage = () => {
    setLoading(false);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={styles.avatar}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.avatar__wrapper}>
        <img
          src={srcImage}
          alt="avatar"
          className={`${styles.avatar__photo} ${loading && styles.avatar__hiden}`}
          onLoad={showImage}
        />

        {loading && (
          <Png
            name="avatar"
            alt="avatar"
            classes={styles.avatar__placeholder}
          />
        )}

        <input type="file" className={styles.avatar__input} />
      </div>
      {isHover && (
        <Button
          type="button"
          classes={styles.avatar__button}
          onClick={() => {}}
        >
          <Icon name="reload" classes={styles.avatar__icon} />
        </Button>
      )}
    </div>
  );
};
