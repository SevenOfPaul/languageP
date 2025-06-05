export const docs=`# 鹏语言技术文档（AI友好版）
## 1. 概述
鹏语言是一种混合了JavaScript和C语言特性的编程语言，在函数方面偏向JavaScript，在面向对象方面偏向C语言。它是一个基于AST（抽象语法树）的解释器，使用Rust语言实现。鹏语言的设计目标是创建一种易于学习的编程语言，特别是对于中文使用者，通过支持中文关键字来降低编程学习的语言障碍。

## 2. 核心特性
- 中文编程支持 ：支持中文关键字，降低英语障碍
- 语法简洁 ：比Python还要简单的语法设计
- 函数式编程 ：偏向函数式而非面向对象的编程范式
- WebAssembly支持 ：提供WASM版本，可在浏览器中运行
- AST解释执行 ：基于抽象语法树的解释执行模型
## 3. 技术架构
鹏语言解释器是使用Rust语言开发的，主要组件包括：

- 词法分析器（Lexer）
- 语法分析器（Parser）
- 抽象语法树（AST）
- 解释器（Interpreter）
解释器采用AST执行模式，将源代码解析为语法树后进行解释执行。

## 4. 语法规范
### 4.1 变量声明与类型
鹏语言支持多种数据类型，变量声明简洁直观：


// 变量声明
let x = 10;
// 或使用中文关键字
变量 y = "hello";

### 4.2 运算符
鹏语言支持常见的算术、比较和逻辑运算符，语法与JavaScript类似：


// 算术运算
let sum = a + b;
// 比较运算
if (x > y) {
    // 代码块
}
// 逻辑运算
let result = condition1 && condition2;

### 4.3 函数定义
函数定义语法简洁，支持匿名函数和闭包：


// 函数定义
function add(a, b) {
    return a + b;
}
// 中文关键字
函数 multiply(a, b) {
    返回 a * b;
}

### 4.4 控制结构
支持条件语句和循环结构：


// 条件语句
if (condition) {
    // 代码块
} else {
    // 代码块
}

// 循环
for (let i = 0; i < 10; i++) {
    // 代码块
}

while (condition) {
    // 代码块
}

### 4.5 结构体
鹏语言支持类似C语言的结构体定义：


// 结构体定义
struct Person {
    name: string,
    age: number
}

// 创建实例
let p = Person { name: "张三", age: 
25 };

## 5. 执行环境
鹏语言提供多种执行环境：

1. 命令行解释器 ：本地安装的解释器可以直接执行鹏语言代码
2. WebAssembly版本 ：通过WASM在浏览器中运行鹏语言代码
3. 在线演练场 ：提供Web界面，可以在浏览器中编写和执行代码
## 6. 示例代码
### 6.1 基本示例

// 打印Hello World
print "hello world!";

// 变量和函数
let x = 10;
let y = 20;
function add(a, b) {
    return a + b;
}
print add(x, y);

### 6.2 结构体示例

// 定义结构体
struct Point {
    x: number,
    y: number
}

// 创建实例
let p = Point { x: 10, y: 20 };
print p.x + p.y;
`