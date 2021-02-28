---
id: "error-handling"
title: "Error Handling in V"
---

## How do I handle errors?

One of the best ways to handle errors is using the [or keyword](keywords/or)
This will either get one or do the other.

For example, let's say you want to have some error handling whenever you try to access a key in a [map](complex_types/maps) that does not exist.

### Check if a map key does not exist

```v
mm := map[string]int{}
val := mm['bad_key'] or { panic('key not found') 
```

Or

### What do you do when you want to check for an OutOfBounds in Arrays?

Then, you can do this:
```v
arr := [1, 2, 3]
large_index := 999
val := arr[large_index] or { panic('out of bounds') }
```