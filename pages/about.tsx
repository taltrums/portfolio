import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen p-4"
      >
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-gray-300 mb-6">
            Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With [X] years of experience in the field, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications.
          </p>
          <p className="text-gray-300 mb-6">
            My approach to web development is holistic – I believe in creating solutions that not only look great but also perform exceptionally. I'm constantly learning and staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
          </p>
          <p className="text-gray-300 mb-6">
            When I'm not coding, you can find me [Your Hobbies or Interests]. I believe that a well-rounded life fuels creativity and problem-solving skills, which I bring to every project I work on.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/skills" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/50">
              View My Skills
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}
