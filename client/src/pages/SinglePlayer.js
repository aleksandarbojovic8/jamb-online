import React from 'react';
import styles from './SinglePlayer.module.css';
import Dices from '../components/Dices/Dices';
import JambTable from '../components/Table/JambTable';

export default function SinglePlayer(props) {
  const { path } = props.match;
  return (
    <div className={styles.container}>
      <Dices />
      <JambTable path={path} />
    </div>
  );
}
