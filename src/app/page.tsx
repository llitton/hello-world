export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGebi8dYmMzSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698087939434?e=1767225600&v=beta&t=cI2Cn70Y1C_3V5p73GmLPobSm-i64mRgjIFyPYr2Jy8"
            alt="Laura Litton"
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-white/30"
          />
          <h1 className="text-5xl font-bold text-white mb-3">
            Laura Litton
          </h1>
          <p className="text-xl text-white/90">
            Education Leader & Problem Solver
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            I take big problems and break them down into manageable chunks while
            brainstorming, collaborating, and delivering solutions.
          </p>
          <p className="text-white/90 leading-relaxed mb-4">
            My passion is enabling teachers to feel confident and supported so
            they are able to stay in the classroom and bring more continuity and
            dynamic teaching strategies to our students.
          </p>
          <p className="text-white/90 leading-relaxed">
            From teaching, coaching, leading a school, and growing teams in the
            education technology start-up world, I am always renewed by my work
            with students, teachers, school leaders, and software engineers to
            promote positive and sustainable solutions that continue to challenge
            students and bring teachers joy.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          <a
            href="https://github.com/llitton"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all hover:scale-[1.02]"
          >
            <span className="mr-3">💻</span>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lauralitton/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all hover:scale-[1.02]"
          >
            <span className="mr-3">💼</span>
            LinkedIn
          </a>
          <a
            href="mailto:laura@liveschoolinc.com"
            className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all hover:scale-[1.02]"
          >
            <span className="mr-3">✉️</span>
            Get in touch
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-white/60 text-sm mt-12">
          Made with Next.js & Vercel
        </p>
      </div>
    </div>
  );
}
