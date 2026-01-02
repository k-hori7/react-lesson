/*
  以下の問題をJavaScriptので解いてください。

  必ず、
  1. 関数を定義
  2. 引数となる定数を定義
  3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
  の順番で記述してください。
*/

/*
  例題
*/
// 問題: 以下のようなオブジェクトを受け取り、nameとageを返す関数を作成してください
// 例): 引数: { name: '太郎', age: 20 }, 返り値: '太郎は20歳です'

// 回答例:
// 1. 関数を定義
const formatPersonIntroduction = (person) => {
  return person.name + "は" + person.age + "歳です";
};

// 2. 引数となる定数を定義
const person = { name: "太郎", age: 20 };

// 3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
console.log(formatPersonIntroduction(person));

/*
    問題
  */

// 問題1: 引数として受け取った数値を2倍にして返す関数を作成して実行してください。
// 例) 引数: 2, 返り値: 4
const doubleNumber = (num) => num * 2;
const arg1 = 2;
console.log(doubleNumber(arg1));

// 問題2: 最大値を返す関数を作成して実行してください。
// 例) 引数: [1, 3, 2, 5, 4], 返り値: 5
// ※ 引数の数は何個でも受け取れる様にしてください
// ※ Math.maxは使用しないでください

const maxNumber = (numbers) => {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
};
const arg2 = [1, 2, 3, 5, 4];
console.log(maxNumber(arg2));

// 問題3: 配列を引数として受け取り、偶数のみを返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [2, 4, 6]
const filterEvenNumbers = (array) => array.filter((num) => num % 2 === 0);
const arg3 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(arg3));

// 問題4: 配列内の重複を除去する関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 2, 4, 5, 6, 5, 6], 返り値: [1, 2, 3, 4, 5, 6]
const removeDuplication = (array1) => {
  const array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      array2.push(array1[i]);
    }
  }
  return array2;
};
const arg4 = [1, 2, 3, 2, 4, 5, 6, 5, 6];
console.log(removeDuplication(arg4));

// 問題5: テンプレートリテラルを使用して、引数で受け取った名前を元に「こんにちは、○○さん」と出力する関数を作成して実行してください。
// 例) 引数: '太郎', 出力: こんにちは、太郎さん
const hello = (name) => console.log(`こんにちは、${name}さん`);
const arg5 = "太郎";
hello(arg5);
// 問題6: 配列を引数として受け取り、各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3], 返り値: [2, 4, 6]
const doubleArray = (array) => array.map((num) => num * 2);
const arg6 = [1, 2, 3];
console.log(doubleArray(arg6));

// 問題7: 文字列の配列を受け取り、index番号を付けたオブジェクトを返す関数を作成して実行してください。
// 例) 引数: ['a', 'b', 'c'], 返り値: [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }]
const stringArrayToIndexedObject = (array) => {
  return array.map((str, index) => {
    return {
      index: index,
      value: str,
    };
  });
};
const arg7 = ["a", "b", "c"];
console.log(stringArrayToIndexedObject(arg7));

// 問題8: 名前と年齢オブジェクトの配列を受け取り、ageが第二引数で受け取った数字と一致するオブジェクトを返す関数を作成して実行してください。
// 例) 第一引数: [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }]
//     第二引数: 30
//     返り値: { name: '次郎', age: 30 }
const findByAge = (array, age) => array.filter((obj) => obj.age === age);
const arg8 = [
  { name: "太郎", age: 20 },
  { name: "次郎", age: 30 },
  { name: "三郎", age: 40 },
];
console.log(findByAge(arg8, 30));

// 問題9: 数字の配列を引数として受け取り、偶数のみをフィルタリングし、その後各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [4, 8, 12]
const getDoubledEven = (array) =>
  array.filter((num) => num % 2 === 0).map((num) => num * 2);
const arg9 = [1, 2, 3, 4, 5, 6];
console.log(getDoubledEven(arg9));

// 問題10: 数字の配列を引数として受け取り、各要素に10を足し、その後偶数のみをフィルタリングし、最後に要素を昇順にソートした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [12, 14, 16]
const add10FilterEvenSort = (array) =>
  array
    .map((num) => num + 10)
    .filter((num) => num % 2 === 0)
    .sort((a, b) => a - b);
const arg10 = [1, 2, 3, 4, 5, 6];
console.log(add10FilterEvenSort(arg10));
