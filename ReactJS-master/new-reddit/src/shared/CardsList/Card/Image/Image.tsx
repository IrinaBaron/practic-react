import React from 'react';
import styles from './image.css';

export function Image() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/3366206/screenshots/16219326/media/31f3b4a50fced3660e035d19bbae7660.jpg?compress=1&resize=400x300&vertical=top" alt="" />
    </div>
  );
}
