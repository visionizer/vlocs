---
id: "advanced-functions"
title: "Functions in V, Part 2"
---

:::danger This is only one of two parts
There are two parts on functions. One with basic function knowledge and one with advanced function knowledge. Why? Because in order to understand the advanced functions, you need to understand a lot about V.
Click [here](../functions) to visit the first part.
:::

## Why more functions? I thought I was done with them?

Functions can be very complex. Yet they are also very important to a beginner.
This is why functions are split into two parts:
1. Basic Knowledge
2. Advanced Knowledge

## V Functions are pure by default

### What is a pure function in V?

A pure function is a function that produces it's output (it's return) only based on it's input parameters. This is so in V, because there are no global variables.

#### This doesnt have to be like this

## Enable Globals in V

:::danger Do not do this
There is a reason why this isn't on by default, this is just here for completion
:::

Using the `--enable-globals` compiler flag (e.g.: `v --enable-globals run foo.v`) you enable globals.

Only intended for low-level applications such as kernels or drivers.

## Passing in mutable input.

By default, you cannot change the input. You can by using the 'mut' keyword.
```v
struct User {
	name string
mut:
	is_registered bool
}

fn (mut u User) register() {
	u.is_registered = true
}

mut user := User{}
println(user.is_registered) // "false"
user.register()
println(user.is_registered) // "true"
```

Why would you want to do that?

It is simple, as displayed above. We have a function called register and we want to change the User's variable.

Another example:
```v
fn multiply_by_2(mut arr []int) {
	for i in 0 .. arr.len {
		arr[i] *= 2
	}
}

mut nums := [1, 2, 3]
multiply_by_2(mut nums)
println(nums)
// "[2, 4, 6]"
```

:::note
Note that, when you do not call the function from the object, you have to write mut before the input: example: `multiply_by_2(mut nums)`
:::

:::caution A Recommendation
For this reason V doesn't allow the modification of arguments with primitive types (e.g. integers). Only more complex types such as arrays and maps may be modified.

Use user.register() or user = register(user) instead of register(mut user).
:::


V also makes it easy to update an entire Object. Like this
```v
struct User {
	name          string
	age           int
	is_registered bool
}

fn register(u User) User {
	return {
		...u
		is_registered: true
	}
}

mut user := User{
	name: 'abc'
	age: 23
}
user = register(user)
println(user)
```

As you may notice, In the line where we call the function, we set the original value to a modified value of itself. This also works




## Taking an undefined amount of Input into one function in V

Do you not know how many integers the user might want? Let's say we have a sum function and we want the dev to pass in as many inputs as they want. This is how we do it:

```v
fn sum(a ...int) int {
	mut total := 0
	for x in a {
		total += x
	}
	return total
}

println(sum()) // 0
println(sum(1)) // 1
println(sum(2, 3)) // 5
// using array decomposition
a := [2, 3, 4]
println(sum(...a)) // <-- using prefix ... here. output: 9
b := [5, 6, 7]
println(sum(...b)) // output: 18
```


## Anonymous and High Order Functions in V

These two exist two, luckily.

:::warning This is going to be complex
If you feel like you did not understand it completely, reread the code. I am sure that you can understand it.
:::

```v
fn sqr(n int) int {
	return n * n
}

fn cube(n int) int {
	return n * n * n
}

fn run(value int, op fn (int) int) int {
	return op(value)
}

fn main() {
	// Functions can be passed to other functions
	println(run(5, sqr)) // "25"
	// Anonymous functions can be declared inside other functions:
	double_fn := fn (n int) int {
		return n + n
	}
	println(run(5, double_fn)) // "10"
	// Functions can be passed around without assigning them to variables:
	res := run(5, fn (n int) int {
		return n + n
	})
	println(res) // "10"
	// You can even have an array/map of functions:
	fns := [sqr, cube]
	println(fns[0](10)) // "100"
	fns_map := map{
		'sqr':  sqr
		'cube': cube
	}
	println(fns_map['cube'](2)) // "8"
}
```

:::danger This is only one of two parts
There are two parts on functions. One with basic function knowledge and one with advanced function knowledge. Why? Because in order to understand the advanced functions, you need to understand a lot about V.
Click [here](complex_v/advanced-functions) to visit the second part.
:::