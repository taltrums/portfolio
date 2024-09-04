import Layout from '../components/Layout'

export default function Skills() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full mx-auto backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            My Skills
          </h2>
          <p className="text-gray-300">
            This is the Skills page content.
          </p>
        </div>
      </div>
    </Layout>
  )
}
