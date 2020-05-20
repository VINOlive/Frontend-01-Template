## 语法

### 语言按语法分类

- 非形式语言：人类语言，中文、英文

- 形式语言：

  0 型，无限制文法；
  1 型，上下文相关文法；
  2 型，上下文无关文法；
  3 型，正则文法

### 产生式(BNF)

- 用尖括号括起来的名称表示语法结构名
- 语法结构分成基础结构和需要其他语法结构定义的复合结构：基础结构成为终结符；复合结构成为非终结符
- 引号和中间的字符表示终结符
- 可以有括号
  * 表示重复多次
  | 表示或
  + 表示至少一次

### 通过产生式理解形式语言

- 0 型，无限制文法：
  ?::=? 
- 1 型，上下文相关文法：
  ?<A>?::=?<B>?

###   图灵完备性

实现图灵机的方式：

1. goto

2. if, while

3. 递归

### 类型系统

-   静态类型与动态类型

-   强类型与弱类型

-   复合类型：  结构体 函数签名

-   子类型：
    逆变/协变

### Lexical Grammar

  ### Unicode

  官网：https://home.unicode.org/