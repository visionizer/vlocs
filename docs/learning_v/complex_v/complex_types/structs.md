---
id: "structs"
title: "Structs in V"
---

:::tip If you are a C Coder...
If you know C, you will know these structs. They are very similar to C Structs
:::

:::caution About Classes
There are no classes in V, only structs. Just like in C.
:::

:::danger You can declare methods in structs
They can be declared, just like in every other OOP. Just with a very different syntax. Read the entire document to learn more
:::
## What are structs?

Structs are exactly what they say they are. They are a **structure** made out of data.

Basically, Imagine them as a building. 

When you declare a struct like this: 
```v
struct Point {
    x int
    y int
}
```

All that we do is the following: We create a blueprint for the building. We tell it the following
- We tell it how the building is going to be called.
- We tell it how it looks like. We do this using the following:
    - We tell it what is in the building and what the building needs (In this case, the building called "Point" will have both a floor called x and one called y)

Now, we have a building-blueprint. But why have one if we aren't going to use it? From now on, you can use this "Blueprint" as you would use any other type like `int`

So now, let us construct a building

```v
fn main() {
    mut p := Point {
        x: 10
        y: 10
    }
```

## How can I access the variables in the struct?

As you may have seen, we have set both x and y. But, how do we access them? It is easy. Using a simple `.` we can access all of the fields in this building
```v
fn main() {
    mut p := Point {
        x: 10
        y: 10
    }
    println(p.x)
}
```

## Totally reassigning Structs

You can easily reassign structs like this:
```
struct Point {
	x int
	y int
}
// It has to be mutable
mut p := Point{
	x: 10
	y: 20
}
// We are now reassigning it
p = Point{
	x: 30
	y: 4
}

assert p.y == 4
```

### Short Syntax

If the variable is already declared you do not have to type the struct name again. You can just use curly braces like this:
```v
struct Point {
	x int
	y int
}

mut p := Point{
	x: 10
	y: 20
}
// you can omit the struct name when it's already known
p = {
	x: 30
	y: 4
}
assert p.y == 4
```

## Memory Management

Structs are by default allocated onto the stack. You can allocate them to the heap by using a simple `&`

:::caution Confused?
What is the heap? What is the stack? You learned this earlier in the chapter [memory management](../memory-managment)
:::
## Possible Fields in Structs

### Embedded structs in structs

As you have learned before, structs are nothing but blueprints. Just like any other type. This also means that you can use other structs in a struct.

Like this:
```v
struct Widget {
mut:
	x int
	y int
}

struct Button {
	Widget
	title string
}

mut button := Button{
	title: 'Click me'
}
button.x = 3
```

We can also access it like this:
`button.widget.x = 3`

## Field Access Modifiers



### Public & Private

Do you remember? In Functions, every function is private by default and you have to use `pup` in order.

Structs are similar to Functions in that all of the fields (variables) are private.

The Declaring of `pub` is similar to C++.
Here is an example:

```v
struct Foo {
    a int // Private & Immutable
pub:
    b int // Public Immutable (Readonly)
}
```

### Mutable

As you may have seen, all fields are also not mutable by default. You can make them mutable by simple using `mut`

```v
struct Foo {
    a int // Private & Immutable
pub:
    b int // Public Immutable (Readonly)
mut:
    c int // Private Mutable
}
```

### Public & Mutable Struct Fields

You can also combine those two fields like this:
```v
struct Foo {
    a int // Private & Immutable
pub:
    b int // Public Immutable (Readonly)
mut:
    c int // Private Mutable
pub mut:
    d int // Public Mutable
}
```

## No need for getters or setters

You can set and get all of the variables of a struct without functions.

Example:
```v
foo.a = 10 // Setter
x = foo.a // Getter
```
## Setting default Values for Struct Fields

This is also very easy. You assign them a default value using the default syntax.
```v
struct Foo {
	n   int    // n is 0 by default
	s   string // s is '' by default
	a   []int  // a is `[]int{}` by default
	pos int = -1 // custom default value
}
```

## Requiring Struct Fields

As you may know, you can initialize structs without using all of their fields. Sometimes you want the developer to be forced to assign one value.

You can easily do this like this:
```v
struct Foo {
    t int
    x int
	n int [required] // This will be required
}
```

As a proof, this will not compile:
```v
f := Foo{}
```
But this will
```v
f := Foo{
    n: 10
}
```

## Struct Constructors

:::tip What is a Constructor?
A Constructor is, in most languages, a Function that will be called whenever a new item of it is created.
:::

As you may have noticed, you cannot give a function to a struct. But now, how do we make a constructor? 

We make them **like in C**.

If you do not know how they are done in C, they look like this:

```c
typedef struct {
    int x;
    int y;
} HelloWorldStruct;

HelloWorldStruct* InitHelloWorldStruct(int m_x, int m_y);
```

For anyone who does not know how C works, this basically tells us the following:
> Instead of creating a new HelloWorldStruct, you have to call InitHelloWorldStruct(PARAMS) which will give us a new struct

This is, the only method how we can make constructors. Why? It is the same as a constructor. It is going to give us the struct while also executing some code.

Now, let us look at V:
```v
struct ButtonConfig {
	text        string
	is_disabled bool
	width       int = 70
	height      int = 20
}

struct Button {
	text   string
	width  int
	height int
}

fn new_button(c ButtonConfig) &Button {
	return &Button{
		width: c.width
		height: c.height
		text: c.text
	}
}

button := new_button(text: 'Click me', width: 100)
// the height is unset, so it's the default value
assert button.height == 20
```
### Analyzing this function

What happens here?

1. So, first we declare a `ButtonConfig`. Why? Because that way we can change the requirements quickly.
2. Second, we create the actual `Button` Struct
3. Now, we create the function. It does the following:
    - It takes in a Config and returns the **entire** button
    - It does nothing but create the button
    - **This constructor is pretty much useless, but you could add more logic to it. For example, you could print something every time it is created
4. Now, we create a new button using our function. This works as we return a button in it.

### Shorting Function Parameters
#### Wait... Wait... Why can I just do `new_button(text: "Click Me", width: 100)`? Don't I need to do new_button(ButtonConfig{text:'Click me', width:100})?

We do not need to do this as the smart compiler detects this for us.

## Example: A Struct all of you know

If you have read through this documentation, you probably know the struct called 'String'. This is how it looks like:
```v
struct string {
    str byteptr
pub:
    len int
}
```
`str` is the text and
`len` is the length.

## Defining Methods / Functions on Structs

Have you already noticed something? With a string we can call `functions / methods`. But I have also told you that you cannot define functions in structs. So.. How do you do it?

It is very easy, but the syntax might be weird at first.

First, let us look at this example.

Let's say we make an app that only let's people register if they are over 16. First, let us create the struct
```
struct User {
	age int
}
```

Next, let us take a look how we can define a function that will be able to be called by the user.
```v
fn (u User) can_register() bool {
	return u.age > 16
}
```

The only weird thing on this is the following: The (u User)

What is it?

It is simple, using this you declare two things:
1. Using the `User` in the parentheses, we tell the compiler that the function is callable by a variable of Type User.
2. The `u`. You may have noticed that this looks exactly like any other input. That is because this is true. You will be able to use the
`u` as a variable. It is the variable that called the function.

:::tip The `u` User
The u represents the variable that calls this function
:::

Now, let us look at our full example:

:::caution If you come from other languages
You might know 'u' better as 'self', 'this' or other similar words
:::

```v
struct User {
	age int
}

fn (u User) can_register() bool {
	return u.age > 16
}

user := User{
	age: 10
}
println(user.can_register()) // "false", because user is only 10
user2 := User{
	age: 20
}
println(user2.can_register()) // "true" because user2 is 20
```

## Can I extend structs?

Yes, you can. Learn more about this in the next chapter.