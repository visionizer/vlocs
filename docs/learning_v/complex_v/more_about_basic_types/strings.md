---
id: "strings"
title: "Strings in V"
---

:::caution We will use a lot of assert here
This will be covered later, yet we will use it here. Basically, it will check if the condition given is true and if it is not true, it will throw an error. To learn more, click [here](asserts)
:::

:::tip String is just a struct
What is a struct? You will learn soon...
:::

## What even is this?

Do you remember? Strings are Text.

## Basic String Knowledge

### Getting the Length of a String

You can easily get the length of a string using `string.len`

#### Example

```v
name := "Bob"
println(name.len) // Will print 3
```

### Getting a certain character of a String

You can easily access a certain character using `string[char_that_you_want_to_access]`

#### Example

```v
name := "Bob
println(name[0]) // Will print "B"

```

:::caution You cannot set specific characters
Learn more [here](strings#you-cannot-change-specific-characters)
:::

### Escape Characters

In order to, for example, go to the new line, you have to use escape characters. They are the same as in C.

#### Example

```v
newline_windows := "\r\n" // Just like in C
assert newline_windows.len == 2 // They count as 2 chars
```
`\r` will go to the beginning of a line while
`\n` will go to the next line.

### You cannot change specific characters

Specific characters in a string are **always** immutable.

#### Example

```v
mut s := "Hello 🌎"
s[0] = `H` // Not allowed
```
:::danger Will throw this error
error: cannot assign to s[i] since V strings are immutable
:::

:::note A Note about Emojis
Indexing a String will give you the byte. An emoji is many bytes, but one rune
```v
world := `🌍` // We use these ` to declare runes
assert "aloha!"[0] == `a`
```
:::

:::tip Declaring Runes
You declare Runes using '`'
:::

### Do you want to use the \n character without escaping?

Well, this is possible too. Using **Raw Strings**. These Strings do not care about escape characters. You declare raw strings using a simple `r` in front of the string

#### Example

```v
s := r"Hello \n World"
a := "Hello \n World"

println(s) // Will Print: Hello \n World

println(a) // Will Print: Hello
           //             World

```
### Converting Strings to Integers

This is also very easy to do.

#### Example

```v
s := "42"
n := s.int() // 42
```

## String Interpolation

An **interpolated string** is a string literal that *might* contain **interpolation expression** (Such as $)

### Basic Variable String Interpolation

Variables can be interpolated into a string using the $ symbol.

#### Example

```v
name := "Merlin"
println("Hello, $name!") // Will Print: Hello, Merlin
```
You can also use properties of objects like this

#### Example 2

```v
println("The Age is $user.age")
```

### Complex Variable String Interpolation

You can, of course, also do more complex interpolation. You can do this using ${}.

#### Example

```v
println("Can the user register? ${user.age > 13}") // This is a simple if statement, which will say true if the age is over 13 and 14 if it isn't.
```

### Format Specifiers

You can use C's printf format specifiers. You do not need to take care of storage size, so not hd or llu.

#### Example

```v
x := 123.4567
println('x = ${x:4.2f}')
println('[${x:10}]') // pad with spaces on the left => [   123.457]
println('[${int(x):-10}]') // pad with spaces on the right => [123       ]
println('[${int(x):010}]') // pad with zeros on the left => [0000000123]
```

## String Operators

You can use [operators](operators) (+, -, +=, etc) on Strings like this:

#### Example

```v
name := "El"
ella := name + "la" // + is used to add to the string
println(ella) // Will Print: ella
mut s = "Hello, "
s += "World" // += is used to add to the string without having to mention it again
println(s) // Will Print: "Hello World"
```

### Both sides of an operator must be of the same type

##### Example
```v
age := 10
text := "I am this many years old: " + age
```

:::danger This will not compile with the following error
error: infix expr: cannot use int (right expression) as string
:::

#### How to fix this

There are two different ways how you can fix this problem.

1. Convert one of the operators
    ```v
    age := 10
    text := "I am this many years old: " + age.str()
    ```
2. Or use String Interpolation (Preferred)
    ```v
    age := 10
    text := "I am this many years old: $age"
    ```
