---
id: "is"
title: "Type-Checking in V / The Is Operator"
---
:::note REMINDER
You can declare types. You learned this [here](../complex_types/types)
:::

## A short reminder

You can declare types that have two types.

```v
// Declaring the type
type StringOrInt = string | int // The | means or

x := StringOrInt(int{20})
```

## How to check if something has a certain type in V?

But now, let us assume that we take this type as a function input. Now, let us say that we want to do something if it is
an integer and something else if it is a string. We can do this thanks to V's `is` keyword. You can, basically, check if a `value` **is** of a certain `type`.

We can use it in normal if statements.

```v
// Declaring the type
type StringOrInt = string | int // The | means or

x := StringOrInt(int{20}) // This is an integer

if x is int {
    println("I am an Integer")
}
if x !is int { // Remember? A `!` tells the program that we negate the statement
    println("I am not an integer")
}
```

## Using Matches

If you have a type that can be many types, sometimes it is better to use [match](match).

```v
type ManyTypes = string | int | i16 | i64

x := ManyTypes(int{23})

match x {
    int {
        println("I am an int")
    }
    string {
        println("I am a string")
    }
    i16 {
        println("I am a 16-Bit Integer")
    }
    i64 {
        println("I am a 64-Bit Integer")
    }
}

```

:::tip About Structs...
This also works with structs
:::

## Example for Structs

```v
struct MyStruct {
	x int
}

struct MyStruct2 {
	y string
}

type MySumType = MyStruct | MyStruct2

struct Abc {
	bar MySumType
}

x := Abc{
	bar: MyStruct{123} // MyStruct will be converted to MySumType type automatically
}
if x.bar is MyStruct {
	// x.bar is automatically casted
	println(x.bar)
}
match x.bar {
	MyStruct {
		// x.bar is automatically casted
		println(x.bar)
	}
	else {}
}
```

## Can I TypeCheck mutable variables?

Yes, but not as easily. Why? Because they could change all the time. It is not a very good idea to typecheck mutable variables.
Sometimes, it is necessary.

If you decide to do it, you have to mark it as `mut` just as with `match`.

```v
type ManyTypes = string | int | i16 | i64

mut x := ManyTypes(int{23}) // See the mut?

if mut x is int { // See the mut?
    println(x)
}

// Same with match

match mut x {
    ...
}
```