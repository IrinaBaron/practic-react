import React from 'react';
// import styles from './shared/Layout/layout.css';
import styles from './layout.css';
// import styles from '/shared/Layout/layout.css';

interface ILayoutProprs {
  children ?: React.ReactNode
}

export function Layout({ children }: ILayoutProprs) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
