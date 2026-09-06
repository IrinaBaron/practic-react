import React from 'react';
import styles from './burgermenu.css';
import { Dropdown } from '../../../Dropdown';
import { BoxList } from './BoxList';
import { GenericList } from '../../../../GenericList/GenericList';
import styles1 from './BoxList/boxlist.css';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { MenuIcon } from '../../../icons/MenuIcon';


let dropList = [
  {
    text: 'Комментарии',
    className: styles1.menuItem,
    onClick: () => console.log('opened'),
  },
  {
    text: 'Поделиться',
    className: styles1.menuItem,
    onClick: () => console.log('opened'),
  },
  {
    text: 'Сохранить',
    className: styles1.menuItem,
    onClick: () => console.log('opened'),
  },
  {
    text: 'Пожаловаться',
    className: styles1.menuItem,
    onClick: () => console.log('opened'),
  },
].map(generateId);

export function BurgerMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('opened')}
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        {/* <GenericList list={dropList} /> */}
        <BoxList postId='6789' />
      </Dropdown>
    </div>
  );
}
