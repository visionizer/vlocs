---
id: "unions"
title: "Unions in V"
---

:::danger Do not use Unions
They can only be accessed in [unsafe](../keywords/unsafe) code blocks (Unchecked Code Blocks). Only here for completion
:::

## What is a Union in V?

A Union is an extension of a struct. As simple as that.

```v
struct Rgba32_Component {
	r byte
	g byte
	b byte
	a byte
}

union Rgba32 {
	Rgba32_Component
	value u32
}

clr1 := Rgba32{
	value: 0x008811FF
}

clr2 := Rgba32{
	Rgba32_Component: {
		a: 128
	}
}

sz := sizeof(Rgba32)
unsafe {
	println('Size: ${sz}B,clr1.b: $clr1.b,clr2.b: $clr2.b')
}
```

Output: `Size: 4B, clr1.b: 136, clr2.b: 0`

Union member access must be performed in an unsafe block.