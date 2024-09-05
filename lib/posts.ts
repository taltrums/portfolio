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
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find(post => post.slug === slug);
  return post;
}
