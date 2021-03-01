---
id: "match"
title: "Using Matches in V"
---

## If I want to check for the value of a type, do I really need to type if else?

Let's say, we take in the variable `x` and we want to print something different based on it's value.
Do you really want to do this?

:::danger THis is bad
Do not do this
:::

```v
x := 10

if x == 1 {
    println("I am good")
} else if x == 2 {
    println("I am not a cat")
} else if x == 3 {
    println("I am a human")
} else if x == 4 {
    println("I have no ideas")
} else if x == 5 {
    println("Hello World")
} else if x == 6 {
    println("I like V")
} else if x == 7 {
    println("Like Go, but better")
} else if x == 8 {
    println("Error 404: Idea.html is not existent")
} else if x == 9 {
    println("This is awful")
} else if x == 10 {
    println("Finally")
}
```

:::danger
This is not only unperformant, hard to type, but also unreadable.
:::

All we do there is that we **match** the value to statements, don't we? This is why `match` exist. You may know i
A match statement works like this:
```v
match VARIABLE_THAT_YOU_WANT_TO_MATCH {
    VALUE_1 {
        // Body
    }
    VALUE_2 {
        // Body
    }
    ...
}
```

But now, let's rewrite our code from before.

```v
x := 10

match x {
    1 {
        println("I am good")
    }
    2 {
        println("I am not a cat")
    }
    3 {
        println("I am a human")
    }
    4 {
        println("I have no ideas")
    }
    5 {
        println("Hello World")
    }
    6 {
        println("I like V")
    }
    7 {
        println("Like Go, but better")
    }
    8 {
        println("Error 404: Idea.html is not existent")
    }
    9 {
        println("This is good")
    }
    10 {
        println("Finally")
    }
}

```
A lot more readable

:::tip 
Matches are just switch statements
:::

## Matching Mutable Variables

You cannot match them as easily. Why? Because it changes all the time. But it can be done. All that you need to do is
put a `mut` in front of the matching variable. 

### Example

```v
mut x := 10

match mut x { // See the mut?
    1 {
        println("I am one")
    }
    ...
}

```

## Matching a variable to multiple values at once

Let's say that I want to do the same thing for 1 & 2.
Do I really have to write the following?

```v
mut x := 2 {
    1 {
        printlin("I am one or two")
    }
    2 {
        println("I am one or two")
    }
}
```
:::caution No
No, you do not need to do this
:::

You can match multiple values using a comma.

```v
mut x := 2 {
    1, 2 {
        printlin("I am one or two")
    }
}
```
### Matching Ranges of Values

You can match ranges of values using the `..`. This is used for a simple `from x to y` range.

```v
c := `v`
typ := match c {
	`0`...`9` { 'digit' }
	`A`...`Z` { 'uppercase' }
	`a`...`z` { 'lowercase' }
	else { 'other' }
}
println(typ)
// 'lowercase'
```