import React from 'react';
import styles from './boxlist.css';
import { CommentsIcon } from '../../../../icons/CommentsIcon';
import { ShareIcon } from '../../../../icons/ShareIcon';
import { DisabledIcon } from '../../../../icons/DisabledIcon';
import { SavedIcon } from '../../../../icons/SavedIcon';
import { ComplainIcon } from '../../../../icons/ComplainIcon';
import { generateId, generateRandomString } from '../../../../../utils/react/generateRandomIndex';
import { Text } from '../../../../Text/Text'

interface IMenuItemsListProps {
  postId: string;
}

export function BoxList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem} id={generateRandomString()} onClick={() => console.log(postId)}>
        <a className={styles.menuLink} href="#">
          <CommentsIcon />
          <Text As='span' className={styles.menuSpan} size={20}>Комментарии</Text>
        </a>
      </li>
      <li className={styles.menuItem} id={generateRandomString()} onClick={() => console.log(postId)}>
        <a className={styles.menuLink} href="#">
          <ShareIcon />
          <Text As='span' className={styles.menuSpan} size={20}>Поделиться</Text>
        </a>
      </li>
      <li className={styles.menuItem} id={generateRandomString()} onClick={() => console.log(postId)}>
        <a className={styles.menuLink} href="#">
          <DisabledIcon />
          <Text As='span' className={styles.menuSpan} size={20}>Скрыть</Text>
        </a>
      </li>
      <li className={styles.menuItem} id={generateRandomString()} onClick={() => console.log(postId)}>
        <a className={styles.menuLink} href="#">
          <SavedIcon />
          <Text As='span' className={styles.menuSpan} size={20}>Сохранить</Text>
        </a>
      </li>
      <li  className={styles.menuItem} id={generateRandomString()} onClick={() => console.log(postId)}>
        <a className={styles.menuLink} href="#">
          <ComplainIcon />
          <Text As='span' className={styles.menuSpan} size={20}>Пожаловаться</Text>
        </a>
      </li>
    </ul>
  );
}
