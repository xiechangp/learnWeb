# 条件分支：if 和 '?'

有时我们需要根据不同条件执行不同的操作。

我们可以使用 `if` 语句和条件运算符 `?`（也称为“问号”运算符）来实现。

## “if” 语句

`if(...)` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
```

在上面这个例子中，条件是一个简单的相等性检查（`year == 2015`），但它还可以更复杂。

如果有多个语句要执行，我们必须将要执行的代码块封装在大括号内：

```javascript
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

建议每次使用 if 语句都用大括号 `{}` 来包装代码块，即使只有一条语句。这样可以提高代码可读性。

## 布尔转换

`if (…)` 语句会计算圆括号内的表达式，并将计算结果转换为布尔型。

让我们回顾一下 类型转换一章中的转换规则：

- 数字 `0`、空字符串 `""`、`null`、`undefined` 和 `NaN` 都会被转换成 `false`。因为它们被称为“假值（falsy）”。
- 其他值被转换为 `true`，所以它们被称为“真值（truthy）”。

所以，下面这个条件下的代码永远不会执行：

```javascript
if (0) { // 0 是假值（falsy）
  ...
}
```

……但下面的条件 —— 始终有效：

```javascript
if (1) { // 1 是真值（truthy）
  ...
}
```

我们也可以将预先计算的布尔值传入 `if` 语句，像这样：

```javascript
let cond = (year == 2015); // 相等运算符的结果是 true 或 false

if (cond) {
  ...
}
```

## “else” 语句

`if` 语句有时会包含一个可选的 “else” 块。如果判断条件不成立，就会执行它内部的代码。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // 2015 以外的任何值
}
```

## 多个条件：“else if”

有时我们需要测试一个条件的几个变体。我们可以通过使用 `else if` 子句实现。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

在上面的代码中，JavaScript 先检查 `year < 2015`。如果条件不符合，就会转到下一个条件 `year > 2015`。如果这个条件也不符合，则会显示最后一个 `alert`。

可以有更多的 `else if` 块。结尾的 `else` 是可选的。

## 条件运算符 ‘?’

有时我们需要根据一个条件去赋值一个变量。

如下所示：

```javascript
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

所谓的“条件”或“问号”运算符让我们可以更简短地达到目的。

这个运算符通过问号 `?` 表示。有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数。实际上它是 JavaScript 中唯一一个有这么多操作数的运算符。

语法：

```javascript
let result = condition ? value1 : value2;
```

计算条件结果，如果结果为真，则返回 `value1`，否则返回 `value2`。

例如：

```javascript
let accessAllowed = (age > 18) ? true : false;
```

技术上讲，我们可以省略 `age > 18` 外面的括号。问号运算符的优先级较低，所以它会在比较运算符 `>` 后执行。

下面这个示例会执行和前面那个示例相同的操作：

```javascript
// 比较运算符 "age > 18" 首先执行
//（不需要将其包含在括号中）
let accessAllowed = age > 18 ? true : false;
```

但括号可以使代码可读性更强，所以我们建议使用它们。

**请注意：**

在上面的例子中，你可以不使用问号运算符，因为比较本身就返回 `true/false`：

```javascript
// 下面代码同样可以实现
let accessAllowed = age > 18;
```

## 多个 ‘?’

使用一系列问号 `?` 运算符可以返回一个取决于多个条件的值。

例如：

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

可能很难一下子看出发生了什么。但经过仔细观察，我们可以看到它只是一个普通的检查序列。

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`。否则，会继续执行冒号 `":"` 后的表达式，检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`。否则，会继续执行下一个冒号 `":"` 后的表达式，检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`。否则，会继续执行最后一个冒号 `":"` 后面的表达式，返回 `'What an unusual age!'`。

这是使用 `if..else` 实现上面的逻辑的写法：

```javascript
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

## ‘?’ 的非常规使用

有时可以使用问号 `?` 来代替 `if` 语句：

```javascript
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

根据条件 `company =='Netscape'`，要么执行 `?` 后面的第一个表达式并显示对应内容，要么执行第二个表达式并显示对应内容。

在这里我们不是把结果赋值给变量。而是根据条件执行不同的代码。

**不建议这样使用问号运算符。**

这种写法比 `if` 语句更短，对一些程序员很有吸引力。但它的可读性差。

下面是使用 `if` 语句实现相同功能的代码，进行下比较：

```javascript
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
```

因为我们的眼睛垂直扫描代码。所以，跨越几行的代码块比长而水平的代码更易于理解。

问号 `?` 的作用是根据条件返回其中一个值。请正确使用它。当需要执行不同的代码分支时，请使用 `if`。

`alert` 弹窗会出来吗？

```javascript
if ("0") {
  alert( 'Hello' );
}
```

# 逻辑运算符

JavaScript 中有四个逻辑运算符：`||`（或），`&&`（与），`!`（非），`??`（空值合并运算符）。本文我们先介绍前三个，在下一篇文章中再详细介绍 `??` 运算符。

虽然它们被称为“逻辑”运算符，但这些运算符却可以被应用于任意类型的值，而不仅仅是布尔值。它们的结果也同样可以是任意类型。

让我们来详细看一下。

## ||（或）

两个竖线符号表示“或”运算符：

```javascript
result = a || b;
```

在传统的编程中，逻辑或仅能够操作布尔值。如果参与运算的任意一个参数为 `true`，返回的结果就为 `true`，否则返回 `false`。

在 JavaScript 中，逻辑运算符更加灵活强大。但是，首先让我们看一下操作数是布尔值的时候发生了什么。

下面是四种可能的逻辑组合：

```javascript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

正如我们所见，除了两个操作数都是 `false` 的情况，结果都是 `true`。

如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算。

例如，数字 `1` 被作为 `true` 处理，数字 `0` 则被作为 `false`：

```javascript
if (1 || 0) { // 工作原理相当于 if( true || false )
  alert( 'truthy!' );
}
```

大多数情况下，逻辑或 `||` 会被用在 `if` 语句中，用来测试是否有 **任何** 给定的条件为 `true`。

例如：

```javascript
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
```

我们可以传入更多的条件：

```javascript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // 是周末
}
```

## 或运算寻找第一个真值

上文提到的逻辑处理多少有些传统了。下面让我们看看 JavaScript 的“附加”特性。

拓展的算法如下所示。

给定多个参与或运算的值：

```javascript
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 处理每一个操作数时，都将其转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），则返回最后一个操作数。

返回的值是操作数的初始形式，不会做布尔转换。

换句话说，一个或运算 `||` 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

例如：

```javascript
alert( 1 || 0 ); // 1（1 是真值）

alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）

alert( undefined || null || 0 ); // 0（都是假值，返回最后一个值）
```

与“纯粹的、传统的、仅仅处理布尔值的或运算”相比，这个规则就引起了一些很有趣的用法。

1. **获取变量列表或者表达式中的第一个真值。**

   例如，我们有变量 `firstName`、`lastName` 和 `nickName`，都是可选的（即可以是 undefined，也可以是假值）。

   我们用或运算 `||` 来选择有数据的那一个，并显示出来（如果没有设置，则用 `"Anonymous"`）：

   ```javascript
   let firstName = "";
   let lastName = "";
   let nickName = "SuperCoder";
   
   alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
   ```

   如果所有变量的值都为假，结果就是 `"Anonymous"`。

2. **短路求值（Short-circuit evaluation）。**

   或运算符 `||` 的另一个用途是所谓的“短路求值”。

   这指的是，`||` 对其参数进行处理，直到达到第一个真值，然后立即返回该值，而无需处理其他参数。

   如果操作数不仅仅是一个值，而是一个有副作用的表达式，例如变量赋值或函数调用，那么这一特性的重要性就变得显而易见了。

   在下面这个例子中，只会打印第二条信息：

   ```javascript
   true || alert("not printed");
   false || alert("printed");
   ```

   在第一行中，或运算符 `||` 在遇到 `true` 时立即停止运算，所以 `alert` 没有运行。

   有时，人们利用这个特性，只在左侧的条件为假时才执行命令。

## &&（与）

两个 & 符号表示 `&&` 与运算符：

```javascript
result = a && b;
```

在传统的编程中，当两个操作数都是真值时，与运算返回 `true`，否则返回 `false`：

```javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

带有 `if` 语句的示例：

```javascript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'Time is 12:30' );
}
```

就像或运算一样，与运算的操作数可以是任意类型的值：

```javascript
if (1 && 0) { // 作为 true && false 来执行
  alert( "won't work, because the result is falsy" );
}
```

## 与运算寻找第一个假值

给出多个参加与运算的值：

```javascript
result = value1 && value2 && value3;
```

与运算 `&&` 做了如下的事：

- 从左到右依次计算操作数。
- 在处理每一个操作数时，都将其转化为布尔值。如果结果是 `false`，就停止计算，并返回这个操作数的初始值。
- 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。

换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。

上面的规则和或运算很像。区别就是与运算返回第一个假值，而或运算返回第一个真值。

例如：

```javascript
// 如果第一个操作数是真值，
// 与运算返回第二个操作数：
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 如果第一个操作数是假值，
// 与运算将直接返回它。第二个操作数会被忽略
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

我们也可以在一行代码上串联多个值。查看第一个假值是如何被返回的：

```javascript
alert( 1 && 2 && null && 3 ); // null
```

如果所有的值都是真值，最后一个值将会被返回：

```javascript
alert( 1 && 2 && 3 ); // 3，最后一个值
```

**与运算 `&&` 在或运算 `||` 之前进行**

与运算 `&&` 的优先级比或运算 `||` 要高。

所以代码 `a && b || c && d` 跟 `&&` 表达式加了括号完全一样：`(a && b) || (c && d)`。

**不要用 `||` 或 `&&` 来取代 `if`**

有时候，有人会将与运算符 `&&` 作为“简化 `if`”的一种方式。

例如：

```javascript
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

`&&` 右边的代码只有运算抵达到那里才能被执行。也就是，当且仅当 `(x > 0)` 为真。

所以我们基本可以类似地得到：

```javascript
let x = 1;

if (x > 0) alert( 'Greater than zero!' );
```

虽然使用 `&&` 写出的变体看起来更短，但 `if` 更明显，并且往往更具可读性。因此，我们建议根据每个语法结构的用途来使用：如果我们想要 `if`，就使用 `if`；如果我们想要逻辑与，就使用 `&&`。

## !（非）

感叹符号 `!` 表示布尔非运算符。

语法相当简单：

```javascript
result = !value;
```

逻辑非运算符接受一个参数，并按如下运作：

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

例如：

```javascript
alert( !true ); // false
alert( !0 ); // true
```

两个非运算 `!!` 有时候用来将某个值转化为布尔类型：

```javascript
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```

也就是，第一个非运算将该值转化为布尔类型并取反，第二个非运算再次取反。最后我们就得到了一个任意值到布尔值的转化。

有一个略显冗长的方式也可以实现同样的效果 —— 一个内建的 `Boolean` 函数：

```javascript
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```

非运算符 `!` 的优先级在所有逻辑运算符里面最高，所以它总是在 `&&` 和 `||` 之前执行。



# 空值合并运算符 '??'

**最近新增的特性**

这是一个最近添加到 JavaScript 的特性。 旧式浏览器可能需要 polyfills.

空值合并运算符（nullish coalescing operator）的写法为两个问号 `??`。

由于它对待 `null` 和 `undefined` 的方式类似，所以在本文中我们将使用一个特殊的术语对其进行表示。为简洁起见，当一个值既不是 `null` 也不是 `undefined` 时，我们将其称为“已定义的（defined）”。

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`，
- 如果 `a` 不是已定义的，则结果为 `b`。

换句话说，如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数。

空值合并运算符并不是什么全新的东西。它只是一种获得两者中的第一个“已定义的”值的不错的语法。

我们可以使用我们已知的运算符重写 `result = a ?? b`，像这样：

```javascript
result = (a !== null && a !== undefined) ? a : b;
```

现在你应该清楚了 `??` 的作用。让我们来看看它的使用场景吧。

`??` 的常见使用场景是提供默认值。

例如，在这里，如果 `user` 的值不为 `null/undefined` 则显示 `user`，否则显示 `匿名`：

```javascript
let user;

alert(user ?? "匿名"); // 匿名（user 未定义）
```

在下面这个例子中，我们将一个名字赋值给了 `user`：

```javascript
let user = "John";

alert(user ?? "匿名"); // John（user 已定义）
```

我们还可以使用 `??` 序列从一系列的值中选择出第一个非 `null/undefined` 的值。

假设我们在变量 `firstName`、`lastName` 或 `nickName` 中存储着一个用户的数据。如果用户决定不填写相应的值，则所有这些变量的值都可能是未定义的。

我们想使用这些变量之一显示用户名，如果这些变量的值都是 `null/undefined`，则显示 “匿名”。

让我们使用 `??` 运算符来实现这一需求：

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个已定义的值：
alert(firstName ?? lastName ?? nickName ?? "匿名"); // Supercoder
```

## 与 || 比较

或运算符 `||` 可以以与 `??` 运算符相同的方式使用。像我们在 [上一章](https://zh.javascript.info/logical-operators#or-finds-the-first-truthy-value) 所讲的那样。

例如，在上面的代码中，我们可以用 `||` 替换掉 `??`，也可以获得相同的结果：

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个真值：
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
```

纵观 JavaScript 发展史，或 `||` 运算符先于 `??` 出现。它自 JavaScript 诞生就存在了，因此开发者长期将其用于这种目的。

另一方面，空值合并运算符 `??` 是最近才被添加到 JavaScript 中的，它的出现是因为人们对 `||` 不太满意。

它们之间重要的区别是：

- `||` 返回第一个 **真** 值。
- `??` 返回第一个 **已定义的** 值。

换句话说，`||` 无法区分 `false`、`0`、空字符串 `""` 和 `null/undefined`。它们都一样 —— 假值（falsy values）。如果其中任何一个是 `||` 的第一个参数，那么我们将得到第二个参数作为结果。

不过在实际中，我们可能只想在变量的值为 `null/undefined` 时使用默认值。也就是说，当该值确实未知或未被设置时。

例如，考虑下面这种情况：

```javascript
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

- ```
  height || 100
  ```

   

  首先会检查

   

  ```
  height
  ```

   

  是否为一个假值，它是

   

  ```
  0
  ```

  ，确实是假值。

  - 所以，`||` 运算的结果为第二个参数，`100`。

- ```
  height ?? 100
  ```

   

  首先会检查

   

  ```
  height
  ```

   

  是否为

   

  ```
  null/undefined
  ```

  ，发现它不是。

  - 所以，结果为 `height` 的原始值，`0`。

实际上，高度 `0` 通常是一个有效值，它不应该被替换为默认值。所以 `??` 运算得到的是正确的结果。

## 优先级

`??` 运算符的优先级与 `||` 相同，它们的的优先级都为 `4`

这意味着，就像 `||` 一样，空值合并运算符在 `=` 和 `?` 运算前计算，但在大多数其他运算（例如 `+` 和 `*`）之后计算。

所以我们可能需要在这样的表达式中添加括号：

```javascript
let height = null;
let width = null;

// 重要：使用括号
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

否则，如果我们省略了括号，则由于 `*` 的优先级比 `??` 高，它会先执行，进而导致错误的结果。

```javascript
// 没有括号
let area = height ?? 100 * width ?? 50;

// ……将这样计算（不符合我们的期望）：
let area = height ?? (100 * width) ?? 50;
```

### ?? 与 && 或 || 一起使用

出于安全原因，JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。

下面的代码会触发一个语法错误：

```javascript
let x = 1 && 2 ?? 3; // Syntax error
```

这个限制无疑是值得商榷的，它被添加到语言规范中是为了避免人们从 `||` 切换到 `??` 时的编程错误。

可以明确地使用括号来解决这个问题：

```javascript
let x = (1 && 2) ?? 3; // 正常工作了

alert(x); // 2
```

## 总结

- 空值合并运算符 `??` 提供了一种从列表中选择第一个“已定义的”值的简便方式。

  它被用于为变量分配默认值：

  ```javascript
  // 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
  height = height ?? 100;
  ```

- `??` 运算符的优先级非常低，仅略高于 `?` 和 `=`，因此在表达式中使用它时请考虑添加括号。

- 如果没有明确添加括号，不能将其与 `||` 或 `&&` 一起使用。

# 循环：while 和 for

我们经常需要重复执行一些操作。

例如，我们需要将列表中的商品逐个输出，或者运行相同的代码将数字 1 到 10 逐个输出。

**循环** 是一种重复运行同一代码的方法。

**for…of 和 for…in 循环**

给进阶读者的一个小提示。

本文仅涵盖了基础的循环：`while`，`do..while` 和 `for(..; ..; ..)`。



## “while” 循环

`while` 循环的语法如下：

```javascript
while (condition) {
  // 代码
  // 所谓的“循环体”
}
```

当 `condition` 为真时，执行循环体的 `code`。

例如，以下将循环输出当 `i < 3` 时的 `i` 值：

```javascript
let i = 0;
while (i < 3) { // 依次显示 0、1 和 2
  alert( i );
  i++;
}
```

循环体的单次执行叫作 **一次迭代**。上面示例中的循环进行了三次迭代。

如果上述示例中没有 `i++`，那么循环（理论上）会永远重复执行下去。实际上，浏览器提供了阻止这种循环的方法，我们可以通过终止进程，来停掉服务器端的 JavaScript。

任何表达式或变量都可以是循环条件，而不仅仅是比较。在 `while` 中的循环条件会被计算，计算结果会被转化为布尔值。

例如，`while (i != 0)` 可简写为 `while (i)`：

```javascript
let i = 3;
while (i) { // 当 i 变成 0 时，条件为假，循环终止
  alert( i );
  i--;
}
```

**单行循环体不需要大括号**

如果循环体只有一条语句，则可以省略大括号 `{…}`：

```javascript
let i = 3;
while (i) alert(i--);
```

## “do…while” 循环

使用 `do..while` 语法可以将条件检查移至循环体 **下面**：

```javascript
do {
  // 循环体
} while (condition);
```

循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。

例如：

```javascript
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

这种形式的语法很少使用，除非你希望不管条件是否为真，循环体 **至少执行一次**。通常我们更倾向于使用另一个形式：`while(…) {…}`。

## “for” 循环

`for` 循环更加复杂，但它是最常使用的循环形式。

`for` 循环看起来就像这样：

```javascript
for (begin; condition; step) {
  // ……循环体……
}
```

我们通过示例来了解一下这三个部分的含义。下述循环从 `i` 等于 `0` 到 `3`（但不包括 `3`）运行 `alert(i)`：

```javascript
for (let i = 0; i < 3; i++) { // 结果为 0、1、2
  alert(i);
}
```

我们逐个部分分析 `for` 循环：

| 语句段         |             |                                                  |
| :------------- | :---------- | :----------------------------------------------- |
| begin          | `let i = 0` | 进入循环时执行一次。                             |
| condition      | `i < 3`     | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body（循环体） | `alert(i)`  | 条件为真时，重复运行。                           |
| step           | `i++`       | 在每次循环体迭代后执行。                         |

一般循环算法的工作原理如下：

```none
开始运行
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ ...
```

所以，`begin` 执行一次，然后进行迭代：每次检查 `condition` 后，执行 `body` 和 `step`。

如果你这是第一次接触循环，那么回到这个例子，在一张纸上重现它逐步运行的过程，可能会对你有所帮助。

以下是在这个示例中发生的事：

```javascript
// for (let i = 0; i < 3; i++) alert(i)

// 开始
let i = 0
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// ……结束，因为现在 i == 3
```

**内联变量声明**

这里“计数”变量 `i` 是在循环中声明的。这叫做“内联”变量声明。这样的变量只在循环中可见。

```javascript
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // 错误，没有这个变量。
```

除了定义一个变量，我们也可以使用现有的变量：

```javascript
let i = 0;

for (i = 0; i < 3; i++) { // 使用现有的变量
  alert(i); // 0, 1, 2
}

alert(i); //3，可见，因为是在循环之外声明的
```

### 省略语句段

`for` 循环的任何语句段都可以被省略。

例如，如果我们在循环开始时不需要做任何事，我们就可以省略 `begin` 语句段。

就像这样：

```javascript
let i = 0; // 我们已经声明了 i 并对它进行了赋值

for (; i < 3; i++) { // 不再需要 "begin" 语句段
  alert( i ); // 0, 1, 2
}
```

我们也可以移除 `step` 语句段：

```javascript
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

该循环与 `while (i < 3)` 等价。

实际上我们可以删除所有内容，从而创建一个无限循环：

```javascript
for (;;) {
  // 无限循环
}
```

请注意 `for` 的两个 `;` 必须存在，否则会出现语法错误。

## 跳出循环

通常条件为假时，循环会终止。

但我们随时都可以使用 `break` 指令强制退出。

例如，下面这个循环要求用户输入一系列数字，在输入的内容不是数字时“终止”循环。

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

如果用户输入空行或取消输入，在 `(*)` 行的 `break` 指令会被激活。它立刻终止循环，将控制权传递给循环后的第一行，即，`alert`。

根据需要，"无限循环 + `break`" 的组合非常适用于不必在循环开始/结束时检查条件，但需要在中间甚至是主体的多个位置进行条件检查的情况。

## 继续下一次迭代

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

如果我们完成了当前的迭代，并且希望继续执行下一次迭代，我们就可以使用它。

下面这个循环使用 `continue` 来只输出奇数：

```javascript
for (let i = 0; i < 10; i++) {

  //如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0) continue;

  alert(i); // 1，然后 3，5，7，9
}
```

对于偶数的 `i` 值，`continue` 指令会停止本次循环的继续执行，将控制权传递给下一次 `for` 循环的迭代（使用下一个数字）。因此 `alert` 仅被奇数值调用。

**`continue` 指令利于减少嵌套**

显示奇数的循环可以像下面这样：

```javascript
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
```

从技术角度看，它与上一个示例完全相同。当然，我们可以将代码包装在 `if` 块而不使用 `continue`。

但在副作用方面，它多创建了一层嵌套（大括号内的 `alert` 调用）。如果 `if` 中代码有多行，则可能会降低代码整体的可读性。

**禁止 `break/continue` 在 ‘?’ 的右边**

请注意非表达式的语法结构不能与三元运算符 `?` 一起使用。特别是 `break/continue` 这样的指令是不允许这样使用的。

例如，我们使用如下代码：

```javascript
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

……用问号重写：

```javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
```

……代码会停止运行，并显示有语法错误。

这是不（建议）使用问号 `?` 运算符替代 `if` 语句的另一个原因。

## break/continue 标签

有时候我们需要一次从多层嵌套的循环中跳出来。

例如，下述代码中我们的循环使用了 `i` 和 `j`，从 `(0,0)` 到 `(3,3)` 提示坐标 `(i, j)`：

```javascript
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果我想从这里退出并直接执行 alert('Done!')
  }
}

alert('Done!');
```

我们需要提供一种方法，以在用户取消输入时来停止这个过程。

在 `input` 之后的普通 `break` 只会打破内部循环。这还不够 —— 标签可以实现这一功能！

**标签** 是在循环之前带有冒号的标识符：

```javascript
labelName: for (...) {
  ...
}
```

`break <labelName>` 语句跳出循环至标签处：

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}

alert('Done!');
```

上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

因此，控制权直接从 `(*)` 转至 `alert('Done!')`。

我们还可以将标签移至单独一行：

```javascript
outer:
for (let i = 0; i < 3; i++) { ... }
```

`continue` 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。

**标签并不允许“跳到”所有位置**

标签不允许我们跳到代码的任意位置。

例如，这样做是不可能的：

```javascript
break label;  // 跳转至下面的 label 处（无效）

label: for (...)
```

`break` 指令必须在代码块内。从技术上讲，任何被标记的代码块都有效，例如：

```javascript
label: {
  // ...
  break label; // 有效
  // ...
}
```

……尽管 99.9% 的情况下 `break` 都被用在循环内，就像在上面那些例子中我们看到的那样。

`continue` 只有在循环内部才可行。

## 总结

我们学习了三种循环：

- `while` —— 每次迭代之前都要检查条件。
- `do..while` —— 每次迭代后都要检查条件。
- `for (;;)` —— 每次迭代之前都要检查条件，可以使用其他设置。

通常使用 `while(true)` 来构造“无限”循环。这样的循环和其他循环一样，都可以通过 `break` 指令来终止。

如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么可以使用 `continue` 指令。

`break/continue` 支持循环前的标签。标签是 `break/continue` 跳出嵌套循环以转到外部的唯一方法。



# "switch" 语句

`switch` 语句可以替代多个 `if` 判断。

`switch` 语句为多分支选择的情况提供了一个更具描述性的方式。

## 语法

`switch` 语句有至少一个 `case` 代码块和一个可选的 `default` 代码块。

就像这样：

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- 比较 `x` 值与第一个 `case`（也就是 `value1`）是否严格相等，然后比较第二个 `case`（`value2`）以此类推。
- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，直到遇到最靠近的 `break` 语句（或者直到 `switch` 语句末尾）。
- 如果没有符合的 case，则执行 `default` 代码块（如果 `default` 存在）。

## 举个例子

`switch` 的例子（高亮的部分是执行的 `case` 部分）：

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```

这里的 `switch` 从第一个 `case` 分支开始将 `a` 的值与 `case` 后的值进行比较，第一个 `case` 后的值为 `3` 匹配失败。

然后比较 `4`。匹配，所以从 `case 4` 开始执行直到遇到最近的 `break`。

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

无 `break` 的例子：

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

在上面的例子中我们会看到连续执行的三个 `alert`：

```javascript
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

**任何表达式都可以成为 `switch/case` 的参数**

`switch` 和 `case` 都允许任意表达式。

比如：

```javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```

这里 `+a` 返回 `1`，这个值跟 `case` 中 `b + 1` 相比较，然后执行对应的代码。

## “case” 分组

共享同一段代码的几个 `case` 分支可以被分为一组：

比如，如果我们想让 `case 3` 和 `case 5` 执行同样的代码：

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

现在 `3` 和 `5` 都显示相同的信息。

`switch/case` 有通过 case 进行“分组”的能力，其实是 switch 语句没有 `break` 时的副作用。因为没有 `break`，`case 3` 会从 `(*)` 行执行到 `case 5`。

## 类型很关键

强调一下，这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配。

比如，我们来看下面的代码：

```javascript
let arg = prompt("Enter a value?")
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}
```

1. 在 `prompt` 对话框输入 `0`、`1`，第一个 `alert` 弹出。
2. 输入 `2`，第二个 `alert` 弹出。
3. 但是输入 `3`，因为 `prompt` 的结果是字符串类型的 `"3"`，不严格相等 `===` 于数字类型的 `3`，所以 `case 3` 不会执行！因此 `case 3` 部分是一段无效代码。所以会执行 `default` 分支。

4. 
5. JavaScript 编程语言
3. JavaScript 基础知识

2022年4月24日

# 函数

我们经常需要在脚本的许多地方执行很相似的操作。

例如，当访问者登录、注销或者在其他地方时，我们需要显示一条好看的信息。

函数是程序的主要“构建模块”。函数使该段代码可以被调用很多次，而不需要写重复的代码。

我们已经看到了内建函数的示例，如 `alert(message)`、`prompt(message, default)` 和 `confirm(question)`。但我们也可以创建自己的函数。

## 函数声明

使用 **函数声明** 创建函数。

看起来就像这样：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}
```

`function` 关键字首先出现，然后是 **函数名**，然后是括号之间的 **参数** 列表（用逗号分隔，在上述示例中为空，我们将在接下来的示例中看到），最后是花括号之间的代码（即“函数体”）。

```javascript
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
```

我们的新函数可以通过名称调用：`showMessage()`。

例如：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```

调用 `showMessage()` 执行函数的代码。这里我们会看到显示两次消息。

这个例子清楚地演示了函数的主要目的之一：避免代码重复。

如果我们需要更改消息或其显示方式，只需在一个地方修改代码：输出它的函数。

## 局部变量

在函数中声明的变量只在该函数内部可见。

例如：

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // 局部变量

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- 错误！变量是函数的局部变量
```

## 外部变量

函数也可以访问外部变量，例如：

```javascript
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```

函数对外部变量拥有全部的访问权限。函数也可以修改外部变量。

例如：

```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 改变外部变量

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John 在函数调用之前

showMessage();

alert( userName ); // Bob，值被函数修改了
```

只有在没有局部变量的情况下才会使用外部变量。

如果在函数内部声明了同名变量，那么函数会 **遮蔽** 外部变量。例如，在下面的代码中，函数使用局部的 `userName`，而外部变量被忽略：

```javascript
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 声明一个局部变量

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

alert( userName ); // John，未被更改，函数没有访问外部变量。
```

**全局变量**

任何函数之外声明的变量，例如上述代码中的外部变量 `userName`，都被称为 **全局** 变量。

全局变量在任意函数中都是可见的（除非被局部变量遮蔽）。

减少全局变量的使用是一种很好的做法。现代的代码有很少甚至没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。

## 参数

我们可以通过参数将任意数据传递给函数。

在如下示例中，函数有两个参数：`from` 和 `text`。

```javascript
function showMessage(from, text) { // 参数：from 和 text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

当函数在 `(*)` 和 `(**)` 行中被调用时，给定值被复制到了局部变量 `from` 和 `text`。然后函数使用它们进行计算。

这里还有一个例子：我们有一个变量 `from`，并将它传递给函数。请注意：函数会修改 `from`，但在函数外部看不到更改，因为函数修改的是复制的变量值副本：

```javascript
function showMessage(from, text) {

  from = '*' + from + '*'; // 让 "from" 看起来更优雅

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// "from" 值相同，函数修改了一个局部的副本。
alert( from ); // Ann
```

当一个值被作为函数参数（parameter）传递时，它也被称为 **参数（argument）**。

换一种方式，我们把这些术语搞清楚：

- 参数（parameter）是函数声明中括号内列出的变量（它是函数声明时的术语）。
- 参数（argument）是调用函数时传递给函数的值（它是函数调用时的术语）。

我们声明函数时列出它们的参数（parameters），然后调用它们传递参数（arguments）。

在上面的例子中，我们可以说：“函数 `showMessage` 被声明，并且带有两个参数（parameters），随后它被调用，两个参数（arguments）分别为 `from` 和 `"Hello"`”。

## 默认值

如果一个函数被调用，但有参数（argument）未被提供，那么相应的值就会变成 `undefined`。

例如，之前提到的函数 `showMessage(from, text)` 可以只使用一个参数（argument）调用：

```javascript
showMessage("Ann");
```

那不是错误，这样调用将输出 `"*Ann*: undefined"`。因为参数 `text` 的值未被传递，所以变成了 `undefined`。

我们可以使用 `=` 为函数声明中的参数指定所谓的“默认”（如果对应参数的值未被传递则使用）值：

```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

现在如果 `text` 参数未被传递，它将会得到值 `"no text given"`。

这里 `"no text given"` 是一个字符串，但它可以是更复杂的表达式，并且只会在缺少参数时才会被计算和分配。所以，这也是可能的：

```javascript
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() 仅在没有给定 text 时执行
  // 其运行结果将成为 text 的值
}
```

**默认参数的计算**

在 JavaScript 中，每次函数在没带个别参数的情况下被调用，默认参数会被计算出来。

在上面的例子中，如果传递了参数 `text`，那么 `anotherFunction()` 就不会被调用。

如果没传递参数 `text`，那么 `anotherFunction()` 就会被调用。

**在 JavaScript 老代码中的默认参数**

几年前，JavaScript 不支持默认参数的语法。所以人们使用其他方式来设置默认参数。

如今，我们会在旧代码中看到它们。

例如，显式地检查 `undefined`：

```javascript
function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
```

……或者使用 `||` 运算符：

```javascript
function showMessage(from, text) {
  // 如果 text 的值为假值，则分配默认值
  // 这样赋值 text == "" 与 text 无值相同
  text = text || 'no text given';
  ...
}
```

### 后备的默认参数

有些时候，将参数默认值的设置放在函数执行（相较更后期）而不是函数声明时，也行得通。

我们可以通过将参数与 `undefined` 进行比较，来检查该参数是否在函数执行期间被传递进来：

```javascript
function showMessage(text) {
  // ...

  if (text === undefined) { // 如果参数未被传递进来
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
```

……或者我们可以使用 `||` 运算符：

```javascript
function showMessage(text) {
  // 如果 text 为 undefined 或者为假值，那么将其赋值为 'empty'
  text = text || 'empty';
  ...
}
```

现代 JavaScript 引擎支持 空值合并运算符 `??`，它在大多数假值（例如 `0`）应该被视为“正常值”时更具优势：

```javascript
function showCount(count) {
  // 如果 count 为 undefined 或 null，则提示 "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

## 返回值

函数可以将一个值返回到调用代码中作为结果。

最简单的例子是将两个值相加的函数：

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 `result`）。

在一个函数中可能会出现很多次 `return`。例如：

```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```

只使用 `return` 但没有返回值也是可行的。但这会导致函数立即退出。

例如：

```javascript
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```

在上述代码中，如果 `checkAge(age)` 返回 `false`，那么 `showMovie` 将不会运行到 `alert`。

**空值的 `return` 或没有 `return` 的函数返回值为 `undefined`**

如果函数无返回值，它就会像返回 `undefined` 一样：

```javascript
function doNothing() { /* 没有代码 */ }

alert( doNothing() === undefined ); // true
```

空值的 `return` 和 `return undefined` 等效：

```javascript
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```

**不要在 `return` 与返回值之间添加新行**

对于 `return` 的长表达式，可能你会很想将其放在单独一行，如下所示：

```javascript
return
 (some + long + expression + or + whatever * f(a) + f(b))
```

但这不行，因为 JavaScript 默认会在 `return` 之后加上分号。上面这段代码和下面这段代码运行流程相同：

```javascript
return;
 (some + long + expression + or + whatever * f(a) + f(b))
```

因此，实际上它的返回值变成了空值。

如果我们想要将返回的表达式写成跨多行的形式，那么应该在 `return` 的同一行开始写此表达式。或者至少按照如下的方式放上左括号：

```javascript
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```

然后它就能像我们预想的那样正常运行了。

## 函数命名

函数就是行为（action）。所以它们的名字通常是动词。它应该简短且尽可能准确地描述函数的作用。这样读代码的人就能清楚地知道这个函数的功能。

一种普遍的做法是用动词前缀来开始一个函数，这个前缀模糊地描述了这个行为。团队内部必须就前缀的含义达成一致。

例如，以 `"show"` 开头的函数通常会显示某些内容。

函数以 XX 开始……

- `"get…"` —— 返回一个值，
- `"calc…"` —— 计算某些内容，
- `"create…"` —— 创建某些内容，
- `"check…"` —— 检查某些内容并返回 boolean 值，等。

这类名字的示例：

```javascript
showMessage(..)     // 显示信息
getAge(..)          // 返回 age（gets it somehow）
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表单（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```

有了前缀，只需瞥一眼函数名，就可以了解它的功能是什么，返回什么样的值。

**一个函数 —— 一个行为**

一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。

两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，我们可以创建第三个函数来调用这两个函数）。

有几个违反这一规则的例子：

- `getAge` —— 如果它通过 `alert` 将 age 显示出来，那就有问题了（只应该是获取）。
- `createForm` —— 如果它包含修改文档的操作，例如向文档添加一个表单，那就有问题了（只应该创建表单并返回）。
- `checkPermission` —— 如果它显示 `access granted/denied` 消息，那就有问题了（只应执行检查并返回结果）。

这些例子假设函数名前缀具有通用的含义。你和你的团队可以自定义这些函数名前缀的含义，但是通常都没有太大的不同。无论怎样，你都应该对函数名前缀的含义、带特定前缀的函数可以做什么以及不可以做什么有深刻的了解。所有相同前缀的函数都应该遵守相同的规则。并且，团队成员应该形成共识。

**非常短的函数命名**

常用的函数有时会有**非常短**的名字。

例如，[jQuery](http://jquery.com/) 框架用 `$` 定义一个函数。[LoDash](http://lodash.com/) 库的核心函数用 `_` 命名。

这些都是例外，一般而言，函数名应简明扼要且具有描述性。

## 函数 == 注释

函数应该简短且只有一个功能。如果这个函数功能复杂，那么把该函数拆分成几个小的函数是值得的。有时候遵循这个规则并不是那么容易，但这绝对是件好事。

一个单独的函数不仅更容易测试和调试 —— 它的存在本身就是一个很好的注释！

例如，比较如下两个函数 `showPrimes(n)`。它们的功能都是输出到 `n` 的 [素数](https://en.wikipedia.org/wiki/Prime_number)。

第一个变体使用了一个标签：

```javascript
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // 一个素数
  }
}
```

第二个变体使用附加函数 `isPrime(n)` 来检验素数：

```javascript
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // 一个素数
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

第二个变体更容易理解，不是吗？我们通过函数名（`isPrime`）就可以看出函数的行为，而不需要通过代码。人们通常把这样的代码称为 **自描述**。

因此，即使我们不打算重用它们，也可以创建函数。函数可以让代码结构更清晰，可读性更强。

## 总结

函数声明方式如下所示：

```javascript
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值。如果没有返回值，则其返回的结果是 `undefined`。

为了使代码简洁易懂，建议在函数中主要使用局部变量和参数，而不是外部变量。

与不获取参数但将修改外部变量作为副作用的函数相比，获取参数、使用参数并返回结果的函数更容易理解。

函数命名：

- 函数名应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的函数名能够让我们马上知道这个函数的功能是什么，会返回什么。
- 一个函数是一个行为，所以函数名通常是动词。
- 目前有许多优秀的函数名前缀，如 `create…`、`show…`、`get…`、`check…` 等等。使用它们来提示函数的作用吧。

函数是脚本的主要构建块。现在我们已经介绍了基本知识，现在我们就可以开始创建和使用函数了。但这只是学习和使用函数的开始。我们将继续学习更多函数的相关知识，更深入地研究它们的先进特征。

## 任务

### 是否需要 “else”？

重要程度: 4

如果参数 `age` 大于 `18`，那么下面的函数将返回 `true`。

否则它将会要求进行确认，并返回确认结果：

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('父母允许吗？');
  }
}
```

如果 `else` 被删除，函数的工作方式会不同吗？

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('父母允许吗？');
}
```

这两个变体的行为是否有区别？

# 函数表达式

在 JavaScript 中，函数不是“神奇的语言结构”，而是一种特殊的值。

我们在前面章节使用的语法称为 **函数声明**：

```javascript
function sayHi() {
  alert( "Hello" );
}
```

另一种创建函数的语法称为 **函数表达式**。

它允许我们在任何表达式的中间创建一个新函数。

例如：

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

在这里我们可以看到变量 `sayHi` 得到了一个值，新函数 `function() { alert("Hello"); }`。

由于函数创建发生在赋值表达式的上下文中（在 `=` 的右侧），因此这是一个 **函数表达式**。

请注意，`function` 关键字后面没有函数名。函数表达式允许省略函数名。

这里我们立即将它赋值给变量，所以上面的两个代码示例的含义是一样的：“创建一个函数并将其放入变量 `sayHi` 中”。

在更多更高阶的情况下，稍后我们会遇到，可以创建一个函数并立即调用，或者安排稍后执行，而不是存储在任何地方，因此保持匿名。

## 函数是一个值

重申一次：无论函数是如何创建的，函数都是一个值。上面的两个示例都在 `sayHi` 变量中存储了一个函数。

我们还可以用 `alert` 显示这个变量的值：

```javascript
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // 显示函数代码
```

注意，最后一行代码并不会运行函数，因为 `sayHi` 后没有括号。在某些编程语言中，只要提到函数的名称都会导致函数的调用执行，但 JavaScript 可不是这样。

在 JavaScript 中，函数是一个值，所以我们可以把它当成值对待。上面代码显示了一段字符串值，即函数的源码。

的确，在某种意义上说一个函数是一个特殊值，我们可以像 `sayHi()` 这样调用它。

但它依然是一个值，所以我们可以像使用其他类型的值一样使用它。

我们可以复制函数到其他变量：

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

我们也可以在第一行中使用函数表达式来声明 `sayHi`：

```javascript
let sayHi = function() { // (1) 创建
  alert( "Hello" );
};

let func = sayHi;
// ...
```

这两种声明的函数是一样的。

**为什么这里末尾会有个分号？**

你可能想知道，为什么函数表达式结尾有一个分号 `;`，而函数声明没有：

```javascript
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```

答案很简单：这里函数表达式是在赋值语句 `let sayHi = ...;` 中以 `function(…) {…}` 的形式创建的。建议在语句末尾加上分号 `;`，它不是函数语法的一部分。

分号用于更简单的赋值，例如 `let sayHi = 5;`，它也用于函数赋值。

## 回调函数

让我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式。

我们写一个包含三个参数的函数 `ask(question, yes, no)`：

- `question`

  关于问题的文本

- `yes`

  当回答为 “Yes” 时，要运行的脚本

- `no`

  当回答为 “No” 时，要运行的脚本

函数需要提出 `question`（问题），并根据用户的回答，调用 `yes()` 或 `no()`：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

在实际开发中，这样的函数是非常有用的。实际开发与上述示例最大的区别是，实际开发中的函数会通过更加复杂的方式与用户进行交互，而不是通过简单的 `confirm`。在浏览器中，这样的函数通常会绘制一个漂亮的提问窗口。但这是另外一件事了。

`ask` 的两个参数值 `showOk` 和 `showCancel` 可以被称为 **回调函数** 或简称 **回调**。

主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，`showOk` 是回答 “yes” 的回调，`showCancel` 是回答 “no” 的回调。

我们可以使用函数表达式来编写一个等价的、更简洁的函数：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

这里直接在 `ask(...)` 调用内进行函数声明。这两个函数没有名字，所以叫 **匿名函数**。这样的函数在 `ask` 外无法访问（因为没有对它们分配变量），不过这正是我们想要的。

这样的代码在我们的脚本中非常常见，这正符合 JavaScript 语言的思想。

**一个函数是表示一个“行为”的值**

字符串或数字等常规值代表 **数据**。

函数可以被视为一个 **行为（action）**。

我们可以在变量之间传递它们，并在需要时运行。

## 函数表达式 vs 函数声明

让我们来总结一下函数声明和函数表达式之间的主要区别。

首先是语法：如何通过代码对它们进行区分。

- **函数声明**：在主代码流中声明为单独的语句的函数：

  ```javascript
  // 函数声明
  function sum(a, b) {
    return a + b;
  }
  ```

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 `=` 右侧创建的：

  ```javascript
  // 函数表达式
  let sum = function(a, b) {
    return a + b;
  };
  ```

更细微的差别是，JavaScript 引擎会在 **什么时候** 创建函数。

**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

一旦代码执行到赋值表达式 `let sum = function…` 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用。**

例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

这是内部算法的原故。当 JavaScript **准备** 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。

在处理完所有函数声明后，代码才被执行。所以运行时能够使用这些函数。

例如下面的代码会正常工作：

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

函数声明 `sayHi` 是在 JavaScript 准备运行脚本时被创建的，在这个脚本的任何位置都可见。

……如果它是一个函数表达式，它就不会工作：

```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

函数表达式在代码执行到它时才会被创建。只会发生在 `(*)` 行。为时已晚。

函数声明的另外一个特殊的功能是它们的块级作用域。

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**

例如，想象一下我们需要依赖于在代码运行过程中获得的变量 `age` 声明一个函数 `welcome()`。并且我们计划在之后的某个时间使用它。

如果我们使用函数声明，则以下代码无法像预期那样工作：

```javascript
let age = prompt("What is your age?", 18);

// 有条件地声明一个函数
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ……稍后使用
welcome(); // Error: welcome is not defined
```

这是因为函数声明只在它所在的代码块中可见。

下面是另一个例子：

```javascript
let age = 16; // 拿 16 作为例子

if (age < 18) {
  welcome();               // \   (运行)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  函数声明在声明它的代码块内任意位置都可用
  }                        //  |
                           //  |
  welcome();               // /   (运行)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// 在这里，我们在花括号外部调用函数，我们看不到它们内部的函数声明。


welcome(); // Error: welcome is not defined
```

我们怎么才能让 `welcome` 在 `if` 外可见呢？

正确的做法是使用函数表达式，并将 `welcome` 赋值给在 `if` 外声明的变量，并具有正确的可见性。

下面的代码可以如愿运行：

```javascript
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // 现在可以了
```

或者我们可以使用问号运算符 `?` 来进一步对代码进行简化：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // 现在可以了
```

**什么时候选择函数声明与函数表达式？**

根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。

这对代码可读性也更好，因为在代码中查找 `function f(…) {…}` 比 `let f = function(…) {…}` 更容易。函数声明更“醒目”。

……但是，如果由于某种原因而导致函数声明不适合我们（我们刚刚看过上面的例子），那么应该使用函数表达式。

## 总结

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
- 函数表达式在执行流程到达时创建。

在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。

所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。在本章中，我们已经看到了几个例子，以后还会看到更多的例子。

# 箭头函数，基础知识

创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好。

它被称为“箭头函数”，因为它看起来像这样：

```javascript
let func = (arg1, arg2, ..., argN) => expression;
```

这里创建了一个函数 `func`，它接受参数 `arg1..argN`，然后使用参数对右侧的 `expression` 求值并返回其结果。

换句话说，它是下面这段代码的更短的版本：

```javascript
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

让我们来看一个具体的例子：

```javascript
let sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

可以看到 `(a, b) => a + b` 表示一个函数接受两个名为 `a` 和 `b` 的参数。在执行时，它将对表达式 `a + b` 求值，并返回计算结果。

- 如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。

  例如：

  ```javascript
  let double = n => n * 2;
  // 差不多等同于：let double = function(n) { return n * 2 }
  
  alert( double(3) ); // 6
  ```

- 如果没有参数，括号则是空的（但括号必须保留）：

  ```javascript
  let sayHi = () => alert("Hello!");
  
  sayHi();
  ```

箭头函数可以像函数表达式一样使用。

例如，动态创建一个函数：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
```

一开始，箭头函数可能看起来并不熟悉，也不容易读懂，但一旦我们看习惯了之后，这种情况很快就会改变。

箭头函数对于简单的单行行为（action）来说非常方便，尤其是当我们懒得打太多字的时候。

## 多行的箭头函数

到目前为止，我们看到的箭头函数非常简单。它们从 `=>` 的左侧获取参数，计算并返回右侧表达式的计算结果。

有时我们需要更复杂一点的函数，比如带有多行的表达式或语句。在这种情况下，我们可以使用花括号将它们括起来。主要区别在于，用花括号括起来之后，需要包含 `return` 才能返回值（就像常规函数一样）。

就像这样：

```javascript
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3
```

**更多内容**

在这里，我们赞扬了箭头函数的简洁性。但还不止这些！

箭头函数还有其他有趣的特性。



## 总结

箭头函数对于简单的操作很方便，特别是对于单行的函数。它具体有两种形式：

1. 不带花括号：`(...args) => expression` —— 右侧是一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 `n => n*2`。
2. 带花括号：`(...args) => { body }` —— 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。

# 在浏览器中调试

在编写更复杂的代码前，让我们先来聊聊调试吧。

调试是指在一个脚本中找出并修复错误的过程。所有的现代浏览器和大多数其他环境都支持调试工具 —— 开发者工具中的一个令调试更加容易的特殊用户界面。它也可以让我们一步步地跟踪代码以查看当前实际运行情况。

在这里我们将会使用 Chrome（谷歌浏览器），因为它拥有足够多的功能，其他大部分浏览器的功能也与之类似。

## “资源（Sources）”面板

你的 Chrome 版本可能看起来有一点不同，但是它应该还是处于很明显的位置。

- 在 Chrome 中打开 [示例页面](https://zh.javascript.info/article/debugging-chrome/debugging/index.html)。
- 使用快捷键 F12（Mac：Cmd+Opt+I）打开开发者工具。
- 选择 `Sources（资源）` 面板。

如果你是第一次这么做，那你应该会看到下面这个样子：

切换按钮 会打开文件列表的选项卡。

让我们在预览树中点击和选择 `hello.js`。这里应该会如下图所示：

资源（Sources）面板包含三个部分：

1. **文件导航（File Navigator）** 区域列出了 HTML、JavaScript、CSS 和包括图片在内的其他依附于此页面的文件。Chrome 扩展程序也会显示在这。
2. **代码编辑（Code Editor）** 区域展示源码。
3. **JavaScript 调试（JavaScript Debugging）** 区域是用于调试的，我们很快就会来探索它。

现在你可以再次点击切换按钮 隐藏资源列表来给代码腾出一些空间。

## 控制台（Console）

如果我们按下 Esc，下面会出现一个控制台，我们可以输入一些命令然后按下 Enter 来执行。

语句执行完毕之后，其执行结果会显示在下面。

例如，`1+2` 将会返回 `3`，而 `hello("debugger")` 函数调用什么也没返回，所以结果是 `undefined`：

## 断点（Breakpoints）

**断点** 是调试器会自动暂停 JavaScript 执行的地方。

当代码被暂停时，我们可以检查当前的变量，在控制台执行命令等等。换句话说，我们可以调试它。

我们总是可以在右侧的面板中找到断点的列表。当我们在数个文件中有许多断点时，这是非常有用的。它允许我们：

- 快速跳转至代码中的断点（通过点击右侧面板中的对应的断点）。
- 通过取消选中断点来临时禁用对应的断点。
- 通过右键单击并选择移除来删除一个断点。
- ……等等。

**条件断点**

在行号上 **右键单击** 允许你创建一个 **条件** 断点。只有当给定的表达式（你创建条件断点时提供的表达式）为真时才会被触发。

当我们需要在特定的变量值或参数的情况下暂停程序执行时，这种调试方法就很有用了。

## “debugger” 命令

我们也可以使用 `debugger` 命令来暂停代码，像这样：

```javascript
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- 调试器会在这停止

  say(phrase);
}
```

这样的命令只有在开发者工具打开时才有效，否则浏览器会忽略它。

## 暂停并查看

在我们的例子中，`hello()` 函数在页面加载期间被调用，因此激活调试器的最简单的方法（在我们已经设置了断点后）就是 —— 重新加载页面。因此让我们按下 F5（Windows，Linux）或 Cmd+R（Mac）吧。

设置断点之后，程序会在第 4 行暂停执行：

请打开右侧的信息下拉列表（箭头指示出的地方）。这里允许你查看当前的代码状态：

1. **`察看（Watch）` —— 显示任意表达式的当前值。**

   你可以点击加号 `+` 然后输入一个表达式。调试器将显示它的值，并在执行过程中自动重新计算该表达式。

2. **`调用栈（Call Stack）` —— 显示嵌套的调用链。**

   此时，调试器正在 `hello()` 的调用链中，被 `index.html` 中的一个脚本调用（这里没有函数，因此显示 “anonymous”）

   如果你点击了一个堆栈项，调试器将跳到对应的代码处，并且还可以查看其所有变量。

3. **`作用域（Scope）` —— 显示当前的变量。**

   `Local` 显示当前函数中的变量，你还可以在源代码中看到它们的值高亮显示了出来。

   `Global` 显示全局变量（不在任何函数中）。

   这里还有一个 `this` 关键字，目前我们还没有学到它，不过我们很快就会学习它了。

## 跟踪执行

现在是 **跟踪** 脚本的时候了。

在右侧面板的顶部是一些关于跟踪脚本的按钮。让我们来使用它们吧。

-  —— “恢复（Resume）”：继续执行，快捷键 F8。

  继续执行。如果没有其他的断点，那么程序就会继续执行，并且调试器不会再控制程序。我们点击它一下之后，我们会看到这样的情况：执行恢复了，执行到 `say()` 函数中的另外一个断点后暂停在了那里。看一下右边的 “Call stack”。它已经增加了一个调用信息。我们现在在 `say()` 里面。

-  —— “下一步（Step）”：运行下一条指令，快捷键 F9。

  运行下一条语句。如果我们现在点击它，`alert` 会被显示出来。一次接一次地点击此按钮，整个脚本的所有语句会被逐个执行。

-  —— “跨步（Step over）”：运行下一条指令，但 **不会进入到一个函数中**，快捷键 F10。

  跟上一条命令“下一步（Step）”类似，但如果下一条语句是函数调用则表现不同。这里的函数指的是：不是内建的如 `alert` 函数等，而是我们自己写的函数。如果我们对比一下，“下一步（Step）”命令会进入嵌套函数调用并在其第一行暂停执行，而“跨步（Step over）”对我们不可见地执行嵌套函数调用，跳过了函数内部。执行会在该函数调用后立即暂停。如果我们对该函数的内部执行不感兴趣，这命令会很有用。

-  —— “步入（Step into）”，快捷键 F11。

  和“下一步（Step）”类似，但在异步函数调用情况下表现不同。如果你刚刚才开始学 JavaScript，那么你可以先忽略此差异，因为我们还没有用到异步调用。至于之后，只需要记住“下一步（Step）”命令会忽略异步行为，例如 `setTimeout`（计划的函数调用），它会过一段时间再执行。而“步入（Step into）”会进入到代码中并等待（如果需要）。

-  —— “步出（Step out）”：继续执行到当前函数的末尾，快捷键 Shift+F11。

  继续执行代码并停止在当前函数的最后一行。当我们使用 偶然地进入到一个嵌套调用，但是我们又对这个函数不感兴趣时，我们想要尽可能的继续执行到最后的时候是非常方便的。

-  —— 启用/禁用所有的断点。

  这个按钮不会影响程序的执行。只是一个批量操作断点的开/关。

-  —— 启用/禁用出现错误时自动暂停脚本执行。

  当启动此功能，如果开发者工具是打开着的时候，任何脚本执行错误都会导致该脚本执行自动暂停。然后我们可以在调试器中分析变量来看一下什么出错了。因此如果我们的脚本因为错误挂掉的时候，我们可以打开调试器，启用这个选项然后重载页面，查看一下哪里导致它挂掉了和当时的上下文是什么。

**Continue to here**

在代码中的某一行上右键，在显示的关联菜单（context menu）中点击一个非常有用的名为 “Continue to here” 的选项。

当你想要向前移动很多步到某一行为止，但是又懒得设置一个断点时非常的方便。

## 日志记录

想要输出一些东西到控制台上？`console.log` 函数可以满足你。

例如：将从 `0` 到 `4` 的值输出到控制台上：

```javascript
// 打开控制台来查看
for (let i = 0; i < 5; i++) {
  console.log("value", i);
}
```

普通用户看不到这个输出，它是在控制台里面的。要想看到它 —— 要么打开开发者工具中的 Console（控制台）选项卡，要么在一个其他的选项卡中按下 Esc：这会在下方打开一个控制台。

如果我们在代码中有足够的日志记录，那么我们可以从记录中看到刚刚发生了什么，而不需要借助调试器。

## 总结

我们可以看到，这里有 3 种方式来暂停一个脚本：

1. 断点。
2. `debugger` 语句。
3. error（如果开发者工具是打开状态，并且按钮 是开启的状态）。

当脚本执行暂停时，我们就可以进行调试：检查变量，跟踪代码来查看执行出错的位置。

开发人员工具中的选项比本文介绍的多得多。完整的手册请点击这个链接查看：https://developers.google.com/web/tools/chrome-devtools。

本章节的内容足够让你上手代码调试了，但是之后，尤其是你做了大量关于浏览器的东西后，推荐你查看上面那个链接中讲的开发者工具更高级的功能。

对了，你也可以点击开发者工具中的其他地方来看一下会显示什么。这可能是你学习开发者工具最快的方式了。不要忘了还有右键单击和关联菜单哟。