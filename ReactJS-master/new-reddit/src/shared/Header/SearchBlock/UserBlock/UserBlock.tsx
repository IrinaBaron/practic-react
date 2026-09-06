import React from 'react';
import styles from './userblock.css';
import { Text } from '../../../Text/Text';
import { AvatarAnon } from '../../../icons/AvatarAnon';

interface IUserBlockProps {
  avatarSrc ?: string
  username ?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a className={styles.userBox} 
    href="https://www.reddit.com/api/v1/authorize?client_id=bcSPLopuuPFRC-N4wYaKzg&response_type=token&state=random_string&redirect_uri=http://localhost:3000/&scope=read identity submit">
      
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img src={ avatarSrc } alt="user avatar" className={styles.avatarImage}/>
            : <AvatarAnon />
          }
          
        </div>

        <div className={styles.username}>
          <Text size={20}>Имя пользователя</Text>
        </div>
      
    </a>
  );
}
