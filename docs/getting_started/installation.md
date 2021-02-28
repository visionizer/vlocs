---
id: install-v
title: Installing V
---

V does, at the moment, not have any prebuilt binaries. Prebuilt binaries are executables that you can download. This means, that you will have to

## Install V from source

but do not worry, it doesn't take very long. 

:::tip What is "Installing from Source"?
Installing from source means that you will have to download the source code and then build (produce the executables) it.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### How to install it?

<Tabs
  groupId="operating-systems"
  defaultValue="win"
  values={[
    {label: 'Windows', value: 'win'},
    {label: 'MacOS / Linux / Other *nix Systems', value: 'other'},
    {label: 'Android (Graphical Apps Only)', value: 'android'},
  ]
}>
<TabItem value="win">

The following software is required to install V:
- Git
- A C Compiler like `tcc`, `gcc`, `clang` or `msvc`. Learn how to install one: [Installing a C Compiler](installing_a_c_compiler.md).

```bash
git clone https://github.com/vlang/v
cd v
make.bat -COMPILER
```
Replace -COMPILER with your compiler. E.g.: Use `make.bat -clang` if you want to use clang.

</TabItem>


<TabItem value="other">


The following software is required to install V:
- Git
- A C Compiler like `tcc`, `gcc` or `clang`. Learn how to install one: [Installing a C Compiler](installing_a_c_compiler.md).
- The `make` command.

```shell
git clone https://github.com/vlang/v
cd v
make
```

</TabItem>

<TabItem value="android">

Running V **graphical apps** on Android is possible via [vab](https://github.com/vlang/vab).

You need the following software:
- V Language
- Java JDK >= 8
- Android SDK
- Android NDK

Here's how to do it.

1. Install the dependencies using [vab](https://github.com/vlang/vab).
2. Connect your Android Device
3. Run using the following commands:

```bash
git clone https://github.com/vlang/vab && cd vab && v vab.v
./vab --device auto run /path/to/v/examples/sokol/particles
```

To learn more about vab, please visit it's [repository](https://github.com/vlang/vab)

</TabItem>

</Tabs>

Lastly, run `v symlink` to add it to the PATH