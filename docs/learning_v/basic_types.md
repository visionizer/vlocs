---
id: "basic-types"
title: "Basic Types in V"
---

## What is a Type?

In V, every variable has a type. A type means what values can be given to it. Types are complex, which is why I am not going to talk about them much right now.
You will learn more about them later, yet I wanted to tell you what they are before diving into variables.

There are a few Primitive Types in V:

- `bool`: Bools or Booleans are a simple type. They can have one out of two values. A boolean is either `true` or `false`.
- `string`: A String is what you would call Text. For example `"Bob"` is Text. A String is implied by putting the value into `" "`.
- Integers (ints): Integers are numbers **without** decimals. There are a few of them. With weird numbers after the i. What do these numbers mean? The Number represents the number of bits that it uses. E.g.: an i16 uses 16 Bits and can have values from `-32768` to `32767`. Which is a lot.
    - `i8`: A 8-Bit Integer: Values from `128` to `127`.
    - `i16`: A 16-Bit Integer: Values from `-32768` to `32767`.
    - `int`: A 32-Bit Integer: Values from `–2147483648` to `2147483647`. Quite a lot.
    - `i64`: A 64-Bit integer: Values from `-9223372036854775808` to `9223372036854775807`. That's a lot. Have you ever heard of 64-Bit Systems? Well, no 32-Bit System can use this thing so 
    be careful.
    - `i128`: A 128-Bit Integer: Values from ? to ?. 
- Unsigned Integers (uints): These are integers that are only positive. This may seem useless, but you have to consider that they do not use the negative values anymore, which means that they have much higher positive values.
    - `byte`: Represents one byte
    - `u16`: A 16-Bit positive integer: Values from `0` to `65535`
    - `u32`: A 32-Bit positive integer: Values from `0` to `4294967295`
    - `u64`: A 64-Bit positive integer: Values from `0` to `18446744073709551615`.
- `rune`: Represents a Unicode code point
- Floats: Floats are integers with decimals.
    - `f32`: This is a 32-Bit Float (Can have decimals)
    - `f64`: This is a 64-Bit Float (Can have decimals)
- C-Interoperability: As you may know, V is very compatible with C, which is why these types exist. You will not use them often in everyday V Code.
    - `byteptr`: A Byte-Pointer
    - `voidptr`: A `void*` from C
    - `charptr`: A `char*` from C (String Alternative)
    - `size_t`:  size_t
- `any`: This can be anything. **not recommended** as it will slow down your system.

:::note Unsigned
Unsigned means that a value can only be positive
:::

:::caution About 64-Bit
64-Bit Data Types will only run on 64-Bit Systems, this excludes many older systems. Think about this while developing.
:::