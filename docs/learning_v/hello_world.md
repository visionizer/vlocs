---
id: "hello-world"
title: "Writing Hello World in V"
---

Hello World is the first program that is written by most programmers. It is a basic application that will print `Hello World` to the screen.

## How to write it

First, create a file called "hello.v". 
Then, write the following code in it:

```v
fn main() {
    println("Hello World")
}

```

Now, that you have written it, let us run it.
In order for this to run, use `v run hello.v`. This will execute the program.

:::danger Did it tell you that the command v does not exist?

Do not forget that you need to add V to your PATH. In order to do this, go to the directory where you built V and type `v symlink` in order for you to fix this.

:::

## Analyzing the Program

There are a few interesting things in this simple program.

- `fn`: This declares a function. What is a function, you may ask. This is explained [here](functions).
- `println()`: This is also a [function](functions). This one is built in. It will print any text that you put into the parentheses onto the screen. Great, isn't it?

:::tip The Main Function

As you may have noticed, the function that we run is called main. This function will be the first function that will be executed in a program.
Basically, everything starts in there. Any chain of functions that you want to start, needs to start here.

:::

:::note Main is not needed
If you make very, very simple programs this can be skipped. You can just type the code into the file.
:::