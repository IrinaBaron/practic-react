import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function useToken() {
  const [token, setToken] = useState('');
  
  useEffect( () => {
    const url = new URL(window.location.href);
    // const tokenId = url.searchParams.get("#access_token");
    // console.log(url.searchParams.get('#access_token'));
    // setToken(url.searchParams.get("token"));
    
    console.log(url.searchParams.get('#access_token'));
  }, [])


  return [token]
}
