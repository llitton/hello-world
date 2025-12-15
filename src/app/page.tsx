export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl">
            👋
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">
            Laura Litton
          </h1>
          <p className="text-xl text-white/90">
            Building cool things on the internet
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
          <p className="text-white/90 leading-relaxed">
            Welcome to my corner of the web! I&apos;m learning to build with
            Next.js and exploring the world of web development.
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all hover:scale-[1.02]"
          >
            <span className="mr-3">💼</span>
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
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
