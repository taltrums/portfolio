import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      console.log(result.text)
      setName('')
      setEmail('')
      setMessage('')
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000) // Hide success message after 5 seconds
    } catch (error) {
      console.error(error)
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <h1 className="text-5xl font-bold mb-4 text-green-500 font-mono">
          Contact Me
        </h1>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-green-900 text-green-300 rounded-md font-mono"
          >
            Message sent successfully!
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 bg-green-900 text-green-300 rounded font-mono"
            required
          />
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 bg-green-900 text-green-300 rounded font-mono"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full p-2 bg-green-900 text-green-300 rounded font-mono"
            required
            rows={4}
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
          >
            Send_Message()
          </motion.button>
        </form>
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
          >
            &lt;Back_to_Home /&gt;
          </motion.button>
        </Link>
      </motion.section>
    </div>
  )
}
