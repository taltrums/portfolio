import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllProjects, Project } from '../lib/projects'

export default function Projects() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-8 text-green-500 font-mono">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-green-900 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2 text-green-300 font-mono">{project.title}</h2>
              <p className="text-green-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-green-800 text-green-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Link href={`/projects/${project.slug}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-green-700 text-green-200 rounded-md hover:bg-green-600 transition-colors shadow-md hover:shadow-green-500/50 font-mono border border-green-500"
                  >
                    View_Details()
                  </motion.button>
                </Link>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-green-700 text-green-200 rounded-md hover:bg-green-600 transition-colors shadow-md hover:shadow-green-500/50 font-mono border border-green-500"
                  >
                    GitHub_Repo()
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
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
