// 字面量类型和可枚举类型

// 字面量类型 比 原始类型更加精确，同时也是原始类型的子类型
type literal = 'xiaoming';
const username: literal = 'xiaoming'; //只能是xiaoming

interface User {
  name: 'xiaohong' | 'xiaoming';
  age: number
}

const user: User = {
  name: 'xiaohong', // 只能是‘xiaohong' 或者 'xiaoming'
  age: 30
}

console.log(user.name === 'xiaohong');

// 联合类型  是指一组可用的类型集合
type union = 'string' | 'boolean' | (() => {}) | (1 | 2)

// 对象也有字面量类型
interface Smth {
  name: 'li',
  age: 20
}

declare var smUser: Smth;
// smUser.age // 20
// smUser.name; // li

// 不管是原始类型还是引用类型的字面量类型 表示都是类型 而不是值

// 枚举类型
// 枚举是双向映射的 但是通过声明的常量枚举是单向的
enum Names {
  A = 'a',
  B = 'b',
  C = 'c'
}

const someName = Names.B; // b
console.log(someName);

enum List {
  A,
  B,
  C
}
const range = List.A
console.log(List.A); // 0
console.log(List[0]);// A

enum Mixed {
  name = 'zh',
  age = 20
}

Mixed.name === 'zh'; // true
Mixed[20] === 'age' // true
console.log(Mixed[20]);

// 常量枚举
const enum Items {
  A,
  B,
  C
}
console.log(Items.A); // 0
// console.log(Items[0]); // 只有使用字符串文本才能访问常数枚举成员