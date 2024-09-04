import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-green-400">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-8 text-green-500 font-mono">
          My Skills
        </h1>
        <div className="space-y-6">
          {/* Add your skills here */}
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-300 font-mono">Web Development</h2>
            <p className="text-green-400 mb-4">HTML, CSS, JavaScript, React, Next.js</p>
          </div>
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-300 font-mono">Backend Development</h2>
            <p className="text-green-400 mb-4">Node.js, Express, Python, Django</p>
          </div>
          <div className="bg-green-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-300 font-mono">DevOps</h2>
            <p className="text-green-400 mb-4">Docker, Kubernetes, CI/CD, AWS</p>
          </div>
          {/* Add more skills as needed */}
        </div>
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
          >
            &lt;Back_to_Home /&gt;
          </motion.button>
        </Link>
      </motion.section>
    </div>
  )
}
