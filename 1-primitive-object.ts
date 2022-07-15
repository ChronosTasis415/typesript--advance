/**
 * 原始数据类型：7种
 * string/number/boolean/undefined/null/symbol/bigint
 * null 表示有值。值为空
 * undefined 表示没有值
 * void类型可以是undefined
 */

const str: string = 'string';
const num: number = 123;
const bool: boolean = true;
const undef: undefined = undefined;
const empty: null = null;
const voi: void = undefined
const sym: symbol = Symbol('aaa')


/**
 * 引用类型
*/

// 1数组
const arr: string[] = ['111']
const arr1: Array<number> = [1,2,3]
// 2元组 tuple 定长 定类型
const tuple1: [string, number, string] = ['111', 2, '333'];
const tuple2: [string, number?, string?] = ['aaa'];
type tupleLength = typeof tuple1.length;  // 3
type typle2Length = typeof tuple2.length;  // 1 | 2 | 3
  // 具名元组
const tuple3: [username: string, age: number, gender: string] = ['xiaohong', 20, 'male']
// const [username, age, gender, school] = tuple3; // 越界访问会报错


/**
 * 类型标注 即 : 之后的类型
 * 例如 str: string
 * 
 * 一些复杂的类型标注（描述对象，数组）可以用interface，代表了这个对象对外提供的接口结构
*/

type Arr = string[];
const arr4: Arr = ['11']


// 接口属性修饰 常见的Optional(可选),Readonly(只读)
interface My {
  readonly name: string;
  age: number;
  gender: string;
  fun?: () => void
}

const me: My = {
  name: 'zz',
  age: 20,
  gender: 'male'
}
// me.name = 'zh'

// me.fun() // 不能调用可能是“为定义”的对象

// 引用类型  对象object来表示非原始类型的类型 Object， function， array
// !!!! 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。Object, Array, String, Number...
// 以下三种都是成功的

const obj: object = {}
const fun: object = function() {}
const array: object = [1,2,3]


// {} 表示非null/undefined 与any同样恶劣
const a: {} = 'sss'
// const b: {} = undefined // error
// const c: {} = null // error
let d: {} = {a: 'aa'}  /// 无法对这个变量进行任何赋值操作
const e: {} = function() {}
let f: {} = 1