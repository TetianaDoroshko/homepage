/* const ggg = new Set();
ggg.add("Mary");
ggg.add("Donna");
ggg.add("Mary");
ggg.add("Donna");
ggg.add("Jill");
ggg.add("Philipp"); */

/** console.log(ggg);
const o = {
  name: "o",
  id: 123,
};*/

// const hhh = new Set([1, 2, 3, 4, 3, 4, 2, 5]);
// hhh.add(7);
// hhh.add(1);
// hhh.add(o);
// hhh.add({
//   name: "o",
//   id: 123,
// });

// console.log(hhh);

//-----------

// const foo = () => {
//   console.log("foo");
// };

// const myMap = new Map([
//   [1, 1],
//   ["str", "string"],
//   [true, false],
//   [{ name: "o" }, { key: "value" }],
//   [foo, () => {}],
// ]);

// console.log(myMap.get(true));

// myMap.set("str", "string");

// console.log(myMap);

// ---------

// const arr = ["aaa", "bbb", "aaa", "aaa", "aaa", "aaa", "bbb"];
// console.log(
//   arr.some((el) => {
//     if (el === "aaa") {
//       return false;
//     }
//   })
// );

//----------
console.log("work");
const API_URL =
  "https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json";

const SECURITY_HEADERS = {
  headers: {
    authorization: "token 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",
  },
};

const incomeData = fetch(API_URL, SECURITY_HEADERS);
incomeData
  .then((res) => res.json())
  .then((data) => {
    const fighters = JSON.parse(atob(data.content));
    const names = fighters.map((fighter) => fighter.name);
    const nameStr = names.join("\n");
    console.log(nameStr);
  });
