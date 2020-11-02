import React from 'react';
import styles from './JambTable.module.css';

import NamesColumn from './NamesColumn';
import ColumnTemplate from './ColumnTemplate';

export default function JambTable() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.column}>
        <NamesColumn />
      </div>
      <div className={styles.column}>
        <span>&#8595;</span>
        <ColumnTemplate name="topToBottom" />
      </div>
      <div className={styles.column}>
        <span>&#8645;</span>
        <ColumnTemplate name="fromTopAndBottom" />
      </div>
      <div className={styles.column}>
        <span>&#x2191;</span>
        <ColumnTemplate name="bottomToTop" />
      </div>
      {/* <div className={styles.column}>
        <span>N</span>
      </div> */}
      <div className={styles.column}>
        <span>R</span>
        <ColumnTemplate name="fromHand" />
      </div>
      {/* <div className={styles.column}>
        <span>D</span>
      </div> */}
      <div className={styles.column}>
        <span>&#x2191;/&#8595;</span>
        <ColumnTemplate name="fromMiddle" />
      </div>
      <div className={styles.column}>
        <span>&#8595;/&#x2191;</span>
        <ColumnTemplate name="toMiddle" />
      </div>
      {/* <div className={styles.column}>
        <span>O</span>
      </div> */}
      <div className={styles.column}>
        <span>M</span>
        <ColumnTemplate name="maxCol" />
      </div>
      <div className={styles.column}>/</div>
    </div>
  );
}
