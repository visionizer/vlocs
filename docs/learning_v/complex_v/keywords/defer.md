---
id: "defer"
title: "Deferring Statements in V"
---

## What is deferring?

A `defer statement` will delay the execution of it's body (What is within it's {}) until the function that it is in [returns](../../functions#return) (Until the function is finished)

As easy as that.

## Deferring in V

Now, let us look at a bad example.

:::danger This is bad
We write too much
:::

```v
import os

// Reads a file (Acutally it doesnt, this is useless code)
fn read_file(name string) {
    mut ok := false
    mut file := os.open("$name.txt") or { panic(err.msg) }

    // ...
    if !ok {
        file.close() // Once
        return
    }
    file.close() // Twice
    return
}
```

As you may see, we use `file.close()` twice. Why? Because We have to close the file that we read. Luckily, this is just one line.

Now, imagine you have a gigantic function with 30 different Return statements. And now, imagine that you do not have a single line, but instead that you have 20.

Do you want to type those lines every single time you return?

Of course not.

This is why defer is good. It will tell it the following:

`Hey function. Every time you return, please tell me so that I can do something`

This is it. 
Now, let us rewrite the function:

```v
import os

// Reads a file (Acutally it doesnt, this is useless code)
fn read_file(name string) {
    mut ok := false
    mut file := os.open("$name.txt") or { panic(err.msg) }

    // Using this, we can delay it
    defer {
        file.close()
    }

    // ...
    if !ok {
        return
    }
    return
}
```
