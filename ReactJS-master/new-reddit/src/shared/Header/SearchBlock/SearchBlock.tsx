import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name ?: string;
  iconImg ?: string;
}

// function getPosts() {
//   useEffect(() => {
//     axios.get('https://oauth.reddit.com/dev/api/#GET_best')
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       console.log('func')
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
//   }, [])
// }

// getPosts();

export function SearchBlock({ token }: ISearchBlockProps) {
  const [ data, setData ] = useState<IUserData>( {} );
  // useEffect(() => {
  //   axios.get('https://oauth.reddit.com/api/v1/me', {
  //     headers: { Authorization: `bearer ${token}` } 
  //   })
  //   .then(( response ) => {
  //     const userData = response.data;
  //     console.log(userData.name)
  //     setData( { name: userData.name, iconImg: userData.icon_img });
  //   })
  //   .catch(console.log);
  // }, [token])
  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/comment', {
      headers: { Authorization: `bearer ${token}` }
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
      console.log('ok')
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }, [])



  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
      {/* <input type="text" placeholder='Поиск'/> */}
    </div>
  );
}
