import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getProjectBySlug, Project } from '../../lib/projects'

const ProjectDetails = () => {
  const router = useRouter()
  const { slug } = router.query
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    if (typeof slug === 'string') {
      const fetchedProject = getProjectBySlug(slug);
      setProject(fetchedProject ?? null); 
    }
  }, [slug])

  if (!project) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black bg-opacity-80 text-green-400">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl p-6 bg-green-900 rounded-lg shadow-lg"
      >
        <h1 className="text-5xl font-bold mb-4 text-green-500 font-mono">{project.title}</h1>
        <p className="text-green-400 mb-8">{project.description}</p>
        <div className="text-green-300 prose prose-invert prose-green">
          <h3>Technologies Used:</h3>
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-green-800 text-green-200 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              &lt; Back
            </motion.button>
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1a4731' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-800 text-green-300 rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50 font-mono border border-green-500"
            >
              GitHub Repository
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
