"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [darkMode, setDarkMode] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Laura was extremely responsive and prompt with her support. She provided multiple videos to explain how to pull reports that will support our school.",
      author: "School Administrator",
      role: "Partner School",
    },
    {
      quote: "Continues to keep us informed of enhancements and tweaks to save us time and increase student engagement.",
      author: "Teacher",
      role: "LiveSchool User",
    },
    {
      quote: "Ms. Litton is patient, helpful and always responds quickly to my questions.",
      author: "School Leader",
      role: "Partner School",
    },
    {
      quote: "Laura L. is ALWAYS so helpful and open to ideas!!",
      author: "Educator",
      role: "LiveSchool Community",
    },
    {
      quote: "Laura Litton for getting back to me so quickly with an amazing video to explain everything!",
      author: "School Staff",
      role: "Partner School",
    },
    {
      quote: "Laura was very pleasant, patient and helpful.",
      author: "Teacher",
      role: "LiveSchool User",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Load dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  // Save dark mode preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqaroegl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const stats = [
    { number: "17", label: "Years in Education" },
    { number: "150K+", label: "Educators Helped" },
    { number: "7,500+", label: "Schools Impacted" },
    { number: "4", label: "EdTech Startups" },
  ];

  const skills = {
    "Customer Success": [
      "Customer Success", "Customer Retention", "Customer Advocacy",
      "Churn Management", "Renewals", "CRM", "Lifetime Value"
    ],
    "Leadership": [
      "Strategic Planning", "Team Leadership", "Staff Development",
      "Coaching", "Cross-functional Initiatives", "Management"
    ],
    "Education": [
      "K-12 Education", "Curriculum Development", "Teacher Training",
      "Educational Technology", "Classroom Management", "Differentiated Instruction"
    ],
    "Technical": [
      "Salesforce", "HubSpot", "Tableau", "Looker", "Data Analysis", "SaaS"
    ],
    "Communication": [
      "Public Speaking", "Thought Leadership", "Problem Solving", "Collaboration"
    ],
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        : "bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900/80 border-white/10"
          : "bg-white/80 border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Laura Litton
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors ${
                  darkMode
                    ? "text-white/70 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-yellow-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <a
              href="https://meetings.hubspot.com/llitton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-20 flex">
        {/* Left Sidebar */}
        <aside className={`hidden lg:flex flex-col items-center w-20 fixed left-0 top-20 bottom-0 border-r py-8 transition-colors duration-300 ${
          darkMode ? "border-white/10" : "border-gray-200"
        }`}>
          <div className="flex flex-col gap-6">
            {[
              { href: "https://github.com/llitton", icon: "💻", label: "GitHub" },
              { href: "https://www.linkedin.com/in/lauralitton/", icon: "💼", label: "LinkedIn" },
              { href: "mailto:laura@liveschoolinc.com", icon: "✉️", label: "Email" },
              { href: "https://meetings.hubspot.com/llitton", icon: "📅", label: "Schedule" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  darkMode
                    ? "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="mt-auto mb-8">
            <div className={`w-px h-24 mx-auto ${
              darkMode
                ? "bg-gradient-to-b from-pink-500 to-transparent"
                : "bg-gradient-to-b from-pink-400 to-transparent"
            }`} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-20">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex items-center px-6 lg:px-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <p className="text-pink-400 font-medium mb-4 animate-fade-in">
                  Education Leader & Problem Solver
                </p>
                <h1 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    Laura Litton
                  </span>
                </h1>
                <p className={`text-xl mb-8 leading-relaxed ${
                  darkMode ? "text-white/70" : "text-gray-600"
                }`}>
                  I take big problems and break them down into manageable chunks
                  while brainstorming, collaborating, and delivering solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                  >
                    View My Work
                  </a>
                  <a
                    href="https://meetings.hubspot.com/llitton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 border font-medium rounded-full transition-colors ${
                      darkMode
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📅 Schedule a Meeting
                  </a>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl blur-3xl opacity-30" />
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGebi8dYmMzSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698087939434?e=1767225600&v=beta&t=cI2Cn70Y1C_3V5p73GmLPobSm-i64mRgjIFyPYr2Jy8"
                  alt="Laura Litton"
                  className="relative w-full max-w-md mx-auto rounded-3xl object-cover border-2 border-white/20"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className={`py-16 px-6 lg:px-16 ${darkMode ? "bg-white/5" : "bg-white/50"}`}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className={darkMode ? "text-white/60" : "text-gray-600"}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
                About Me
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { icon: "🎯", title: "Mission", desc: "Enabling teachers to feel confident and supported so they can stay in the classroom and bring dynamic teaching strategies to students." },
                  { icon: "💡", title: "Experience", desc: "From teaching, coaching, and leading schools to growing teams in the education technology start-up world." },
                  { icon: "❤️", title: "Passion", desc: "Working with students, teachers, school leaders, and software engineers to promote positive and sustainable solutions." },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 border transition-colors ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:border-pink-500/50"
                        : "bg-white border-gray-200 hover:border-pink-400 shadow-sm"
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-2xl mb-4">
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {item.title}
                    </h3>
                    <p className={darkMode ? "text-white/70" : "text-gray-600"}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className={`py-24 px-6 lg:px-16 ${darkMode ? "bg-white/5" : "bg-white/50"}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Skills & Expertise
              </h2>
              <p className={`mb-12 max-w-2xl ${darkMode ? "text-white/60" : "text-gray-600"}`}>
                A blend of education, customer success, and technical skills developed over 17 years.
              </p>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white/80" : "text-gray-700"}`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-default ${
                            darkMode
                              ? "bg-white/10 text-white/90 hover:bg-white/20"
                              : "bg-white text-gray-700 shadow-sm hover:shadow-md"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Featured Work
              </h2>
              <p className={`mb-12 max-w-2xl ${darkMode ? "text-white/60" : "text-gray-600"}`}>
                Projects and articles showcasing my experience in education technology
                and customer success.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    href: "https://www.whyliveschool.com/",
                    icon: "🏫",
                    title: "LiveSchool",
                    desc: "Building positive school culture through behavior tracking and PBIS tools that help teachers recognize student achievements.",
                    cta: "Visit Site →",
                    gradient: "from-pink-500/20 to-orange-400/20"
                  },
                  {
                    href: "https://gaingrowretain.com/kb/articles/205-unlocking-user-engagement-a-universal-challenge",
                    icon: "🚀",
                    title: "Unlocking User Engagement",
                    desc: "A deep dive into the universal challenge of user engagement in customer success and strategies to overcome it.",
                    cta: "Read Article →",
                    gradient: "from-purple-500/20 to-pink-400/20"
                  },
                  {
                    href: "https://gaingrowretain.com/kb/articles/116-how-to-create-an-effective-feedback-loop-between-customer-success-and-product-teams",
                    icon: "🔄",
                    title: "CS & Product Feedback Loops",
                    desc: "How to create an effective feedback loop between customer success and product teams for better outcomes.",
                    cta: "Read Article →",
                    gradient: "from-orange-500/20 to-yellow-400/20"
                  },
                ].map((project, index) => (
                  <a
                    key={index}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:border-pink-500/50"
                        : "bg-white border-gray-200 hover:border-pink-400 shadow-sm"
                    }`}
                  >
                    <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-5xl">{project.icon}</span>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? "text-white/60" : "text-gray-600"}`}>
                        {project.desc}
                      </p>
                      <span className="text-pink-400 text-sm font-medium">
                        {project.cta}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-24 px-6 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-3xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
                What People Say
              </h2>
              <div className="relative">
                <div className={`rounded-2xl p-8 lg:p-12 border ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200 shadow-lg"
                }`}>
                  <div className="text-5xl mb-6 opacity-30">❝</div>
                  <p className={`text-xl lg:text-2xl leading-relaxed mb-8 ${
                    darkMode ? "text-white/90" : "text-gray-700"
                  }`}>
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div>
                    <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {testimonials[activeTestimonial].author}
                    </p>
                    <p className={darkMode ? "text-white/60" : "text-gray-500"}>
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
                {/* Testimonial dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeTestimonial
                          ? "bg-pink-500 w-6"
                          : darkMode ? "bg-white/30 hover:bg-white/50" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className={`py-24 px-6 lg:px-16 ${darkMode ? "bg-white/5" : "bg-white/50"}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Let&apos;s Chat
              </h2>
              <p className={`mb-8 max-w-xl mx-auto ${darkMode ? "text-white/60" : "text-gray-600"}`}>
                Whether you want to discuss education technology, customer success strategies,
                or just connect — I&apos;d love to hear from you.
              </p>
              <a
                href="https://meetings.hubspot.com/llitton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-full hover:opacity-90 transition-opacity hover:scale-105 transform"
              >
                <span className="text-2xl">📅</span>
                Schedule a Meeting
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Get in Touch
                  </h2>
                  <p className={`mb-8 ${darkMode ? "text-white/60" : "text-gray-600"}`}>
                    Have a question or want to work together? I&apos;d love to hear
                    from you. Send me a message and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <div className="space-y-4">
                    {[
                      { href: "mailto:laura@liveschoolinc.com", icon: "✉️", text: "laura@liveschoolinc.com" },
                      { href: "https://www.linkedin.com/in/lauralitton/", icon: "💼", text: "LinkedIn Profile" },
                      { href: "https://meetings.hubspot.com/llitton", icon: "📅", text: "Book a Meeting" },
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-4 transition-colors ${
                          darkMode
                            ? "text-white/70 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          darkMode ? "bg-white/10" : "bg-gray-100"
                        }`}>
                          {contact.icon}
                        </span>
                        {contact.text}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-pink-500 transition-colors ${
                          darkMode
                            ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                            : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                        }`}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-pink-500 transition-colors ${
                          darkMode
                            ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                            : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                        }`}
                      />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-pink-500 transition-colors ${
                        darkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                          : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                      }`}
                    />
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-pink-500 transition-colors resize-none ${
                        darkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                          : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                      }`}
                    />
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {formStatus === "sent" && (
                      <p className="text-green-400 text-center">
                        Message sent successfully!
                      </p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-red-400 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className={`py-8 px-6 lg:px-16 border-t ${
            darkMode ? "border-white/10" : "border-gray-200"
          }`}>
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className={`text-sm ${darkMode ? "text-white/40" : "text-gray-400"}`}>
                © 2024 Laura Litton. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {["GitHub", "LinkedIn", "Email"].map((item) => (
                  <a
                    key={item}
                    href={
                      item === "GitHub" ? "https://github.com/llitton" :
                      item === "LinkedIn" ? "https://www.linkedin.com/in/lauralitton/" :
                      "mailto:laura@liveschoolinc.com"
                    }
                    target={item !== "Email" ? "_blank" : undefined}
                    rel={item !== "Email" ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-white/40 hover:text-white"
                        : "text-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <p className={`text-sm ${darkMode ? "text-white/40" : "text-gray-400"}`}>
                Built with Next.js & Vercel
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
