---
title: Duwa first look
date: '2024-08-29'
description: 'This is the first look at Duwa, a chewa based programming language'
tags: 'talks,duwa'
---

# Creating a Chichewa Programming Language

![Duwa Logo](/images/duwa.svg)

## What is Duwa?

Duwa 🌺 is a simple Chewa esoteric language (esolang) that bridges traditional language and modern programming. It uses Chichewa, a Bantu language, for its keywords, making it a unique tool in the world of programming languages.

Interestingly, Duwa is written in Go. Why? As the creator puts it, "Self torture, had to write it from scratch." This humorous note highlights the challenges and dedication involved in creating a new programming language from the ground up.

## The Purpose of Duwa

The creation of Duwa serves several important purposes:

1. Making programming more accessible to Chichewa speakers
2. Preserving and promoting Chichewa in the tech world
3. Providing a unique educational tool for teaching programming concepts

By using familiar words and concepts from Chichewa, Duwa aims to lower the barrier to entry for programming among Chichewa-speaking communities.

## Setup and Installation
Before we dive into coding with Duwa, let's go through the setup process:
- Visit the Duwa GitHub releases page: [https://github.com/sevenreup/duwa/releases](https://github.com/sevenreup/duwa/releases)
- Download the appropriate binary for your operating system from the latest release.
- You can now run Duwa programs using the binary (The binary might be differently named):
```bash
./duwa -f path/to/your/program.duwa
```
## Basic Syntax

Let's explore some of the basic syntax in Duwa:

### Hello World

```js
ndondomeko pano() {
    lemba("Moni Dziko");
}

pano();
```

In this example:

- `ndondomeko` declares a function
- `lemba` is the Chichewa word for "write" and is used to output text
- The program outputs "Moni Dziko" (Hello World)

### Variables

Duwa supports various types of variables:

```js
// Numbers
nambala yoyamba = 1;
nambala yachiwiri = 2;

nambala yomaliza = yoyamba + yachiwiri;

// Strings
mawu dzina = "Maliko";

// Maps
mgwirizano munthu = {
    "dzina": "Soma",
    "zaka": 3
}

// Other types like boolean are not strongly typed
```

### Conditional Statements

Duwa uses `ngati` for if statements and `kapena` for else:

```js
// if
ngati(yoyamba > yachiwiri) {
    // panga zinthu
}

// if else
ngati(yoyamba > yachiwiri) {
    // panga zinthu
} kapena {
    // panga zinthu
}
```

### Loops

Duwa supports both while and for loops:

```js
// While loop
pamene(yoyamba > 2) {
    // panga zinthu
    yoyamba++
}

// For loop
za(nambala x = 0; x > 5; x++) {
    // panga zinthu
}
```

## Let's Code: Linear Search Example

To demonstrate Duwa in action, let's look at a simple linear search program:

```js
ndondomeko kufufuza(arr, x) {
    za(nambala i = 0; i < arr.length(); i++) {
        ngati (arr[i] == x) {
            bweza i;
        }
    }
    bweza -1;
}


ndondomeko doLinearSearch() {
    nambala[] arr = [2, 3, 4, 10, 40];
    nambala x = 10;

    nambala result = kufufuza(arr, x);
    ngati (result == -1) {
        lembanzr("Linear Search: Element is not present in array");
    } kapena {
        lembanzr("Linear Search: Element at index "+ result);
    }
}


doLinearSearch();
```

Let's break down this program:

1. `ndondomeko kufufuza(arr, x)`: This function performs the linear search. 'Kufufuza' means 'to search' in Chichewa.

2. The `za` loop (equivalent to a 'for' loop) iterates through the array.

3. `ngati (arr[i] == x)`: If the element is found, the function returns its index.

4. If the loop completes without finding the element, the function returns -1.

5. `ndondomeko doLinearSearch()`: This function sets up the test case and calls the search function.

6. The result is then printed using `lembanzr`, which likely means 'write line' in Chichewa.

This example showcases how Duwa can be used to implement common algorithms while using Chichewa keywords, making it more intuitive for Chichewa speakers to understand and learn programming concepts.

## Potential Applications

Duwa has several potential applications:

1. Education: It can be used to teach programming concepts to Chichewa speakers, making coding more accessible.
2. Cultural preservation: By encouraging the use of Chichewa in tech, it helps preserve and promote the language.
3. Bridging traditional language and modern programming: It creates a unique intersection between linguistic heritage and cutting-edge technology.
4. Research: Duwa could be valuable for research in both computer science and linguistics.

## Future Development

The future of Duwa looks promising, with plans for:

- Expanding language features
- Building a standard library
- Creating learning resources
- Inviting community contributions

## Conclusion

Duwa represents a unique approach to programming languages. By using Chichewa, it not only serves as an educational and cultural tool but also opens up new possibilities for exploration and contribution in the world of esoteric programming languages.

As programming continues to shape our world, languages like Duwa remind us of the importance of accessibility and cultural representation in technology. Whether you're a Chichewa speaker looking to learn programming or a language enthusiast interested in unique coding concepts, Duwa offers an intriguing platform for exploration and learning.
