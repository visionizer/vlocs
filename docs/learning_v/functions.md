---
id: "functions"
title: "Functions in V"
---

:::danger This is only one of two parts
There are two parts on functions. One with basic function knowledge and one with advanced function knowledge. Why? Because in order to understand the advanced functions, you need to understand a lot about V.
Click [here](complex_v/advanced-functions) to visit the second part.
:::

## Functions take in Input and Produce Output...

But what does this even mean?
It basically tells us that this is a **reusable** block of code that will take in an **input** and produce one or more **outputs**
We can call functions.

## A Simple Example Function

```v
fn add(x int, y int) int {
    return x + y
}

```

### Analyzing the function

First, it tells the compiler that we are declaring a function using the `fn` keyword. Next, we tell it what input we want. In this case, we want `x` and `y`. The Type comes
**after** the name. In this case, we want both of our inputs to have the [type](basic-types) of `int`. We can use these Inputs as variables as long as we are within the function.

Wait... If we declare input in the parentheses, what does the int after them mean? It tells the compiler what the function will return.

### Return

What is return? Return will return any value (variable or not). This will also stop the function.

### An Example for Return

```v
fn sum(x int, y int) int {
    println("I am here") // Will be executed
    return x + y // Now, we end the function
    println("I am illegal") // We have ended the function already, which is why this cannot compile
}
```

## Variables

As you may have learned before, Variables can only be initialized in function body. A body ranges from one parentheses to the other. You can **only** use the variable while being in the function body.

### Variables Example

```v
fn foo(x int, y int) int { // Function Body starts here
    test := x + y // New Variable, yay
    println(test) // We print it
} // Function Body ends here

fn test() {
    println(test) // Does not work as this is another function
}

```

## Example

```v
fn main() {
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}

```
As you may see, you can also print the value of functions. You could also use something like this:
```v
fn main() {
    add_result := add(77, 33)
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}

```

## Returning multiple values

We can also return many values at once, like this:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    a, b := foo()
    println(a) // 2
    println(b) // 3
}
```
But what if we do not want to have both values? We can use this:
```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    a, _ := foo() // _ are ignored
}
```

## Public vs Private

What if we want to use the function from another file?
We have to use the `pub` keyword. This is short for `public`

:::note
A Function is private by default
:::

### Example:

```v
// This is public
pub fn public_function() { 
    
}

// This is private
fn private_function() {

}

```

:::caution About `pub`
This keyword can only be used while being in a [module](modules)
:::

## Declaring functions as input / Declaring Anonymous Functions

You will learn this in the chapter [Functions in V, Part 2](complex_v/advanced-functions#anonymous-and-high-order-functions-in-v)

### Example

```v
upper_fn := words.map(fn (w string) string {
    return w.to_upper()
})

```
Taken from [the array documentation](complex_v/arrays#filtering--mapping-arrays)

## How to make your functions more clear

:::caution Variable Names
Input Names should be very descriptive, so do not use my names
:::

Let us say that you want to create some large function and call it
```v
fn foo(a int, b int, c int, d int, e int, f int, g int) int {
    return 1
}

// Some other file
fn main() {
    foo(1, 2, 3, 4, 5, 6, 7)
}
```

Now, let us say that we not only imported this function but also that the variables are very different. Someone who hasn't written this code will be confused. What are these names?
Will they really have to go onto a website? I hope not.
This is why we can describe these parameters like this:

```v
fn main() {
    foo(a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7)
}
```
As you may see, now you know what the corresponding inputs are called.


:::danger This is only one of two parts
There are two parts on functions. One with basic function knowledge and one with advanced function knowledge. Why? Because in order to understand the advanced functions, you need to understand a lot about V.
Click [here](complex_v/advanced-functions) to visit the second part.
:::