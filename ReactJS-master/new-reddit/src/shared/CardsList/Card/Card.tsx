import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Image } from './Image';
import { BurgerMenu } from './BurgerMenu';
import { Media } from './Media';

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Image />
      <BurgerMenu />
      <Media />
    </li>
  );
}
