import StyledPanel from "./StyledPanel";
import "./App.css";
import ListTemplate from "./ListTemplate";
import { Book } from "./Book";

function App() {
  let msg: string = "test";
  const books: Book[] = [
    {
      isbn: "978-0000000001",
      title: "React入門",
      price: 1980,
      summary: "Reactの基本（コンポーネント・props・state）を最短で学ぶ。",
      download: true,
    },
    {
      isbn: "978-0000000002",
      title: "TypeScriptはじめの一歩",
      price: 2420,
      summary: "型の考え方からジェネリクスまで、実務で困らない範囲を整理。",
      download: false,
    },
    {
      isbn: "978-0000000003",
      title: "CSS設計の教科書",
      price: 2200,
      summary: "保守しやすいCSSの書き方（命名・分割・コンポーネント化）。",
      download: true,
    },
  ];
  return (
    <>
      <StyledPanel children={msg}></StyledPanel>
      <hr></hr>
      <ListTemplate src={books}>
        {(b) => (
          <>
            <dt>{b.title}</dt>
            <dd>¥{b.price}</dd>
          </>
        )}
      </ListTemplate>
      <hr></hr>
      <ListTemplate src={books}>
        {(b) => (
          <>
            <dt>
              {b.title} {b.download && <span>（DL可）</span>}
            </dt>
            <dd>
              ¥{b.price}
              <div>{b.summary}</div>
            </dd>
          </>
        )}
      </ListTemplate>
      <hr></hr>
      <ListTemplate src={books.filter((b) => b.download)}>
        {(b) => (
          <>
            <dt>{b.title}</dt>
            <dd>{b.summary}</dd>
          </>
        )}
      </ListTemplate>
      <hr></hr>
      <ListTemplate src={books}>
        {(elem: Book) => (
          <>
            <dt>
              <a
                href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}
              >
                {elem.title}({elem.price}円)
              </a>
            </dt>
            <dd>{elem.summary}</dd>
          </>
        )}
      </ListTemplate>
    </>
  );
}

export default App;
