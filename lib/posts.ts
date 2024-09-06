export interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2023-04-15",
    excerpt: "Learn how to build modern web applications with Next.js",
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we'll explore the basics of Next.js and how to get started with your first project.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several benefits over traditional React applications:</p>
      <ul>
        <li>Server-side rendering for improved performance and SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple page-based routing</li>
        <li>API routes for building backend functionality</li>
        <li>Built-in CSS support for easy styling</li>
        <li>Static site generation for blazing-fast websites</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>To get started with Next.js, follow these steps:</p>
      <ol>
        <li>Ensure you have Node.js installed on your machine</li>
        <li>Open your terminal and run the following command:</li>
      </ol>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      <p>This will create a new Next.js project with a basic structure and configuration.</p>
      
      <h2>Project Structure</h2>
      <p>After creating your project, you'll see the following folder structure:</p>
      <pre><code>
my-next-app/
  ├── pages/
  ├── public/
  ├── styles/
  ├── package.json
  └── next.config.js
      </code></pre>
      <p>The <code>pages</code> directory is where you'll create your application's routes and React components.</p>
      
      <h2>Creating Your First Page</h2>
      <p>To create a new page, simply add a new file to the <code>pages</code> directory. For example, create a file called <code>about.js</code> with the following content:</p>
      <pre><code>
export default function About() {
  return (
    &lt;div&gt;
      &lt;h1&gt;About Us&lt;/h1&gt;
      &lt;p&gt;Welcome to our Next.js website!&lt;/p&gt;
    &lt;/div&gt;
  )
}
      </code></pre>
      <p>Now you can access this page at <code>http://localhost:3000/about</code>.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful and flexible framework for building modern web applications. With its built-in features and optimizations, you can focus on creating great user experiences without worrying about the underlying complexities. Start exploring Next.js today and take your web development skills to the next level!</p>
    `,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    date: "2023-04-22",
    excerpt: "Discover the power of utility-first CSS with Tailwind",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this post, we'll dive into some advanced Tailwind techniques and best practices to help you master this powerful tool.</p>
      
      <h2>Key Concepts</h2>
      <p>To master Tailwind CSS, it's important to understand these key concepts:</p>
      <ul>
        <li>Utility classes: Pre-defined CSS classes for common styles</li>
        <li>Responsive design: Built-in breakpoint prefixes for responsive layouts</li>
        <li>Component extraction: Creating reusable components from utility combinations</li>
        <li>Customization: Tailoring Tailwind to fit your project's needs</li>
      </ul>
      
      <h2>Utility Classes in Action</h2>
      <p>Here's an example of a button styled with Tailwind CSS:</p>
      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click me
&lt;/button&gt;</code></pre>
      <p>By combining these utility classes, you can create complex designs without writing custom CSS.</p>
      
      <h2>Responsive Design</h2>
      <p>Tailwind makes it easy to create responsive designs using breakpoint prefixes:</p>
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
  Responsive column
&lt;/div&gt;</code></pre>
      <p>This div will be full width on mobile, half width on medium screens, and one-third width on large screens.</p>
      
      <h2>Component Extraction</h2>
      <p>As your project grows, you may want to extract commonly used combinations of utilities into reusable components. Here's an example using React:</p>
      <pre><code>
function Button({ children, onClick }) {
  return (
    &lt;button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  )
}
      </code></pre>
      <p>Now you can reuse this button component throughout your application.</p>
      
      <h2>Customization</h2>
      <p>Tailwind can be customized to fit your project's needs. In your <code>tailwind.config.js</code> file, you can add custom colors, fonts, and more:</p>
      <pre><code>
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1234ab',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
      </code></pre>
      
      <h2>Performance Optimization</h2>
      <p>Tailwind can generate a lot of CSS, but you can optimize it for production:</p>
      <ol>
        <li>Use PurgeCSS to remove unused styles</li>
        <li>Enable JIT (Just-In-Time) mode for faster builds and smaller CSS files</li>
      </ol>
      <p>Configure these in your <code>tailwind.config.js</code> and build process.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering Tailwind CSS allows you to build beautiful, responsive interfaces quickly and efficiently. By understanding its core concepts and advanced techniques, you can leverage the full power of this utility-first framework in your projects. Keep experimenting and building to become a Tailwind CSS expert!</p>
    `,
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    date: "2023-05-10",
    excerpt: "Dive into the world of React Hooks and learn how to write more efficient functional components",
    content: `
      <p>React Hooks have revolutionized the way we write React components. In this post, we'll explore the most commonly used hooks and how they can simplify your React code.</p>

      <h2>What are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class.</p>

      <h2>useState: Managing State in Functional Components</h2>
      <p>The useState hook allows you to add state to functional components. Here's a simple example:</p>
      <pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h2>useEffect: Handling Side Effects</h2>
      <p>The useEffect hook lets you perform side effects in function components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      <pre><code>
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h2>Custom Hooks: Reusing Stateful Logic</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions. Here's a simple custom hook for managing form inputs:</p>
      <pre><code>
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }

  return [value, handleChange];
}

// Usage in a component
function NameForm() {
  const [name, setName] = useInput('');
  
  return (
    &lt;input value={name} onChange={setName} /&gt;
  );
}
      </code></pre>

      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct way to use React features in your components. By mastering hooks, you can write more concise and reusable React code. Keep exploring and experimenting with different hooks to unlock their full potential in your projects!</p>
    `,
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    date: "2023-05-25",
    excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development",
    content: `
      <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. In this post, we'll introduce you to TypeScript and its key features.</p>

      <h2>What is TypeScript?</h2>
      <p>TypeScript adds optional static typing, classes, and modules to JavaScript, making it easier to develop and maintain large-scale applications.</p>

      <h2>Key Features of TypeScript</h2>
      <ul>
        <li>Static typing</li>
        <li>Object-oriented programming with classes</li>
        <li>Improved tooling and IDE support</li>
        <li>ECMAScript features from future versions</li>
      </ul>

      <h2>Basic Types in TypeScript</h2>
      <p>TypeScript includes several basic types:</p>
      <pre><code>
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10]; // Tuple
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
      </code></pre>

      <h2>Interfaces</h2>
      <p>Interfaces are a powerful way to define contracts within your code:</p>
      <pre><code>
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
      </code></pre>

      <h2>Classes</h2>
      <p>TypeScript supports object-oriented programming with classes:</p>
      <pre><code>
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
      </code></pre>

      <h2>Conclusion</h2>
      <p>TypeScript offers many benefits for JavaScript developers, including better tooling, clearer code intent, and fewer runtime errors. As you continue to explore TypeScript, you'll discover how it can significantly improve your development workflow and code quality.</p>
    `,
  },
  {
    id: 5,
    title: "Asynchronous JavaScript: Promises and Async/Await",
    slug: "asynchronous-javascript-promises-async-await",
    date: "2023-06-05",
    excerpt: "Master asynchronous programming in JavaScript with Promises and async/await",
    content: `
      <p>Asynchronous programming is a crucial part of JavaScript, especially for handling operations like API calls and file I/O. In this post, we'll explore Promises and the async/await syntax for managing asynchronous code.</p>

      <h2>Understanding Promises</h2>
      <p>Promises provide a way to handle asynchronous operations without getting stuck in callback hell. A Promise represents a value that may not be available immediately but will be resolved at some point in the future.</p>

      <h3>Creating a Promise</h3>
      <pre><code>
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  setTimeout(() => {
    resolve("Operation completed successfully");
    // or
    // reject("Operation failed");
  }, 1000);
});
      </code></pre>

      <h3>Using a Promise</h3>
      <pre><code>
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
      </code></pre>

      <h2>Chaining Promises</h2>
      <p>Promises can be chained to handle a sequence of asynchronous operations:</p>
      <pre><code>
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
      </code></pre>

      <h2>Async/Await</h2>
      <p>The async/await syntax provides a more synchronous-looking way to work with Promises, making asynchronous code easier to read and write.</p>

      <h3>Basic Usage</h3>
      <pre><code>
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
      </code></pre>

      <h2>Parallel Execution with Promise.all</h2>
      <p>When you need to run multiple asynchronous operations in parallel, you can use Promise.all:</p>
      <pre><code>
async function fetchMultipleData() {
  try {
    const [users, posts] = await Promise.all([
      fetch('https://api.example.com/users').then(res => res.json()),
      fetch('https://api.example.com/posts').then(res => res.json())
    ]);
    console.log('Users:', users);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleData();
      </code></pre>

      <h2>Conclusion</h2>
      <p>Promises and async/await are powerful tools for managing asynchronous operations in JavaScript. By mastering these concepts, you can write cleaner, more efficient code for handling complex asynchronous workflows. Keep practicing and exploring these techniques to become proficient in asynchronous JavaScript programming!</p>
    `,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find(post => post.slug === slug);
  return post;
}
