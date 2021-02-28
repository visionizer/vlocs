---
id: "comments"
title: "Comments in V"
---

### Programs can get very confusing...

Especially, if you work with other people. This is why comments are important. They are there to explain what what is doing and why it is doing it.
There are several ways to declare comments in the V Programming Language.

---

### Single Line Comments

These are comments that are one line long. This is how you declare them:
```v
// Hello I am a funny little comment explaining everything important.
```
---

### Multi Line Comments

Sometimes, you need to explain a lot or something complicated. This is when these "multi-line comments" become very useful.
Instead of having to write this:
```v
// Hello
// Hello 2
// Hello 3
```
You can simple write
```v
/* Line 1
Line 2
Line 3
Line 4
*/
```

As you may see, the comment ranges from the first star to the last one.
Sometimes, it is better to write comments like this
```v
/* 
* Line 1
* Line 2
* Line 3
* Line 4
*/

```
as the star shows that you are still in a comment.

:::tip Writing good comments

Comments should not explain very obvious things. Use them to describe more complex processes.

:::