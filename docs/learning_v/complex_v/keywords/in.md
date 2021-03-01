---
id: "in"
title: "Checking if something is in something / The is Operator"
---

## Do you want to know if something is in something?

Then the `in` operator is great for you. It does exactly what you think it does. It can be used in any if statement to see
if something is **in** either a [map](../complex_types/maps), an [array](../complex_types/arrays) or an [enum](../complex_types/enums)

It works like this:

```v
my_map := map{
    "one": 1
    "two": 2
    "three": 3
}

println("one" in my_map) // True
println("four" in my_map) // False

if "five" in my_map { // False, will not be triggered
    //...
}