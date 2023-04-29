import { createStore } from "redux";

export const SET_RANDOM_NUMBER = "SET_RANDOM_NUMBER";
export const COMPARE_NUMBER = "COMPARE_NUMBER";

export const setRandomNumber = (number) => ({
  type: SET_RANDOM_NUMBER,
  payload: number,
});

export const compareNumber = (number) => ({
  type: COMPARE_NUMBER,
  payload: number,
});

const initialState = {
  randomNumber: Math.floor(Math.random() * 100 + 1),
  comparisonResult: null,
};

console.log(initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_NUMBER:
      return {
        ...state,
        randomNumber: action.payload,
      };
    case COMPARE_NUMBER:
      const { randomNumber } = state;
      const { payload } = action;
      let comparisonResult = "";

      if (payload > randomNumber) {comparisonResult = "Холодно";} 

      else if (payload < randomNumber) {comparisonResult = "Горячо";} 

      else if (payload === randomNumber) {comparisonResult = "ПОЗДРАВЛЯЮ ТЫ ВЫИГРАЛ";} 

      else {comparisonResult = "Пустое поле напиши что нибудь";}
      return {
        ...state,
        comparisonResult,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
