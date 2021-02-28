---
id: "if"
title: "If Statements in V"
---

## What is an If Statement?

An If Statement is there to check if a condition is true. A condition can be anything. Is A bigger B? Is X equal to 10?
If the given condition is true, it will do the code in it's body. If it is untrue, it will just skip the code.

### A simple example

```v
a := 10
b := 20
if a < b {
    // This code will only execute if a is smaller than b (Which it is here)
    println("Hi")
}
```

## Else Statements

Else Statements are easy. As you learned before, if the condition of something is untrue, we just skip it's block. But, what if we want to do something if it is false too?
This is why we have else statements. They basically tell the if statement the following: `Hey, If your condition is not true, please tell me. You know, then I will do what is in my body, ok?`

An example
```v
a := 10
b := 20

if a > b {
    // This is not true because a is smaller than b
    println("A is bigger than B")
} else {
    // This will be triggered here because 20 is bigger than 10
    println("B is bigger than A")
}

```

## If / Else Statements or chaining if statements

What if I want to check if the first condition is already false, if maybe something else is true? Do I really have to use another if?

No, of course not, you can just use `else if` statements. This basically means that if else is triggered, it will ask for another condition. If it does not trigger this else, it will just skip
this.
Example:
```v
a := 10
b := 20
if a < b {
	println('$a < $b')
} else if a > b {
	println('$a > $b')
} else {
	println('$a == $b')
}
```
### More complex if statements

I will put a more complex statement here and explain it soon.

```
num := 777
s := if num % 2 == 0 { 'even' } else { 'odd' }
println(s)
// "odd"
```
So, what does this mean? It basically say that if the modula of num is 0. Modula is interesting. It will basically divide it and give you the remainder. In this case, if the remainder of
the division through 2 is 0, then it is even.

As a next step, you use this interesting syntax. It basically will assign the first value (`even`) to the `s` if the condition is true. `Else` it will assign `odd`