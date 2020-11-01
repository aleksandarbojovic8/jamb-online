import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="singlePlayer" className={styles.link}>
        Single Player
      </Link>
      <Link to="multiPlayer" className={styles.link}>
        Multi Player
      </Link>
    </div>
  );
}
