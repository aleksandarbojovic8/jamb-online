import React from 'react';
import styles from './JambTable.module.css';

import NamesColumn from './NamesColumn';

export default function JambTable() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.column}>
        <NamesColumn />
      </div>
      <div className={styles.column}>&#8595;</div>
      <div className={styles.column}>&#8645;</div>
      <div className={styles.column}>&#x2191;</div>
      <div className={styles.column}>N</div>
      <div className={styles.column}>R</div>
      <div className={styles.column}>D</div>
      <div className={styles.column}>&#x2191;/&#8595;</div>
      <div className={styles.column}>&#8595;/&#x2191;</div>
      <div className={styles.column}>O</div>
      <div className={styles.column}>M</div>
      <div className={styles.column}>/</div>
    </div>
  );
}
