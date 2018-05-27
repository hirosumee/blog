title: Arguments Object và Three dots trong JavaScript
author: Ginne
tags:
  - ES6
  - three dots
categories:
  - ..
  - _drafts
  - javascript
date: 2018-05-06 21:58:00
---
# Chuyện về  "..." hay Three dots trong  ES6

Nếu bạn mới tìm hiểu về các tính năng mới của ES6 thì chắc bạn đã từng nghe qua về khái niệm spread syntax ( cú pháp lan tràn ) . Nó là một trong nhưng tính năng khá là khó nhai cho  người mới .
Để  hiểu bước đầu ta cần tìm hiểu về arguments object trước .

## Arguments Object

### Argument Object là gì

 Argument Object là một mảng ,giống như object ( Nó không mang các method như 1 mảng ). Dùng để truyển đối số và function .

Argument Object là 1 biến cục bộ bên trong tất cả các functions (non-arrow).
Bạn có thể tham chiếu đến argument bên trong 1 function thông qua  `arguments` . Bạn có thể tham chiếu đến các argument được truyền vào qua index (Tương tự mảng ) . Tất nhiên index bắt đầu từ 0.

Ta có 1 ví dụ :

```javascript
function One(){
    let one = arguments[0];
    let two = arguments[1];
    console.log(one+two); //5
    arguments[0]+=1;
    // the arguments can also be set.
    console.log(one+two); //6
}
One(1,4);
```

Mình có chút lưu ý :
>arguments không phải là một mảng . Nó chỉ giống mảng . Và tất nhiên nó không mang bất cứ tính thuộc tính nào của mảng . Trừ `length` . Ta cũng có thể convert nó sang 1 mảng như sau :

``` javascript
let array = Array.from(arguments);
```

Và `arguments` who are you?

``` javascript
 console.log(typeof arguments);
 //object
```

## Three dots

Bên trên chúng ta đã cùng nhau tìm hiểu về khái niệm `arguments` và bản chất của nó . Tiếp theo chúng ta sẽ tìm hiểu về three dots hay rest parameters , spread syntax .

### Rest parameters

 rest parameter cho phép chúng ta đại diện vô hạn tham số truyền vào function như một `mảng` .

Ví dụ :

``` javascript
function Two(a,b,...args){
    let c=a*b;
    args.forEach((item)=>{
        c+=item;
    });
    console.log(c);
}
Two(1,2,3,4,5,6); //20
```

Ngoài ra chúng ta còn có thể  :

```javascript
function Three(...[a,b,c]){
    return a * b * c;
}
Three(1,2,3); //6
```
Ví dụ trên được gọi là : Destructing rest parameters

#### Khác biệt giữa `arguments` và `rest parameter` là gì ?

    1. rest parameters không được cho 1 cái tên riêng  trong khi đó `arguments` object chứa tất cả tham số được truyền tới function .
    2. `arguments` không thưc sự là 1 mảng trong khi rest params là 1 thực thể của `Array` nghĩa là nó chứa tất cả methods chả hạn như : sort , map , splice, v.v .
    3. `arguments` object có  những function của riêng nó . `callee` property .

### Spread systax

`Spread syntax` cho phép lặp lại việc phân giải dữ liệu ra 1 nơi nào đó như là 1 biểu thức mảng hoặc string được mở rộng ở nơi không có hoặc nhiều tham số ( trong lời gọi hàm ) hoặc nhiều phần tử  ( trong array lierals) hoặc 1 biểu thức đối tượng được mở rộng ở nơi không có hay có nhiều dữ liệu dạng key-value (trong object literals).

#### Cú pháp

```javascript
// lời gọi hàm 
// dữ liệu trong args được điền vào các tham số của hàm.
Four(...args);

//mảng literals hay string
[...args,1,2,'a','four'];

// hay object
let objC = { ...obj };
```

#### Ví dụ

Mình có 1 vài ví dụ cho sự tiện lợi của three dots

Việc truyền tham số dưới dạng mảng vào 1 hàm trước đây khá là cồng kềnh thì ở ES6 ta đã có thể làm ngắn gọn hơn rất nhiều.

```javascript
function Five(a,b,c){}
var args = ['a','b',1];
Five.apply(null, args); //old

Five(..args); //new
```

Chúng ta thực sự không thể sử dụng apply cho việc khởi tạo 1 đối tượng nào đó . Vì apply thực hiện 1 lời gọi chứ không phải là 1 contruct như mong muốn . Nhưng  chúng ta có thể  sử dụng spread syntax :

```javascript
let date = [1970, 0, 1];
var d = new Date(..date);
```

Với mảng thì sao ???

```javascript
var parts = ['a','b'];
var alpha = [..parts, 'c', 'd'];
[...parts,...alpha];
```

Với object ??

```javascript
let obj = { foo: 'bar', x:42 };
let obj1 = { foo :'baz', y:13 };
var clone = { ...obj };
//Object{ foo:"bar", x: 42}
var merge = {...obj, ...obj1 };
//Object{ foo:"baz",x:42, y: 13 }
```

### Kết thúc
Qua bài viết chúng ta đã được tìm hiểu về  `arguments` và three dots