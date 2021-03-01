---
id: "for-loop"
title: "For Loops in V"
---

:::tip What is an iteration?
An iteration is one repetition of the code
:::

## What is a for-loop?

A For Loop is, simply put, a block of code that will be executed a number of times.
There are many ways to declare how many times something should loop (Repeat the Code Block)

## What is `i`

Before we start, you will se the name `i` many times in this code. Why? `i` is being called the `iterable`. This simply means that it can tell you what loop we are in. In the first loop it will be 0, in the second one it will be 1, ...
:::tip 
You do not have to call i i, some people prefer to call it a, or the first letter of their name
:::

### Why would I use this?

For example, if you want to set an array, you can use `array[i]` to go through a number of them.

## The Forms of a Loop

As mentioned before, there are several different ways to declare how many times a loop runs.

The most used one is the 

### For / In Loop

This is a loop that basically says the following: `I will loop as many times as are in this range`.
A simple example would be the following: We want a loop to print "Hello World" 15 times. 0-15 is a 

### Numeric Range For / In Loops

This means that we want to loop based on a range of static numbers
Let's look at it:

```v
for i in 0 .. 15 {
    println("Hello World")
}
```
This would print "Hello World" 16 times.

low..high means an exclusive range, which represents all values from low up to but not including high.

#### What are these weird dots?

They are a simple `to`, meaning that in the example above, we want to loop the range `from 0 to 15`.

### For Array Elements, while also getting the Array Element

What if we want to print every name in the array called `names`? For this, you need to learn that while `i` is our main
iterable, we can have many more.

:::caution
You need to have i in your statements, it will always have the loop count in it
:::

Even though we can have many, they are not required to be numbers.
For example, if we want to loop through the names, we can have an iterable that is the current name.
Here is an example

```v
names := ["Sam", "Peter", "Merlin"]
for i, name in names {
    println("$i) $name")
    // Will Print: 0) Sam
    //             1) Peter
    //             2) Merlin
}
```

Now, let us analyze this:

First, we have to declare `i`. We do not have to tell the compiler that it is our iterable, it just knows it.
After this, we add another iterable. We give it a custom name. There is a pattern here: `VARIABLE_NAME in ARRAY_NAME`
The `VARIABLE_NAME` will always have the array's value with the index of i. 

This means the following: In the first loop, we could instead of writing this, just use
```v
names := ["Sam", "Peter", "Merlin"]
for i in 0 .. names.len {
    name := names[i]
    println("$i) $name")
        // Will Print: 0) Sam
    //             1) Peter
    //             2) Merlin
}

```
It's the same

### For Map Elements, while also getting the Map Element

It is the same as in Arrays.

In order to prove to you, that the iterable can be anything, here we have an example:

```v
m := map{
	'one': 1
	'two': 2
}
for key, value in m {
	println('$key -> $value')
	// Output: one -> 1
	//         two -> 2
}
```

## Conditional For Loops

Let's say that you want to loop as long as some condition concerning the `i` is true. 

:::note
This is the C++ / Most other languages style for while loops
:::

```v
mut sum := 0
mut i := 0
for i <= 100 {
	sum += i
	i++
}
println(sum) // "5050"
```

## Break and Continue

There is a great way to handle loops. You can do it using `break` and `continue`. But what do they mean?

- `break` will exit the entire loop meaning that it will continue the normal code. This could be used if you want to check something and as soon as you are finished, you can exit the loop to not waste memory.
- `continue` will stop the **current iteration**. This means that it will just continue with the next iteration.

## Bare For Loop

Do you think that something helping you is very bad? Well you can also say that you do not want any help from the compiler and
write a bare for loop.
```v
mut num := 0
for {
	num += 2
	if num >= 10 {
		break
	}
}
println(num) // "10"
```

## C-Style For / C++-Style For / Modifiable For

Do you want more customizability in your loops? Do you want to say that I will grow by two each loop?

You can also use the C Style Syntax:
Let's take a look and I will explain it later
```v
for i := 0; i < 10; i++ {
	// Don't print 6
	if i == 6 {
		continue
	}
	println(i)
}
```

As you may see, C has an interesting syntax. There are three parts of this loop, separated by `;`

These are the parts:
1. `i := 0`
2. `i < 10`
3. `i++`

So, what do they mean?

It is easy.
1. `i := 0`: This is the **Initializer**. Here, you have to initialize your `i`
2. `i < 10`: This is the **Condition**. It can be any condition, just like in an [if statement](if). The loop will loop as long as this condition is ture.
3. `i++`: This is the **Post-Iteration Statement**. This will be called as soon as one iteration is over. It can be anything like `i += 2` Which would increase it by 2

Basially, this is the pattern: `for INITIALIZER; CONDITION; POST-ITERATION STATEMENT`