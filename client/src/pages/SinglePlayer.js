import React from 'react';
import styles from './SinglePlayer.module.css';
import JambTable from '../components/Table/JambTable';

export default function SinglePlayer() {
  return (
    <div className={styles.container}>
      <div>DICES</div>
      <JambTable />
    </div>
  );
}
