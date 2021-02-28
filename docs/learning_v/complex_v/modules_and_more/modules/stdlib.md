---
id: "stdlib"
title: "Standard Libraries in V"
---
## V must give me some libraries to work with, right? I do not have to code this myself.

You are right. V provides many libraries for you. For example, it gives you the `os` library. Or the `time` library.

We import them, just like we import any other function.

As an example:
```v
//import os

fn main() {
    // Ask for Input
    name := os.input("Enter your name here: ")
    println("Hello, $name")
    os_name := user_os()
    println("You are on ${os_name}, is this right?)
}

```

## What Standard Libraries are there?

There are many, these are the ones that exist right now:

- clipboard
- crypto
- encoding
- arrays
- benchmark
- bitfield
- cli
- dl
- darwin
- eventbus
- flag
- fontstash
- gg
- glm
- gx
- hash
- io
- json
- log
- math
- mysql
- net
- os
- pg
- picoev
- picohttpparser
- rand
- readline
- regex
- runtime
- semver
- sokol
- sqlite
- stbi
- strconv
- strings
- sync
- szip
- term
- time
- v
- vweb
- x

Want to learn more about them? Visit [this site](https://modules.vlang.io/)