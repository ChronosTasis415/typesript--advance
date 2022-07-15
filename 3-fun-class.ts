/**
 * 函数部分：
 * 参数类型
 * 返回类型
 * 重载的应用
*/
// 两种生命类型
//函数字声明
function foo(a: number, b: number): number {
  return a + b;
}
// 函数表达式
const foo1 = function(a: number, b: number): number {
  return a + b;
}
// 函数表达式 不推荐 可读性差
const foo2: (a: number, b: number) => number = function(a, b) {
  return a + b
}
// 上述可改为
type Foo = (a: number, b: number) => number;
interface FooInter {
  (a: number, b: number): number; // 函数本质也是一个结构固定的类型！！！！
}
const foo3: Foo = function(a, b) {
  return a + b
}

// void类型 用于无返回的函数 即无return
// !!!typescript 中 undefined类型代表一个实际的、有意义的类型值
// !!! void 表示空、无意义的类型值 就像js中的null一样
function smth(): void {}

// 可选参数和rest

// 可选
interface Bar {
  (a: number, b?: number): number;
}
// rest
interface Fun {
  (a: number, ...res: number[]): number
}



// 函数重载

// 分为两部分  函数重载签名 和 函数实体
function func(a: string, b: true): number;
function func(a: string, b?: false): string;
function func(a: string, b?: boolean): string | number {
  if (b) {
    return 111
  } else {
    return 'aaa'
  }
}


// 不同函数的 类型签名
// async function promise(): Promise<void>
// function* generator(): Iterable<void>
// async function* genera(): AsyncIterable<void>



/**
 * class 类中的类型定义
 * static 静态成员 作为构造函数的属性挂载在构造函数上 ClassName.property
 * public 常量 构造函数和new出来的函数 都可以访问
 * private 私有属性 只能在类和子类内部使用 实例化对象不可访问。
 * 
*/

class NewUser {
  static gender: string;
  name: string;
  constructor(name: string, private age: number, protected tel: number) {
    this.name = name;
    this.age = age;
  }

  sayAge() {
    console.log(this.age);
  }

  sayTel() {
    console.log('father:', this.tel);
  }
}

class Son extends NewUser {
  constructor(name: string, age: number, tel: number) {
    super(name, age, tel);
  }

  override sayTel(): void {
    super.sayTel()
    // console.log('son:', this.tel);
  }
}

// const son = new Son('xiaobai', 14, 98765);
// son.sayTel()
// // console.log(son.tel);

// const user1 = new NewUser('xiaohong', 20, 12345);
// console.log(user1.name);
// console.log(NewUser.gender);
// user1.sayTel();
// user1.sayAge();

// 抽象类 abstract 用来描述一个类的结构
// implement 实现
// abstract class Cons {
//   abstract title: string;
//   abstract name: string;
//   abstract age: number;

//   abstract sayName(): void;

//   abstract get sub(): string;
// }

interface Cons {
  title: string;
  age: number;
  name: string;

  sayName(): void;

  get sub(): string;
}

// 抽象类可用用接口interface来描述 
// 无法声明静态的抽象成员
// 还可以用new一个类来实现对类的描述
// interface NewCons {
//   new(): Foo
// }

class SomeOne implements Cons {
  title = 'title';
  age = 20;
  name = 'zhangsan'

  sayName() {
    console.log(this.name);
  }

  get sub() {
    return `${this.title}-${this.name} - ${this.age}`
  }
}
