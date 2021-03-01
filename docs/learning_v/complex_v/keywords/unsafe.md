---
id: "unsafe"
title: "Unsafe Code in V"
---

## Unsafe Code

Is the Compiler Annoying you? Is it too safe?

The Compiler is secure and secure things are very annoying. No point in denying that. You can't make those funny things that work 50% of the time but produce great results.

This is why 'unsafe' exists. Anything in the body of this keyword will not be checked by the compiler.

### Example
```v
djjffjjdjfjfjfsjdfj = djdjfjf{jfjfj}
println(djdjjjfjfjfsdfjjfsjsfdjawuuhfs)
```
:::caution This will not compile
I hope you see why
:::

But, this will compile:
```v
unsafe {
    djjffjjdjfjfjfsjdfj = djdjfjf{jfjfj}
    println(djdjjjfjfjfsdfjjfsjsfdjawuuhfs)
}
```

## Why would anyone use that?

Because Unsafe Things can be stupidly fast.