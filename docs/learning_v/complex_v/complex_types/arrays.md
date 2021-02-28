---
id: "arrays"
title: "Arrays in V"
---

## What is an Array?

An Array is a collection of items of a specific type. 
This, simply put, means that you have a big list of items of the same type.

|   Integer 0 |   Integer 1 |   Integer 2 |   Integer 3 |   Integer 4 |   Integer 5 | ... |
| ----------- | :---------- | :---------- | :-----------| :-----------|  :---------- | :- |

As you may see, there are 2 very interesting things that you may have noticed

1. Arrays start at 0
2. Every item has an "index" (The number)

## Basic Array Knowledge

We can access an item in it using this index.

This is how we make an array

```v
mut nums := [1, 2, 3]
```
As simple as that. In this case, this is what this array looks like

|   Integer 0 with value 1 |   Integer 1 with value 2 |   Integer 2 with value 3 |
| ------------------------ | :----------------------- | -----------------------: |

Now, let us get it's value:

```v
mut nums := [1, 2, 3]
println(nums[1]) // Will Print 2
```
As you may see, if we want to reference a specific element in it, we need to put it's number into the brackets.
In this case, this is the visualization

|   Integer 0 with value 1 |   Integer 1 with value 2 that we are accessing |   Integer 2 with value 3 |
| ------------------------ | :--------------------------------------------- | -----------------------: |

We can also set it's value using this:
```v
mut nums := [1, 2, 3]
nums[1] = 5
println(nums[1]) // Will Print 5
```

We are now setting the element with index 1 to 5

|   Integer 0 with value 1 |   Integer 1 with value **5** that we are accessing |   Integer 2 with value 3 |
| ------------------------ | :----------------------------------------------------| -----------------------: |



## Basic Array Examples

```v
mut nums := [1, 2, 3]
println(nums) // "[1, 2, 3]"
println(nums[1]) // "2"
nums[1] = 5
println(nums) // "[1, 5, 3]"
println(nums.len) // "3"
nums = [] // The array is now empty
println(nums.len) // "0"
// Declare an empty array:
users := []int{}
```

:::tip 
The type of an array is determined by the type of the **first**  element
:::

:::caution
V's arrays are homogeneous (all elements **must** have the same type). This means that [1, "a"] will not compile
:::

### Getting the Length of an Array

You can get the length of an array using `array.len`

## Array Operations

### Adding to an Array

Want to **add** something to an array?
You can do it like this

```v
mut nums := [1, 2, 3]
nums << 4
println(nums) // "[1, 2, 3, 4]"
```

### Adding multiple items to an array

```v
nums << [5, 6, 7]
println(nums) // "[1, 2, 3, 4, 5, 6, 7]"
```

#### How do I check if an element is in an array?

Very easily

```v
mut names := ['John']
names << 'Peter'
names << 'Sam'
println('Alex' in names) // "false", because there is no Alex in Names
```

### The Operators

The usable operators are the following: 
- ARRAY << WHAT_YOU_WANT_TO_PUSH_INTO_IT
- the `in` operator. For checking if `value in array`

## Initializing

You can either let an array initialize itself (Just using `[val1, val2, val3, ...]`). Or by using it's initializer (`[]int{PROPERTIES}`)

### Initializing Array Properties

You can initialize properties such as the capacity of an array (`cap`), the length (`len`), and the default element (`init`)

As an example, this

```v
arr := []int{len: 5, init: -1}
```
Is short for `[-1, -1, -1, -1, -1]`

:::tip About Performance
Specifying the capacity (cap) of an array will improve the performance of insertions
:::

---

## Array Methods

### Printing the entire array

An Array can be easily printed using `println()`

#### Example

```v
nums := [1, 2, 3]
println(nums) // Will Print: [1, 2, 3]
```

### Copying / Cloning an Array

You can copy an array using the `.clone()` method.

#### Example

```v
nums := [1, 2, 3]
nums_copy := nums.clone() // Exact copy of nums
```

### Filtering / Mapping Arrays

Array's can be filtered very easily using the `.filter()` method, they can also be mapped using the `.map()` function.

#### Example

```v
nums := [1, 2, 3, 4, 5, 6]
even := nums.filter(it % 2 == 0)
println(even) // [2, 4, 6]
// filter can accept anonymous functions
even_fn := nums.filter(fn (x int) bool {
	return x % 2 == 0
})
println(even_fn)
words := ['hello', 'world']
upper := words.map(it.to_upper())
println(upper) // ['HELLO', 'WORLD']
// map can also accept anonymous functions
upper_fn := words.map(fn (w string) string {
	return w.to_upper()
})
println(upper_fn) // ['HELLO', 'WORLD']

```

:::tip About the Word it
`it` is an inbuilt variable
:::

### What does the Word it mean in V?

`it` is a builtin variable which refers to the element currently being processed in filter/map methods.

## Multidimensional Arrays

Until now, we have only worked with one dimensional arrays (One Straight Line), but now, what if we work with Arrays that look like this

:::note Reminder, this is a what traditional (one-dimensional) arrays look like
|   Integer 0 |   Integer 1 |   Integer 2 |
| ------------| :-----------| ----------: |
:::

|   Integer 0/0 |   Integer 1/0 |   Integer 2/0 |
| --------------| :-------------| ------------: |
|   Integer 0/1 |   Integer 1/1 |   Integer 2/1 |

As you may notice, now instead of each element having one index, it now has one. Just like in a coordinate system.

### 2D Array Example

```v
mut a := [][]int{len: 2, init: []int{len: 3}}
a[0][1] = 2
println(a) // [[0, 2, 0], [0, 0, 0]]
```
Here, you can see how you initialize a 2-Dimensional Array. Instead of using the usual initializer ([]int) you use two []. Like this [][]int

### 3D Array Example

As you may see, you can add as many dimensions as you want to.

```v
mut a := [][][]int{len: 2, init: [][]int{len: 3, init: []int{len: 2}}}
a[0][1][1] = 2
println(a) // [[[0, 0], [0, 2], [0, 0]], [[0, 0], [0, 0], [0, 0]]]
```

## Sorting Arrays

In many cases, you need to sort an array. Luckily, V has tooling built-in for this.

:::note About the variables a and b
These variables are there for providing a custom sorting condition
:::

```v
mut numbers := [1, 3, 2]
numbers.sort() // 1, 2, 3
numbers.sort(a > b) // 3, 2, 1
```
:::note What is a struct and why is it in the next example? 
Structs are explained in the [next chapter](structs)
:::

```v
struct User {
	age  int
	name string
}

mut users := [User{21, 'Bob'}, User{20, 'Zarkon'}, User{25, 'Alice'}]
users.sort(a.age < b.age) // sort by User.age int field
users.sort(a.name > b.name) // reverse sort by User.name string field
```

## Array Slices

Slices are partial arrays. They represent every element between two indices separated by a .. operator. The right-side index must be greater than or equal to the left side index.

If a right-side index is absent, it is assumed to be the array length. If a left-side index is absent, it is assumed to be 0.

### Example

```v
nums := [1, 2, 3, 4, 5]
println(nums[1..4]) // [2, 3, 4]
println(nums[..4]) // [1, 2, 3, 4]
println(nums[1..]) // [2, 3, 4, 5]
```
All array operations may be performed on slices. Slices can be pushed onto an array of the same type.

```v
array_1 := [3, 5, 4, 7, 6]
mut array_2 := [0, 1]
array_2 << array_1[..3]
println(array_2) // [0, 1, 3, 5, 4]
```

## Fixed Size Arrays

What if you want an array with a size that is not endless, like the usual array, but rather fixed. This is also easily done by using a number within the initialization call (`[]int{}`). 
As an example, if we want to create an array with size 4, we use 
```v
mut fixed := [3]int{} // Declaring a fixed array with 3 elements
```