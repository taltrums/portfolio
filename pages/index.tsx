import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-green-500 font-mono">
          Mohd Talha
        </h1>
        <p className="text-xl mb-8 font-mono">Web Developer | SRE | DevOps</p>
        <div className="flex flex-col space-y-4">
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt;My_Projects /&gt;
            </motion.button>
          </Link>
          <Link href="/blog" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt;My_Blog /&gt;
            </motion.button>
          </Link>
          <Link href="/skills" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt;My_Skills /&gt;
            </motion.button>
          </Link>
          <Link href="/about" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt;About_Me /&gt;
            </motion.button>
          </Link>
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt;Contact_Me /&gt;
            </motion.button>
          </Link>
        </div>
      </motion.main>
    </div>
  )
}
