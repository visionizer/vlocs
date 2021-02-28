---
id: "imports"
title: "Importing Modules in V"
---

## What even is importing... or modules?

Let's say you wrote this awesome function called `say_hi`. You put so much effort into it. And now, you want to use it in another file. But... How do you do that?

It's easy.

## How to import in V

First, you need to realise that you can only import modules. Modules are a collection of one file / many files that you import. Whenever you import a module, you import **all** functions of all of the files that have the module.

But, there is something else that you need to know.

:::caution 
**All files in a folder must be of the same folder**
:::

Wait what? All of them in the same folder? How am I going to organize that? It is easy. All files of the same module **must** be in the same folder.
First, let us take a quick peek at [project structure](../../project-structure). This is explained later, but basically, in your code you should have a folder called
`modules`. This is where all of your modules go.

## Example

This should be a basic layout

myproject
    | modules
    otherfile.v

Now, let us create a module for our awesome code.

```bash
cd modules
mkdir my_module
cd my_module
touch myfile.v # (Creates the file, just create it manually if on Windows)
code myfile.v
```

Now, this is what our structure should look like now

myproject
    | modules
        | my_module
            myfile.v
    otherfile.v

Let us just edit myfile so that it has some code.
Your myfile.v should look like this:
```v
module my_module // Tell it that we want to be in my_module

// Remember, we have to use `pub` so that it is public
pub fn say_hi() {
    println("Hello from this awesome module")
}

```

Now, let us edit otherfile.v

```v
import my_module

fn main() {
    my_module.say_hi()
}
```

### Analyzing this function

There are also a few interesting things here. First, you see that we import the module using the `import modulename` syntax.
Another interesting thing is that you need to use `module_name.function_name`.

## Basic Knowledge on Modules

- Module names should be short, under 10 characters.
- Module names must use snake_case.
- Circular imports are not allowed.
- You can have as many .v files in a module as you want.
- You can create modules anywhere.
- All modules are compiled statically into a single executable.

## Initializing Modules

If you want a module to call a function as soon as it is imported, use the `init` function

```v
fn init() {
    // Your Initialization Code here...
}
```

## What if I do not want to import everything?

This is also possible, using {}
As an example, use
```v
import os { input }
```
To only import the input() function from the os library.
You can also import many things at once, using
```v
import os { input, user_os }
```
## What if I do not want to type the entire module name every time?

This is also possible using the [as](keywords/as) keyword.
This will set the alias for your module
Let us use the example from before, where we had `mymodule`. A long name, isn't it? We are going to shorten it.

```v
import mymodule as mm

fn main() {
    mm.say_hi() // is the same as mymodule.say_hi
}
```