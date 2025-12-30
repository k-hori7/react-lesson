import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import MyHello from './MyHello';
// import EventBasic from './EventBasic';
// import StateBasic from './StateBasic';
// // import ForList from './ForList';
// import books from './books';
// import ForNest from './ForNest';
// import ForFilter from './ForFilter';
// import ForSort from './ForSort';
// import SelectStyle from './SelectStyle';
// import TitledPanel from './TitledPanel';
// import ListTemplate from './ListTemplate';
// import StateParent from './StateParent';
// import StateForm from './StateForm';
// import StateFormUC from './StateFormUC';
// import FormList from './FormList';
// import FormTextarea from './FormTextarea';
// import FormTextarea1 from './FormTextarea1';
// import FormRadio from './FormRadio';
// import FormFile from './FormFiles';
// import StateNestImmer from './StateNestImeer';
// import StateTodo from './StateTodo';
// import StateEffect from './StateEffect';
// import HookTimer from './HookTimer';
// import HookEffect from './HookEffect';
// import HookRefNg from "./HookRefNg";
// import HookRef from "./HookRef";
import HookRefForward from "./HookRefForward";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* <p>現在時刻：{(new Date()).toLocaleString()}</p> */}
      {/* <App /> */}
      {/* <MyHello myName="鈴木" /> */}
      {/* <EventBasic type="time" /> */}
      {/* <StateBasic init={0} /> */}
      {/* <ForList src={books} /> */}
      {/* <ForNest src={books} />
      <p>ーーーーーー3500円以下ーーーーー</p>
      <ForFilter src={books} />
      <p>sort</p>
      <ForSort src = {books} />
      <SelectStyle mode='dark' />
      <TitledPanel title={<p>メンバー募集中</p>} body={<p>ようこそ、Wingsプロジェクトへ</p>} /> */}
      {/* <ListTemplate src={books}>
        {
          elem =>(
            <>
            <dt>
              <a href='https://se-ya.net'>
                {elem.title}({elem.price}円)
              </a>
            </dt>
            </>
          )
        } */}
      {/* </ListTemplate>
      <StateParent />
      <StateForm />
      <StateFormUC />
      <FormList />
      <FormTextarea />
      <FormTextarea1 />
      <FormRadio />
      <FormFile />
      <StateNestImmer /> */}
      {/* <StateTodo /> */}
      {/* <StateEffect init={0}/> */}
      {/* <HookTimer init={10} /> */}
      {/* <HookEffect init={10} /> */}
      {/* <HookRef /> */}
      <HookRefForward />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
