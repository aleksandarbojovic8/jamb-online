import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDiceAction } from '../../actions/dicesActions';
import styles from './OneDice.module.css';

export default function OneDice({ diceIndex }) {
  const dispatch = useDispatch();
  const dicesState = useSelector(state => state.dices);
  const { dicesValue, dicesSelected } = dicesState;
  const isSelected = dicesSelected[diceIndex];

  return (
    <div className={`${styles.diceField} ${isSelected && styles.selectedDice}`}>
      <img
        src={require(`../../img/die${dicesValue[diceIndex]}.png`).default}
        alt="Dice"
        width="100%"
        height="100%"
        onClick={() => dispatch(selectDiceAction(diceIndex))}
      />
    </div>
  );
}
