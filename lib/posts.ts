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
        <li>Server-side rendering</li>
        <li>Automatic code splitting</li>
        <li>Simple page-based routing</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
      </ul>
      <p>To get started with Next.js, simply run the following command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      <p>This will create a new Next.js project with a basic structure and configuration.</p>
    `,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    date: "2023-04-22",
    excerpt: "Discover the power of utility-first CSS with Tailwind",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this post, we'll dive into some advanced Tailwind techniques and best practices.</p>
      <h2>Key Concepts</h2>
      <p>To master Tailwind CSS, it's important to understand these key concepts:</p>
      <ul>
        <li>Utility classes</li>
        <li>Responsive design</li>
        <li>Component extraction</li>
        <li>Customization</li>
      </ul>
      <p>Here's an example of a button styled with Tailwind CSS:</p>
      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click me
&lt;/button&gt;</code></pre>
      <p>By combining these utility classes, you can create complex designs without writing custom CSS.</p>
    `,
  },
  // Add more blog posts as needed
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
