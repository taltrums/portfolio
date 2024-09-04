/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-green-500 font-mono">About Me</h1>
        <p className="mb-4 text-lg font-mono">
          Hello! I&apos;m Mohd Talha, a passionate web developer with a keen interest in creating robust and scalable web applications.
        </p>
        <p className="mb-4 text-lg font-mono">
          My journey in tech began with a fascination for how things work behind the scenes. This curiosity led me to dive deep into the world of web development, where I&apos;ve honed my skills in various technologies and best practices.
        </p>
        <p className="mb-4 text-lg font-mono">
          When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tech talks.
        </p>
        <p className="mb-8 text-lg font-mono">
          Let&apos;s connect and build something amazing together!
        </p>
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
          >
            &lt;Back_to_Home /&gt;
          </motion.button>
        </Link>
      </motion.section>
    </div>
  )
}
