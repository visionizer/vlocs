---
id: "maps"
title: "Maps in V"
---

## What is a map?

A map can be **very** useful. Basically, it gives every **key** a **value**. A Key can be any type, so can every value.
You can think of maps as some kind of dictionary. You look up a word and you will get a definition. In this case, the word is the **key** while the definition is the **value**.

As an example, we will visualize a map that gives every [integer](../../basic-types) a string-value. 

|   Key (Integer)      |   Value (String) |
| :--------------------| ----------------:|
|   1                  |   "Bob"          |
|   2                  |   "Ella"         |
|   3                  |   "Merlin"       |
|   4                  |   "Alex"         |
|   ...                |   ...            |

Now, let us actually create this map in V:
```v
mut m := map[int]string{} // A Map with Keys of Ints and Values of Strings
m[1] = "Bob"
m[2] = "Ella"   // Here we set the value of the key two to the value "Ella"
println(m[1]) // Will Print: Bob
println(m[100]) // Will Print: ""
println(100 in m) // You will learn about `in` soon, but it basically asks if the value 100 is in the map
m.delete(2) // Will Delete the Ella Key
```
A Map can have the following **keys** (The thing in the [])
1. Strings
2. Runes
3. Integers
4. Floats
5. voidptr

### A simpler way

Do you think that it is annoying to have to set each value of a map by hand? There is a simpler way for it. Like this
```v
names := map{
    1: "Bob"
    2: "Ella"
    3: "Merlin"
    4: "Alex"
}
println(names)
```
This will automatically detect the types and initialize the map for you.

## What happens if a value is not existent?

If a key is not found, the default zero is returned.
For example,
```v
sm := map{
    "abc": "xyz"
}
val := sm["bad_key"] // We do not have a key called "bad_key"
println(val) // Will Print "" because this is the default value.
```

What is the default?

e.g.
- For Integers, it is 0
- For Floats, it is 0.0
- For Strings it is ""
- ...

## Can't I error handle this somehow?

Yes, you can using the [or keyword](../or)
An Example:
```v
mm := map[string]int{}
val := mm["bad_key"] or { panic("key not found") }
```