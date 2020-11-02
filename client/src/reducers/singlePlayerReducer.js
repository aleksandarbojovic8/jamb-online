// import {
//   FROM_TOP_TO_BOTTOM,
//   FROM_TOP_AND_BOTTOM,
//   FROM_BOTTOM_TO_TOP,
//   ANNUNCIATION,
//   FROM_HAND,
//   ALERT,
//   FROM_MIDDLE,
//   TO_MIDDLE,
//   LAST_COL,
//   MAX_COL
// } from '../actions/types';

// const singlePlayerState = {
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
// };

// const singlePlayerReducer = (state = singlePlayerState, action) => {
// //   const { name = 'topToBottom', value = {} } = action.payload;

//   switch (action.type) {
//     case FROM_TOP_TO_BOTTOM:
//       let topToBottom;
//       topToBottom[name] = value[name];
//       return { ...state, topToBottom };
//     case FROM_TOP_AND_BOTTOM:
//       let fromTopAndBottom;
//       fromTopAndBottom[name] = value[name];
//       return { ...state, fromTopAndBottom };
//     case FROM_BOTTOM_TO_TOP:
//       let bottomToTop;
//       bottomToTop[name] = value[name];
//       return { ...state, bottomToTop };
//     case ANNUNCIATION:
//       let annunciation;
//       annunciation[name] = value[name];
//       return { ...state, annunciation };
//     case FROM_HAND:
//       let fromHand;
//       fromHand[name] = value[name];
//       return { ...state, fromHand };
//     case ALERT:
//       let alert;
//       alert[name] = value[name];
//       return { ...state, alert };
//     case FROM_MIDDLE:
//       let fromMiddle;
//       fromMiddle[name] = value[name];
//       return { ...state, fromMiddle };
//     case TO_MIDDLE:
//       let toMiddle;
//       toMiddle[name] = value[name];
//       return { ...state, toMiddle };
//     case LAST_COL:
//       let lastCol;
//       lastCol[name] = value[name];
//       return { ...state, lastCol };
//     case MAX_COL:
//       let maxCol;
//       maxCol[name] = value[name];
//       return { ...state, maxCol };
//     default:
//       return state;
//   }
// };

// export default singlePlayerReducer;
