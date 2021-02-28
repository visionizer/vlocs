---
id: "variables"
title: "Variables in V"
---

## Data

You cannot always use the same value, can you? What if you want to store some data. You do this with "Variables". Every variable has a [Datatype](basic-types).
You **cannot** declare variables while not being in a [function](functions#variables). You have to be **within** a function to be able to declare a variable.

:::tip Variables can only be initialized in Functions
Learn more [here](functions#variables)
:::

## Initializing Variables

It is very annoying to have to type out the type over and over again. This is why V uses `:=` to declare variables, just like Go. This will automatically detect the type for you. A Friendly Compiler.
Now, let's declare a very basic variable.

```v
name := "Bob"
```
This will create a variable with the value "Bob". If you have paid attention in the previous chapter, you know that this variable has the type `string` because it is text.
Now, what if we have a variable / value that does not have the right value? What if we really want an `i64` but the compiler wants to force us to use an `i32`?. It is simple, we have to use

## Casting

This will turn any variable of a specific type into another type. This can be done like this in V:
```v
large_number := i64(9999999999)
```
As you may see, you use `TYPE_THAT_YOU_WANT_TO_TURN_IT_INTO(VALUE_THAT_YOU_WANT_TO_CONVERT)`

Now, let us see a good example of variables:
```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```
This will print the values.
Now, let us try something

```v
name := "Bob"
name = "Not Bob"
```
:::danger This does not compile
But why...
:::
This is how we would change variables in other languages. Wait what... It doesnt compile? Why?
It is simple, because of

## Immutability

A Variable can, by default, not be changed. Wait, why? It is simple, to ensure that you do not change values by accident.
But now, often, we actually want to change a variable. Is this even possible? Of course it is.
Like this:
```v
mut age := 20
println(age)
age = 21
println(age)

```
:::tip This does compile
Because of the "mut"
:::
If we want to tell the compiler that we will change something, we use the keyword `mut`. This is short for `mutable`.

## Wait, what is the difference between = and :=

One of them is the **initializer**, meaning that we use it to **initialize** (Create) a variable. On the other hand, `=` is used when you want to **change**  a variable.

## How do I print variables?

It is very simple to print variables using
```v
mut a := 0
mut b := 1
println("$a, $b") // This will print 0, 1
```
As you may see, a $ shows that you want to print a variable

## Swapping Variables

Let's assume that you want to swap two variables. You can do this like this:
```v
mut a := 0
mut b := 1
println("$a, $b") // This will print 0, 1
a, b = b, a // We just swapped them
println("$a, $b") // This will print 1, 0
```
:::danger
You **have** to use your variables or your code will not compile
:::
Want to stop that? use the `-prod` flag. Example: `v -prod foo.v`

## How to name your variables?

You name them using `snake_case`. To learn more about naming, visit the [naming conventions](naming)