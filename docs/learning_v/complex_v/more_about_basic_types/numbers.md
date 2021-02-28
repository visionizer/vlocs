---
id: "numbers"
title: "Numbers in V"
---

## Basic Knowledge

### Default Assignation

- Ints: By default, every integer will be an 'int', which is a 32-bit integer.
- Floats: By default, every float will be an f64, which is a 64-bit float.

### Assignation

```v
a := 123
```
This will assign the value of 123 to a. By default this variable will have the [type](../basic-types) `int` (i32)

If you want to, you can also assign hexadecimal, binary or octal notations for integers.

```v
a := 0x7B // Stands for 123
b := 0b01111011 // Stands for 123
c := 0o173 // Stands for 123
```

All of these will have the same value, 123. They will have the type of `int`, no matter what way of description you used. Why? You just described the same value in a few different ways

### Displaying large numbers easily

Let's say that you have the value `1000000`. Kind of... hard to read. This is why we can use an underscore to seperate them.

```v
num := 1_000_000 // same as 1000000
```

A lot more readable.

#### Examples

```v
num := 1_000_000 // same as 1000000
three := 0b0_11 // same as 0b11
float_num := 3_122.55 // same as 3122.55
hexa := 0xF_F // same as 255
oct := 0o17_3 // same as 0o173
```

## I learned about i64 and more... How can I use them if anything is automatically an int (i32)?

That's also easy. You use [casting](../variables#casting).

#### Examples

```v
i := 3 // Will be int automatically
i64 := i64(3) // Will be i64
i16 := i16(3) // Will be i16
```

### What about floats?

Floats will, by default, use f64. If you want something else, you also need to cast.

```v
f := 1.0
f1 := f64(3.14)
f2 := f32(3.14)
```