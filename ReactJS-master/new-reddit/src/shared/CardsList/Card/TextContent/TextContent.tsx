import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userBox}>
          <img className={styles.avatarBox} src="https://cdn.dribbble.com/users/393931/screenshots/16958377/media/ecf49972150130cc2dced87a3475adc0.png?compress=1&resize=400x300&vertical=top" alt="photo" />
          <a className={styles.username} href="#">
            Владимир Петров
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          5 часов назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a className={styles.postLink} href="#">
          Реплицированные с зарубежных источников возможности
        </a>
      </h2>
    </div>
  );
}
