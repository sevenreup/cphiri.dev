---
title: Duwa first look
date: '2024-09-03T00:00:00Z'
modified: '2024-09-03T00:00:00Z'
description: 'This is the first look at Duwa, a Chichewa based programming language'
tags: 'talks,duwa'
---

# Introducing Duwa a Chichewa Programming Language

![Duwa Logo](/images/duwa.svg)

## What is Duwa?

Duwa 🌺 is my labor of love—a simple esoteric language (esolang) that blends traditional language with modern programming. As a native Chichewa speaker and a programmer, I wanted to create something unique that bridges the gap between my linguistic heritage and the tech world. Duwa uses Chichewa, a Bantu language spoken in Malawi, as its core, making it a one-of-a-kind tool for both learning and cultural preservation.

## The Purpose of Duwa

Creating Duwa has been driven by several key goals:

1. **Making Programming Accessible**: I wanted to make programming more approachable for Chichewa speakers by using familiar language constructs, helping them see coding as something within reach.
2. **Preserving and Promoting Chichewa**: In a field dominated by English, I felt it was important to carve out a space for Chichewa in the tech landscape, ensuring the language evolves with the times.
3. **Creating a Unique Educational Tool**: By designing Duwa, I aimed to offer a new way to teach programming, particularly to those who might feel alienated by traditional programming languages.

Duwa is a reflection of my passion for both programming and my native language, and I hope it serves as a welcoming platform for others in the Chichewa-speaking community.

## Setup and Installation

If you'd like to try out Duwa yourself, here's how to get started:

1. Head over to the Duwa GitHub releases page: [https://github.com/sevenreup/duwa/releases](https://github.com/sevenreup/duwa/releases)
2. Download the binary that matches your operating system from the latest release.
3. Run Duwa programs using the binary (note that the binary name might vary):
   ```bash
   ./duwa -f path/to/your/program.duwa
   ```

## Basic Syntax

Let me show you some of the basics of Duwa.

### Hello World

```js
ndondomeko pano() {
    lemba("Moni Dziko");
}

pano();
```

In this example:

- `ndondomeko` is how I decided to declare a function in Duwa.
- `lemba`, which means "write" in Chichewa, outputs text.
- The program simply prints "Moni Dziko" ("Hello World") to the screen.

### Variables

Duwa supports a variety of variable types:

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

I chose to use `ngati` for if statements and `kapena` for else, making the logic flow more naturally in Chichewa:

```js
// If statement
ngati(yoyamba > yachiwiri) {
    // panga zinthu (do something)
}

// If-else statement
ngati(yoyamba > yachiwiri) {
    // panga zinthu
} kapena {
    // panga zinthu
}
```

### Loops

Duwa also supports both while and for loops:

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

To give you a taste of what Duwa can do, here’s a simple linear search algorithm.
Create new file called `Kufufuza.duwa` in your favorite editor

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
        lembanzr("Linear Search: Element at index " + result);
    }
}

doLinearSearch();
```

Run the program by running

```bash
duwa -f Kufufuza.duwa
```

You will get the index of 10 printed out on your console

### Breaking Down the Code

1. **`ndondomeko kufufuza(arr, x)`**: This function performs the linear search. "Kufufuza" means "to search" in Chichewa.
2. The **`za` loop** iterates through the array, checking for the target value.
3. **`ngati (arr[i] == x)`**: If the element is found, the function returns its index.
4. If the element is not found, the function returns -1.
5. **`ndondomeko doLinearSearch()`**: This function sets up the test case and calls the search function.
6. The result is printed using **`lembanzr`**, which I chose to mean "write line."

This example gives a glimpse of how Duwa handles algorithms while staying true to the Chichewa language.

## Current State of Duwa

Duwa is still a work in progress, and there are some words and constructs that haven't been fully translated into Chichewa yet. I'm actively working on these translations, and I plan to have everything ready by the time Duwa reaches version 1.0.

Even in its current state, Duwa is fully functional, and I'm excited to see how it grows as I continue to refine it. I’d love to hear your feedback as you experiment with it!

Bonus: Created a simple vscode extension for adding support for Duwa to vscode, for now you will only get syntax highlighting but working on adding more features. Search for `Duwa Language` in the vscode extension tab, or download [here](https://marketplace.visualstudio.com/items?itemName=sevenreup.duwa-lang)

## Future Development

Looking ahead, I have some ambitious plans for Duwa:

- Expanding the language features to make it even more powerful
- Building a standard library to support more complex programs
- Creating learning resources to help others get started with Duwa
- Encouraging community contributions to enrich the language and its ecosystem

Duwa is built entirely from scratch in Golang, leveraging its strengths to create a fast, efficient, and reliable programming environment. This has been a challenging but rewarding journey, and I’m excited to see where it leads.

## Conclusion

Whether you're a Chichewa speaker curious about coding or a programming enthusiast looking for something different, I hope Duwa inspires you as much as it has inspired me. This journey is just beginning, and I’m thrilled to share it with you. By making Chichewa a part of the coding world, Duwa opens up new possibilities for education, cultural preservation, and creative expression.

Check out the [github](https://github.com/sevenreup/duwa).
Check out the [docs](https://www.duwa.cphiri.dev/) (Still a work inprogress)
