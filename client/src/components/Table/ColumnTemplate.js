import React from 'react';
import styles from './ColumnTemplate.module.css';

export default function ColumnTemplate(props) {
  const { name } = props;

  const obj = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    upperSum: null,
    max: null,
    min: null,
    middleSum: null,
    kenta: null,
    triling: null,
    ful: null,
    poker: null,
    jamb: null,
    bottomSum: null
  };

  let rollNumber = 1;

  //   topToBottom: {},
  //   fromTopAndBottom: {},
  //   bottomToTop: {},
  //   annunciation: {},
  //   fromHand: {},
  //   alert: {},
  //   fromMiddle: {},
  //   toMiddle: {},
  //   lastCol: {},
  //   maxCol: {}

  const fillField = e => {
    const id = e.target.id;
    if (id === 'upperSum' || id === 'middleSum' || id === 'bottomSum') {
      return;
    }
    //call action to fill data on this field
    console.log(id);
  };

  const keyArray = Object.keys(obj);

  const enabledFields = [];

  if (name === 'topToBottom') {
    let foundOne = false;
    keyArray.forEach(val => {
      if (
        foundOne === false &&
        obj[val] === null &&
        val !== 'upperSum' &&
        val !== 'middleSum' &&
        val !== 'bottomSum'
      ) {
        enabledFields.push(val);
        foundOne = true;
      }
    });
  }

  if (name === 'fromTopAndBottom') {
    keyArray.forEach(val => {
      if (val !== 'upperSum' && val !== 'middleSum' && val !== 'bottomSum') {
        enabledFields.push(val);
      }
    });
  }

  if (name === 'bottomToTop') {
    let foundOne = false;
    keyArray
      .slice()
      .reverse()
      .forEach(val => {
        if (
          foundOne === false &&
          obj[val] === null &&
          val !== 'upperSum' &&
          val !== 'middleSum' &&
          val !== 'bottomSum'
        ) {
          enabledFields.push(val);
          foundOne = true;
        }
      });
  }

  if (name === 'fromHand') {
    keyArray.forEach(val => {
      if (
        val !== 'upperSum' &&
        val !== 'middleSum' &&
        val !== 'bottomSum' &&
        rollNumber === 1
      ) {
        enabledFields.push(val);
      }
    });
  }

  if (name === 'fromMiddle') {
    let foundOne = false;
    let foundTwo = false;
    keyArray
      .slice(0, 8)
      .reverse()
      .forEach(val => {
        if (foundOne === false && obj[val] === null && val !== 'upperSum') {
          enabledFields.push(val);
          foundOne = true;
        }
      });

    keyArray.slice(8).forEach(val => {
      if (
        foundTwo === false &&
        obj[val] === null &&
        val !== 'middleSum' &&
        val !== 'bottomSum'
      ) {
        enabledFields.push(val);
        foundTwo = true;
      }
    });
  }

  if (name === 'toMiddle') {
    let foundOne = false;
    let foundTwo = false;
    keyArray.slice(0, 8).forEach(val => {
      if (foundOne === false && obj[val] === null && val !== 'upperSum') {
        enabledFields.push(val);
        foundOne = true;
      }
    });

    keyArray
      .slice(8)
      .reverse()
      .forEach(val => {
        if (
          foundTwo === false &&
          obj[val] === null &&
          val !== 'middleSum' &&
          val !== 'bottomSum'
        ) {
          enabledFields.push(val);
          foundTwo = true;
        }
      });
  }

  if (name === 'maxCol') {
    keyArray.forEach(val => {
      if (val !== 'upperSum' && val !== 'middleSum' && val !== 'bottomSum') {
        enabledFields.push(val);
      }
    });
  }

  return (
    <>
      {keyArray.map(val => {
        let enabled = enabledFields.includes(val);
        return (
          <div
            id={val}
            key={val}
            onClick={e => {
              if (enabled) {
                fillField(e);
              }
            }}
            className={`${styles.field} ${
              enabled ? styles.nextField : styles.fieldDisabled
            }`}
          >
            {obj[val]}
          </div>
        );
      })}
    </>
  );
}
