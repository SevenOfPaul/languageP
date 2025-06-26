export const docs=`# 编译器语法说明文档

本文档旨在提供本编译器所支持的语法元素说明，包括表达式和语句，并提供相应的代码示例。

## 表达式 (Expressions)

### 1. 赋值表达式 (Assign Expression)

用于将一个值赋给变量。

p
let a = 10;
a = 20;


### 2. 二元运算表达式 (Binary Expression)

支持加减乘除、比较等二元运算。

p
let x = 5 + 3;      // 加法
let y = 10 - 2;     // 减法
let z = 4 * 6;      // 乘法
let w = 8 / 2;      // 除法
let isEqual = (x == y); // 相等比较
let isGreater = (z > w); // 大于比较


### 3. 函数调用表达式 (Call Expression)

调用已定义的函数。

p
fn greet(name) {
  print "Hello, " + name + "!";
}

greet("World");


### 4. 字面量表达式 (Literal Expression)

表示固定值，如数字、字符串、布尔值和空值。

p
let num = 123;        // 数字
let str = "Hello";    // 字符串
let boolTrue = true;  // 布尔真
let boolFalse = false; // 布尔假
let empty = nil;      // 空值


### 5. 逻辑运算表达式 (Logical Expression)

支持逻辑与 (and) 和逻辑或 (or) 运算。

p
let a = true&& false;
let b = true|| false;


### 6. 一元运算表达式 (Unary Expression)

支持负号 (-) 和逻辑非 (!) 运算。

p
let negNum = -10;
let notTrue = !true;


### 7. 变量表达式 (letiable Expression)

引用已声明的变量。

p
let myletiable = 100;
print myletiable;


### 8. 结构体实例化表达式 (Struct Instance Expression)

创建结构体的实例。

p
struct Point {
  x;
  y;
}

let p = Point { x: 10, y: 20 };


### 9. 结构体字段访问表达式 (Get Expression)

访问结构体实例的字段。

p
struct Point {
  x;
  y;
}

let p = Point { x: 10, y: 20 };
print p.x;


### 10. 结构体字段设置表达式 (Set Expression)

设置结构体实例的字段值。

p
struct Point {
  x;
  y;
}

let p = Point { x: 10, y: 20 };
p.x = 30;
print p.x;


### 11. 三元表达式 (Ternary Expression)

根据条件选择两个表达式中的一个。

p
let result = (10 > 5) ? "Greater" : "Smaller";
print result;


## 语句 (Statements)

### 1. 表达式语句 (Expression Statement)

将表达式作为一条独立的语句执行。

p
1 + 2; // 这是一个表达式语句，尽管结果没有被使用
print "Hello"; // 这是一个表达式语句，其中包含一个函数调用表达式


### 2. 变量声明语句 (letiable Declaration Statement)

声明一个新变量，并可选择性地进行初始化。

p
let a;
let b = 10;


### 3. 函数声明语句 (fnction Statement)

定义一个函数。

p
fn add(a, b) {
  return a + b;
}


### 9. Return 语句
用于从函数中返回一个值。

p
fn subtract(a, b) {
  return a - b;
}


### 4. 代码块语句 (Block Statement)

将多个语句组织成一个单独的代码块。

p
{
  let x = 1;
  print x;
}


### 5. 条件语句 (If Statement)

根据条件执行不同的代码块。

p
if (true) {
  print "Condition is true";
} else {
  print "Condition is false";
}


### 6. 循环语句 (While Statement)

当条件为真时重复执行代码块。

p
let i = 0;
while (i < 5) {
  print i;
  i = i + 1;
}


### 7. Break 语句
用于立即终止循环。

p
let i = 0;
while (i < 5) {
  if (i == 3) {
    break;
  }
  print i;
  i = i + 1;
}


### 8. Continue 语句
用于跳过当前循环的剩余部分，并继续下一次迭代。

p
let i = 0;
while (i < 5) {
  i = i + 1;
  if (i == 3) {
    continue;
  }
  print i;
}



### For 循环
For 循环用于迭代执行代码块，通常用于已知迭代次数或遍历集合的场景。在当前编译器中，for 循环被“脱糖”为 while 循环，这意味着它在内部被转换为 while 循环的等价形式。

**语法:**

for (initializer; condition; increment) {
    // 循环体
}


**示例:**

for (let i = 0; i < 5; i = i + 1) {
    print(i);
}


### If 语句
If 语句用于基于条件执行代码块。它可以包含一个可选的 else 分支，在条件为假时执行。

**语法:**

if (condition) {
    // 如果条件为真，执行此处的代码
} else {
    // 如果条件为假，执行此处的代码 (可选)
}


**示例:**

if (x > 10) {
    print("x 大于 10");
} else {
    print("x 不大于 10");
}


### While 循环
While 循环用于在给定条件为真时重复执行代码块。

**语法:**

while (condition) {
    // 循环体
}


**示例:**

let i = 0;
while (i < 5) {
    print(i);
    i = i + 1;
}


### 函数声明
函数用于封装可重用的代码块。函数可以接受参数并返回一个值。

**语法:**

fn fntion_name(param1, param2) {
    // 函数体
    return value;
}


**示例:**

fn add(a, b) {
    return a + b;
}
let result = add(2, 3);
print(result);


### 10. Print 语句
用于在控制台输出信息。

p
print "Hello, World!";
let num = 123;
print num;



### 变量声明
使用 let 关键字声明变量，并可以为其赋初始值。

**语法:**

let variable_name = initial_value;


**示例:**

let message = "Hello, world!";
print(message);


### 结构体声明
结构体允许你定义自定义的数据类型，将多个相关的值组合在一起。

**语法:**

struct StructName {
    field1: Type1,
    field2: Type2,
}


**示例:**

struct Point {
    x: 0,
    y: 0,
}
let p = Point { x: 10, y: 20 };
print(p.x);


### 结构体方法实现 (Impl Block)
impl 关键字用于为结构体定义方法。

**语法:**

impl StructName {
    fn method_name(self, param1) {
        // 方法体
    }
}


**示例:**
p
struct Circle {
    radius;
}

impl Circle {
    fn area(self) {
        return 3.14 * self.radius * self.radius;
    }
}

let myCircle = Circle { radius: 5 };
print(myCircle.area());



### 表达式

#### 三元表达式
三元表达式提供了一种简洁的方式来根据条件返回两个值中的一个。

**语法:**

condition ? expression_if_true : expression_if_false


**示例:**

let x = 10;
let result = x > 5 ? "大于 5" : "不大于 5";
print(result);


#### 逻辑表达式
包括 and (&&) 和 or (||) 运算符，用于组合布尔表达式。

**语法:**

expression1 && expression2
expression1 || expression2


**示例:**

let a = true;
let b = false;
print(a && b);
print(a || b);


#### 二元表达式
包括算术运算符 (+, -, *, /) 和比较运算符 (==, !=, <, <=, >, >=)。

**语法:**

operand1 operator operand2


**示例:**

print(10 + 5);
print(10 == 5);


#### 一元表达式
包括 ! (逻辑非) 和 - (负号) 运算符。

**语法:**

!expression
-expression


**示例:**

let is_true = true;
print(!is_true);
print(-5);


#### 调用表达式
用于调用函数。

**语法:**

fntion_name(argument1, argument2)


**示例:**

fn greet(name) {
    print("Hello, " + name);
}
greet("World");


#### 分组表达式
使用括号 () 来改变表达式的求值顺序。

**语法:**

(expression)


**示例:**

print((2 + 3) * 4);


#### 字面量
包括数字、字符串、布尔值 (true, false) 和 nil。

**示例:**

print(123);
print("Hello");
print(true);
print(nil);


#### 变量
对已声明变量的引用。

**示例:**

let my_var = 100;
print(my_var);


#### 实例访问
用于访问结构体实例的字段。

**语法:**

instance.field_name


**示例:**

struct Person {
    name: "",
    age: 0,
}
let p = Person { name: "Alice", age: 30 };
print(p.name);


## 中文关键字 (Chinese Keywords)

本编译器支持以下中文关键字及其对应的英文关键字：

| 中文关键字 | 英文关键字 |
| :--------- | :--------- |
| 破       | break    |
| 跃       | continue |
| 则       | else     |
| 假       | false    |
| 令       | fn       |
| 令循环   | for      |
| 若       | if       |
| 诏       | let      |
| 空       | nil      |
| 打印     | print    |
| 返回     | return   |
| 真       | true     |
| 序循环   | while    |
`

