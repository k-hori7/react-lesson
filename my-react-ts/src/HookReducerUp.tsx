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

//Reducerの型定義
type CountReducerType = (
  state: StateType,
  action: ActionType
) => StateType | undefined;

export default function HookReducer({ init }: HookReducerUpProps) {
  //Reducerへの型付け
  const [state, dispatch] = useReducer<CountReducerType>(
    (state, action) => {
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
    dispatch({ type: "update" });
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}

//HookReducerUp.jsx のコードは以下
// export default function HookReducer({ init }) {
//     const [state, dispatch] = useReducer(
//       (state, action) => {
//         switch (action.type) {
//           case 'update':
//             return { count: state.count + 1 };
//           default:
//             return state;
//         }
//       },
//       {
//         count: init
//       }
//     );
//     const handleClick = () => {
//       dispatch({ type: 'update' });
//     };
//     return (
//       <>
//         <button onClick={handleClick}>カウント</button>
//         <p>{state.count}回、クリックされました。</p>
//       </>
//     );
//   }
