import React from 'react';
import styles from './media.css';
import { KarmaCounter } from './KarmaCounter';
import { Comments } from './Comments';
import { Actions } from './Actions';

export function Media() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />

      <Comments />

      <Actions />
    </div>
  );
}
