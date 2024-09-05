import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getPostBySlug, getAllPosts, Post } from '../../lib/posts'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-green-500 font-mono">{post.title}</h1>
        <p className="text-green-400 mb-8">{post.date}</p>
        <div 
          className="text-green-300 prose prose-invert prose-green"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link href="/blog" passHref>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
          >
            &lt;Back_to_Blog /&gt;
          </motion.button>
        </Link>
      </motion.article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)
  return { props: { post } }
}
