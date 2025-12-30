import React from "react";
import { useReducer } from "react";

//Propsの型定義
type HookReducerUpProps = {
  init: number;
};

//stateの方定義
type StateType = {
  count: number;
};

//Actionの型定義
type ActionType =
  | {
      type: "update";
      step: number;
    }
  | {
      type: "reset";
      init: number;
    };

export default function HookReducer({ init }: HookReducerUpProps) {
  //Reducerへの型付け
  const [state, dispatch] = useReducer(
    (state: StateType, action: ActionType) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      //stateの初期値
      count: init,
    }
  );
  const handleClick = () => {
    dispatch({ type: "update", step: 1 });
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
