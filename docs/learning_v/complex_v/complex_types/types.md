---
id: "types"
title: "The Type-Type in V"
---

## What if you want a new type / A Typedef

Do you want to rename a type? Or do you want to make a new type that can be two different things at once?

It is easy, let us just think of a use case for this. Imagine, we want a value that can be either a `string` or an `int`

You can do it like this:
```v
// Declaring the type
type StringOrInt = string | int // The | means or
```

As easy as that. Now you can just create a new thing with the type using this:

```v
// Declaring the type
type StringOrInt = string | int // The | means or

x := StringOrInt(int{20})
```

As you may see, there is a pattern, this is it: `TYPE_THAT_YOU_DECLARED(TYPE_THAT_YOU_WANT{VALUE})

## What if I want to check if this Type has a specific value?

Sometimes, you can do some operation only on one of these types. This is why the [is keyword](../keywords/is) exists.
