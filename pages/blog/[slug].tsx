import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getPostBySlug, getAllPosts, Post } from '../../lib/posts'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface Comment {
  id: number;
  text: string;
}

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  const [comments, setComments] = useState<Comment[]>([]) // Explicitly type the comments array
  const [comment, setComment] = useState('')

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${post.slug}`)
        setComments(res.data)
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        // Optionally, handle the error by setting state, showing a message, etc.
      }
    }
    fetchComments()
  }, [post.slug])

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/comments/${post.slug}`, { text: comment })
      setComments([...comments, res.data])
      setComment('')
    } catch (error) {
      console.error("Failed to post comment:", error);
      // Optionally, handle the error by setting state, showing a message, etc.
    }
  }

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
        <form onSubmit={handleCommentSubmit} className="flex flex-col items-center justify-center mt-6">
          <textarea
            className="w-full p-4 bg-black border border-green-500 rounded text-green-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-150 ease-in-out"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            rows={4}
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-green-800 text-green-300 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow transition duration-150 ease-in-out font-mono border border-green-500"
          >
            Submit_Comment
          </button>
        </form>
        <div className="comments-section mt-8 mx-auto p-6 bg-black bg-opacity-80 rounded-lg shadow-md max-w-4xl border border-green-500">
          {comments.map(comment => (
            <div key={comment.id} className="comment bg-black bg-opacity-50 p-4 mb-4 rounded shadow-sm border border-green-400 text-green-300">
              {comment.text}
            </div>
          ))}
        </div>
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
