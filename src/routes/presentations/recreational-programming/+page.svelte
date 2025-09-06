<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  // Import Reveal.js from npm package
  import 'reveal.js/dist/reveal.css';
  import 'reveal.js/dist/theme/black.css';

  let revealContainer: HTMLDivElement;

  onMount(() => {
    let deck: any;
    let handleResize: () => void;
    
    const initializeReveal = async () => {
      if (browser) {
        // Import Reveal.js and initialize
        // @ts-ignore
        const { default: Reveal } = await import('reveal.js');
        
        // Mobile-optimized configuration
        const config = {
          // Core settings
          hash: true,
          controls: true,
          progress: true,
          center: true,
          touch: true,
          loop: false,
          
          // Mobile-optimized dimensions
          width: '100%',
          height: '100%',
          margin: 0.02,
          minScale: 0.2,
          maxScale: 3.0,
          
          // Responsive behavior
          embedded: false,
          
          // Mobile-specific settings
          controlsLayout: 'bottom-right',
          controlsBackArrows: 'faded',
          
          // Transitions
          transition: 'slide',
          transitionSpeed: 'fast',
          backgroundTransition: 'fade',
          
          // View distance for performance
          viewDistance: 3,
          mobileViewDistance: 2,
          
          // Disable problematic features on mobile
          autoSlide: 0,
          autoSlideStoppable: true,
          mouseWheel: false,
          hideInactiveCursor: true,
          hideCursorTime: 3000
        };

        deck = new Reveal(revealContainer, config);
        await deck.initialize();

        // Force layout recalculation for mobile
        handleResize = () => {
          setTimeout(() => {
            deck.layout();
          }, 100);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
      }
    };
    
    initializeReveal();

    return () => {
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      }
      if (deck) {
        deck.destroy();
      }
      
      // Clean up reveal.js classes from HTML and body elements
      document.documentElement.classList.remove('reveal-full-page');
      document.body.classList.remove('reveal-viewport');
    };
  });
</script>

<svelte:head>
  <title>Recreational Programming - Christopher Phiri</title>
  <meta name="description" content="A presentation about rediscovering the joy of programming through recreational coding" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

<div class="reveal" bind:this={revealContainer}>
  <div class="slides">
    
    <!-- Title Slide -->
    <section>
      <h1>Recreational Programming</h1>
      <p class="subtitle">You guys are getting paid?</p>
    </section>

    <!-- Opening Question -->
    <section>
      <h2>Show of hands:</h2>
      <p class="big-question">How many of you learned programming because it was fun?</p>
    </section>

    <!-- Part 1: What is Recreational Programming? -->
    <section>
      <h1>Part 1</h1>
      <h2>What is Recreational Programming?</h2>
    </section>

    <!-- Definition -->
    <section>
      <h2>Definition</h2>
      <div class="center-content">
        <p class="definition">Programming for the joy of programming itself - not for work, not for money, not for external requirements.</p>
      </div>
    </section>

    <!-- What it looks like -->
    <section>
      <h2>What it looks like:</h2>
      <ul>
        <li>Building things because you're curious how they work</li>
        <li>Exploring new languages just to see what they feel like</li>
        <li>Solving problems that only exist in your head</li>
        <li>Creating tools for problems you don't actually have</li>
        <li>Writing code that makes you smile</li>
      </ul>
    </section>

    <!-- What it's NOT -->
    <section>
      <h2>What it's NOT:</h2>
      <ul>
        <li>Side hustles or potential startups</li>
        <li>Skill building for career advancement</li>
        <li>Following tutorials step-by-step</li>
        <li>Grinding through coding challenges for interviews</li>
        <li>Building what others expect you to build</li>
      </ul>
      <div class="takeaway">
        <strong>The key distinction:</strong> Internal motivation vs. external pressure
      </div>
    </section>

    <!-- Why it matters -->
    <section>
      <h2>Why it matters:</h2>
      <ul>
        <li>Prevents burnout by reconnecting with intrinsic motivation</li>
        <li>Develops intuition through low-stakes exploration</li>
        <li>Maintains long-term passion for the craft</li>
        <li>Often leads to unexpected breakthroughs and learning</li>
      </ul>
    </section>

    <!-- Part 2 -->
    <section>
      <h1>Part 2</h1>
      <h2>The Recreational Programming Spectrum</h2>
    </section>

    <!-- Style 1: Live Explorer -->
    <section>
      <h2>Style 1: The Live Explorer</h2>
      <ul>
        <li>Builds in public through streams or blogs</li>
        <li>Shows the messy process: dead ends, bugs, restarts</li>
        <li>Community becomes accountability and energy source</li>
        <li>Projects range from practical tools to pure experiments</li>
      </ul>
    </section>

    <!-- Style 2: Deep Diver -->
    <section>
      <h2>Style 2: The Deep Diver</h2>
      <ul>
        <li>Obsesses over understanding how things really work</li>
        <li>Builds toy versions of complex systems</li>
        <li>Values learning over shipping</li>
        <li>Often has multiple "educational" implementations</li>
      </ul>
    </section>

    <!-- Style 3: Creative Technologist -->
    <section>
      <h2>Style 3: The Creative Technologist</h2>
      <ul>
        <li>Uses code as artistic medium</li>
        <li>Generative art, music synthesis, interactive installations</li>
        <li>Technology serves creative vision</li>
        <li>Often blends programming with other disciplines</li>
      </ul>
    </section>

    <!-- Style 4: Problem Solver -->
    <section>
      <h2>Style 4: The Problem Solver</h2>
      <ul>
        <li>Scratches personal itches with code</li>
        <li>Tools that solve tiny annoying problems</li>
        <li>"Good enough" solutions that work for them</li>
        <li>Often accidentally builds useful things</li>
      </ul>
    </section>

    <!-- Style 5: Language Explorer -->
    <section>
      <h2>Style 5: The Language Explorer</h2>
      <ul>
        <li>Constantly trying new languages and paradigms</li>
        <li>Implements same concepts across different languages</li>
        <li>Drawn to unusual or experimental languages</li>
        <li>Code as intellectual curiosity</li>
      </ul>
    </section>

    <!-- Part 3 -->
    <section>
      <h1>Part 3</h1>
      <h2>Common Patterns Across All Styles</h2>
    </section>

    <!-- Permission to Build Useless Things -->
    <section>
      <h2>Permission to Build "Useless" Things</h2>
      <ul>
        <li>No business case required</li>
        <li>Curiosity is sufficient justification</li>
        <li>Failed experiments still teach valuable lessons</li>
      </ul>
      <div class="takeaway">
        <strong>Key insight:</strong> ROI doesn't apply to recreational programming
      </div>
    </section>

    <!-- Follow Energy -->
    <section>
      <h2>Follow Energy, Not Plans</h2>
      <ul>
        <li>Switch projects when excitement fades</li>
        <li>Multiple abandoned repos are exploration, not failure</li>
        <li>Boredom is data about what interests you</li>
      </ul>
      <div class="takeaway">
        <strong>Key insight:</strong> Boredom is data, not defeat
      </div>
    </section>

    <!-- Document Journey -->
    <section>
      <h2>Document the Journey</h2>
      <ul>
        <li>Share process, not just results</li>
        <li>Teaching forces deeper understanding</li>
        <li>Creates connection with others on similar paths</li>
      </ul>
      <div class="takeaway">
        <strong>Key insight:</strong> Narrate your decisions
      </div>
    </section>

    <!-- Learning Process -->
    <section>
      <h2>Embrace the Learning Process</h2>
      <ul>
        <li>Beginner's mind in new domains</li>
        <li>Comfortable with not knowing</li>
        <li>Process over product</li>
      </ul>
      <div class="takeaway">
        <strong>Key insight:</strong> Progress over perfection
      </div>
    </section>

    <!-- Part 4 -->
    <section>
      <h1>Part 4</h1>
      <h2>Your Personal Programming Playground</h2>
    </section>

    <!-- Environment -->
    <section>
      <h2>The Environment</h2>
      <ul>
        <li>Dedicated "experiments" folder/repo</li>
        <li>No production concerns: minimal setup, no CI/CD pressure</li>
        <li>Quick project initialization scripts</li>
        <li>Version control optional</li>
      </ul>
    </section>

    <!-- Approaches -->
    <section>
      <h2>Approaches You Can Try</h2>
      <ul>
        <li><span class="highlight">Weekly Experiments</span> (2-4 hours exploring one new thing)</li>
        <li><span class="highlight">Scratch-Built Challenges</span> (Build toy versions of tools you use)</li>
        <li><span class="highlight">Itch-Scratching Projects</span> (Solve your own annoying problems)</li>
        <li><span class="highlight">Teaching Projects</span> (Build something while explaining it)</li>
        <li><span class="highlight">Cross-Language Challenges</span> (Same problem, different languages)</li>
      </ul>
    </section>

    <!-- Mindset Shifts -->
    <section>
      <h2>The Mindset Shifts</h2>
      <ul>
        <li><span class="highlight">"What if..."</span> instead of <span class="highlight">"I should..."</span></li>
        <li>Progress over perfection</li>
        <li>Learning over shipping</li>
        <li>Curiosity over productivity</li>
      </ul>
    </section>

    <!-- Part 5 -->
    <section>
      <h1>Part 5</h1>
      <h2>Real Examples in the Wild</h2>
    </section>

    <!-- Local Examples -->
    <section>
      <h2>Zikani Nyirenda - <em>The Practical Experimenter</em></h2>
      <ul>
        <li>Creates random but useful tools: browser automation, file organizers, Git utilities</li>
        <li>Experiments across Go, Rust, Python, Vue, and React</li>
        <li>"What small problem can I solve today?" approach to coding</li>
        <li>Perfect example of scratching personal itches through code</li>
      </ul>
      <p class="text-center text-primary mt-4">
        <a href="https://github.com/zikani03" target="_blank" class="underline">github.com/zikani03</a>
      </p>
    </section>

    <section>
      <h2>Jeremiah Chienda - <em>The Full-Stack Experimenter</em></h2>
      <ul>
        <li>Explores different architectural patterns and frameworks</li>
        <li>Builds tools that solve real problems while learning new technologies</li>
        <li>Shows how recreational programming can span the entire tech stack</li>
      </ul>
      <p class="text-center text-primary mt-4">
        <a href="https://github.com/liwoo" target="_blank" class="underline">github.com/liwoo</a>
      </p>
    </section>

    <!-- Global Examples -->
    <section>
      <h2>Tsoding Daily - <em>The Live Explorer</em></h2>
      <ul>
        <li>Streams 4+ hours daily building random projects from scratch</li>
        <li>Built his own text editors, programming languages, ray tracers</li>
        <li>Shows complete process including failures and debugging</li>
        <li>"Let's see what happens if..." approach to everything</li>
      </ul>
    </section>

    <section>
      <h2>ThePrimeagen - <em>The High-Energy Problem Solver</em></h2>
      <ul>
        <li>Creates CLI tools and Neovim plugins for personal workflow optimization</li>
        <li>Infectious enthusiasm for dev tools and performance</li>
        <li>Reacts to and critiques other developers' code/approaches</li>
        <li>Makes optimization and tooling feel like extreme sports</li>
      </ul>
    </section>

    <section>
      <h2>Casey Muratori - <em>The Systems Deep Diver</em></h2>
      <ul>
        <li>Handmade Hero: Building a complete game from scratch on stream</li>
        <li>Explains every single line of code and system design decision</li>
        <li>No libraries, understanding everything from first principles</li>
        <li>Demonstrates that you can build modern software without frameworks</li>
      </ul>
    </section>

    <section>
      <h2>Ben Eater - <em>The Educational Builder</em></h2>
      <ul>
        <li>Builds computers on breadboards, explains every component</li>
        <li>Creates video series on how CPUs, memory, and networks actually work</li>
        <li>Takes months to build what you could buy for $5</li>
        <li>Makes hardware fundamentals accessible and fascinating</li>
      </ul>
    </section>

    <section>
      <h2>Dan Luu - <em>The Deep Technical Investigator</em></h2>
      <ul>
        <li>Writes detailed blog posts investigating performance mysteries</li>
        <li>Benchmarks everything: keyboards, terminals, programming languages</li>
        <li>Turns curiosity about "why is X slow?" into multi-thousand word research</li>
        <li>Demonstrates how recreational investigation can uncover industry-wide issues</li>
      </ul>
      <p class="small center-content"><strong>Each represents a different path back to programming joy</strong></p>
    </section>

    <!-- Closing Challenge -->
    <section>
      <h2>Closing Challenge</h2>
      <p>Pick one experiment:</p>
      <ol>
        <li>Build the worst possible version of a tool you use daily</li>
        <li>Spend 2 hours with a language you've been curious about</li>
        <li>Document yourself solving a small problem</li>
        <li>Fork an interesting project and mess with it</li>
        <li>Try live coding or streaming your process</li>
      </ol>
      <div class="takeaway">
        <strong>The only rule:</strong> Stop if it stops being fun.
      </div>
    </section>

    <!-- Final Thought -->
    <section>
      <h2>Final Thought</h2>
      <div class="center-content">
        <p class="final-quote">"The goal isn't to become any of these programmers. It's to remember why you started coding and keep that curiosity alive alongside your career."</p>
      </div>
    </section>

  </div>
</div>

<style>
  /* Mobile-first responsive design */
  .reveal {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  /* Typography scaling - smaller on mobile - force override theme */
  :global(.reveal h1) {
    font-size: clamp(1.2rem, 4vw, 3rem) !important;
    margin-bottom: 1rem !important;
  }

  :global(.reveal h2) {
    font-size: clamp(1rem, 3.5vw, 2rem) !important;
    margin-bottom: 0.8rem !important;
  }

  :global(.reveal p) {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem) !important;
    line-height: 1.4 !important;
    margin-bottom: 1rem !important;
  }

  :global(.reveal li) {
    font-size: clamp(0.8rem, 2.2vw, 1rem) !important;
    line-height: 1.4 !important;
    margin: 0.3rem 0 !important;
  }

  /* Custom classes - force override theme styles */
  :global(.reveal .subtitle) {
    font-size: clamp(1rem, 3vw, 1.5rem) !important;
    color: #888 !important;
    text-align: center !important;
  }

  :global(.reveal .big-question) {
    font-size: clamp(1.1rem, 3.5vw, 1.8rem) !important;
    font-weight: bold !important;
    text-align: center !important;
    color: #42affa !important;
  }

  :global(.reveal .definition) {
    font-size: clamp(1rem, 3vw, 1.4rem) !important;
    font-style: italic !important;
    text-align: center !important;
    color: #ccc !important;
    background: rgba(66, 175, 250, 0.1) !important;
    padding: 1rem !important;
    border-radius: 8px !important;
  }

  :global(.reveal .center-content) {
    text-align: center !important;
  }

  :global(.reveal .highlight) {
    color: #42affa !important;
    font-weight: bold !important;
  }

  :global(.reveal .takeaway) {
    background: rgba(66, 175, 250, 0.1) !important;
    padding: clamp(0.8rem, 2vw, 1.5rem) !important;
    border-left: 4px solid #42affa !important;
    margin: 1rem 0 !important;
    font-size: clamp(0.85rem, 2.2vw, 1.1rem) !important;
    color: inherit !important;
  }

  :global(.reveal .final-quote) {
    font-size: clamp(1rem, 3vw, 1.4rem) !important;
    font-style: italic !important;
    color: #42affa !important;
    background: rgba(66, 175, 250, 0.1) !important;
    padding: 2rem !important;
    border-radius: 8px !important;
  }
  :global(nav) {
    color: var(--r-heading-color) !important;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    :global(.reveal .slides section) {
      padding: 1rem !important;
    }

    :global(.reveal ul, .reveal ol) {
      margin-left: 1rem;
    }

    .takeaway {
      padding: 0.8rem;
      margin: 0.8rem 0;
    }

  }

  @media (max-width: 480px) {
    :global(.reveal .slides section) {
      padding: 0.5rem !important;
    }

    :global(.reveal ul, .reveal ol) {
      margin-left: 0.5rem;
    }

    .takeaway {
      padding: 0.5rem;
      margin: 0.5rem 0;
    }

  }

  /* Controls and UI */
  @media (max-width: 768px) {
    :global(.reveal .controls) {
      bottom: 1rem !important;
      right: 1rem !important;
    }

    :global(.reveal .progress) {
      height: 3px !important;
    }
  }
</style>