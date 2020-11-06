import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDice } from '../../actions/dicesActions';
import styles from './OneDice.module.css';

export default function OneDice({ index }) {
  const dispatch = useDispatch();
  const dicesState = useSelector(state => state.dices);
  const { dicesValue, dicesSelected } = dicesState;
  const isSelected = dicesSelected[index];

  return (
    <div className={`${styles.diceField} ${isSelected && styles.selectedDice}`}>
      <img
        src={require(`../../img/die${dicesValue[index]}.png`).default}
        alt="Dice"
        width="100%"
        height="100%"
        onClick={() => dispatch(selectDice(index))}
      />
    </div>
  );
}
