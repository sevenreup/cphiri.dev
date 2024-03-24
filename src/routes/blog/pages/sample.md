---
title: Post One
date: '2021-12-14'
description: 'This is a description of the blog post'
tags: 'js,android'
---

# Hello world

This is a sample blog post to test stuff up `chill`.

## Rust

```rust
println!("Made it here!");
```

## JavaScript

```javascript {1-1}
console.log('Made it here!');
```

```svelte {5-7,10-11}
    <script context="module" lang="ts">
        export const prerender = true;
    </script>
    
    <script lang="ts">
        import Counter from '$lib/Counter.svelte';
    </script>
    
    <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
    </svelte:head>
    
    <section>
    <h1>
        <div class="welcome">
        <picture>
            <source srcset="svelte-welcome.webp" type="image/webp" />
            <img src="svelte-welcome.png" alt="Welcome" />
        </picture>
        </div>
    
        to your new<br />SvelteKit app
    </h1>
    
    <h2>
        try editing <strong>src/routes/index.svelte</strong>
    </h2>
    
    <Counter />
    </section>
    
    <style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    
    h1 {
        width: 100%;
    }
    
    .welcome {
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }
    
    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
    </style>
```